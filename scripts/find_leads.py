#!/usr/bin/env python3
"""
Find small businesses in Rome with missing or bad websites, using the
Google Places API (New) Text Search + Place Details.

Setup:
    pip install -r requirements.txt
    cp .env.example .env   # then fill in GOOGLE_PLACES_API_KEY

Usage:
    python find_leads.py "trattoria" --area "Trastevere, Roma"
    python find_leads.py "parrucchiere" --area "Testaccio, Roma" --max 30

Appends results to leads.csv (created if missing) with a naive
"needs_review" flag for places that have no website at all — anything
flagged still needs a human look (a broken/ugly site won't show up as
"missing", just as a URL worth opening).
"""
import argparse
import csv
import os
import sys
from pathlib import Path

import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY")
SEARCH_URL = "https://places.googleapis.com/v1/places:searchText"
FIELD_MASK = "places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating,places.userRatingCount"

LEADS_CSV = Path(__file__).parent / "leads.csv"
CSV_FIELDS = ["business_name", "address", "phone", "website", "rating", "review_count", "needs_review", "status"]


def search_places(query: str, area: str, max_results: int):
    if not API_KEY:
        sys.exit("Missing GOOGLE_PLACES_API_KEY — set it in .env (see .env.example).")

    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELD_MASK,
    }
    payload = {"textQuery": f"{query} in {area}", "maxResultCount": min(max_results, 20)}

    resp = requests.post(SEARCH_URL, json=payload, headers=headers, timeout=15)
    resp.raise_for_status()
    return resp.json().get("places", [])


def load_existing_names():
    if not LEADS_CSV.exists():
        return set()
    with open(LEADS_CSV, newline="", encoding="utf-8") as f:
        return {row["business_name"] for row in csv.DictReader(f)}


def append_leads(places):
    existing = load_existing_names()
    is_new_file = not LEADS_CSV.exists()

    with open(LEADS_CSV, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        if is_new_file:
            writer.writeheader()

        added = 0
        for place in places:
            name = place.get("displayName", {}).get("text", "Unknown")
            if name in existing:
                continue

            website = place.get("websiteUri", "")
            writer.writerow(
                {
                    "business_name": name,
                    "address": place.get("formattedAddress", ""),
                    "phone": place.get("nationalPhoneNumber", ""),
                    "website": website,
                    "rating": place.get("rating", ""),
                    "review_count": place.get("userRatingCount", ""),
                    "needs_review": "yes" if not website else "check-quality",
                    "status": "new",
                }
            )
            added += 1
        return added


def main():
    parser = argparse.ArgumentParser(description="Find local business leads via Google Places.")
    parser.add_argument("query", help='Business type, e.g. "trattoria", "parrucchiere", "idraulico"')
    parser.add_argument("--area", default="Roma, Italia", help="Neighborhood/city to search, e.g. 'Trastevere, Roma'")
    parser.add_argument("--max", type=int, default=20, help="Max results to fetch (API caps at 20 per call)")
    args = parser.parse_args()

    places = search_places(args.query, args.area, args.max)
    added = append_leads(places)

    print(f"Fetched {len(places)} places, added {added} new leads to {LEADS_CSV}")
    print("Open leads.csv and check 'needs_review' — 'yes' means no website listed at all,")
    print("'check-quality' means a website exists but you still need to eyeball it.")


if __name__ == "__main__":
    main()
