(function () {
  const cfg = SITE_CONFIG;

  function fillText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    if (value) {
      el.textContent = value.replace("{{business.name}}", cfg.business.name || "");
    } else {
      el.closest("section")?.classList.add("hidden");
    }
  }

  function applyTheme() {
    const root = document.documentElement.style;
    root.setProperty("--primary", cfg.theme.primary);
    root.setProperty("--accent", cfg.theme.accent);
    root.setProperty("--font", cfg.theme.font);
    root.setProperty("--heading-font", cfg.theme.headingFont || cfg.theme.font);
    document.title = cfg.business.name;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", `${cfg.business.name} — ${cfg.hero.subheading || ""}`);
  }

  function renderHeader() {
    document.getElementById("logo-text").textContent = cfg.business.logoText || cfg.business.name.slice(0, 2).toUpperCase();
    if (cfg.business.logoImage) {
      const img = document.getElementById("logo-image");
      img.src = cfg.business.logoImage;
      img.alt = cfg.business.name;
      img.classList.remove("hidden");
      document.getElementById("logo-text").classList.add("hidden");
    }
    document.getElementById("nav-offerings").textContent = cfg.offerings.heading || "Menu";

    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav");
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  function renderHero() {
    fillText("hero-heading", cfg.hero.heading);
    fillText("hero-subheading", cfg.hero.subheading);
    const cta = document.getElementById("hero-cta");
    cta.textContent = cfg.hero.ctaText || "Contact Us";
    cta.href = cfg.hero.ctaLink || "#contact";
    if (cfg.hero.backgroundImage) {
      document.getElementById("hero").style.backgroundImage = `url('${cfg.hero.backgroundImage}')`;
    }
  }

  function renderAbout() {
    fillText("about-heading", cfg.about.heading);
    fillText("about-text", cfg.about.text);
    const img = document.getElementById("about-image");
    if (cfg.about.image) {
      img.src = cfg.about.image;
      img.alt = cfg.about.heading || "About";
    } else {
      img.classList.add("hidden");
    }
  }

  function renderOfferings() {
    fillText("offerings-heading", cfg.offerings.heading);
    const list = document.getElementById("offerings-list");
    if (!cfg.offerings.items || !cfg.offerings.items.length) {
      document.getElementById("offerings").classList.add("hidden");
      return;
    }
    list.innerHTML = cfg.offerings.items
      .map(
        (item) => `
      <div class="offering-item">
        <div class="offering-top">
          <h3>${item.name}</h3>
          ${item.price ? `<span class="price">${item.price}</span>` : ""}
        </div>
        ${item.description ? `<p>${item.description}</p>` : ""}
      </div>`
      )
      .join("");
  }

  function renderGallery() {
    fillText("gallery-heading", cfg.gallery.heading);
    const grid = document.getElementById("gallery-grid");
    if (!cfg.gallery.images || !cfg.gallery.images.length) {
      document.getElementById("gallery").classList.add("hidden");
      return;
    }
    grid.innerHTML = cfg.gallery.images
      .map((src) => `<img src="${src}" alt="${cfg.business.name} gallery" loading="lazy" />`)
      .join("");
  }

  function renderHours() {
    fillText("hours-heading", cfg.hours.heading);
    const table = document.getElementById("hours-table");
    if (!cfg.hours.schedule || !cfg.hours.schedule.length) {
      table.closest("div").classList.add("hidden");
    } else {
      table.innerHTML = cfg.hours.schedule
        .map((row) => `<tr><td>${row.day}</td><td>${row.hours}</td></tr>`)
        .join("");
    }

    const mapEl = document.getElementById("map-embed");
    if (cfg.map.embedSrc) {
      mapEl.innerHTML = `<iframe src="${cfg.map.embedSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
    } else {
      mapEl.classList.add("hidden");
    }

    if (!cfg.hours.schedule?.length && !cfg.map.embedSrc) {
      document.getElementById("hours").classList.add("hidden");
    }
  }

  function renderContact() {
    fillText("contact-heading", cfg.contact.heading);
    const list = document.getElementById("contact-list");
    const rows = [];
    if (cfg.contact.address) rows.push(`<li>📍 ${cfg.contact.address}</li>`);
    if (cfg.contact.phone) rows.push(`<li>📞 <a href="tel:${cfg.contact.phone.replace(/\s/g, "")}">${cfg.contact.phone}</a></li>`);
    if (cfg.contact.email) rows.push(`<li>✉️ <a href="mailto:${cfg.contact.email}">${cfg.contact.email}</a></li>`);
    list.innerHTML = rows.join("");

    const socials = document.getElementById("socials");
    const socialLinks = [];
    if (cfg.socials.instagram) socialLinks.push(`<a href="${cfg.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>`);
    if (cfg.socials.facebook) socialLinks.push(`<a href="${cfg.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook">FB</a>`);
    if (cfg.socials.tiktok) socialLinks.push(`<a href="${cfg.socials.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">TT</a>`);
    if (cfg.socials.website) socialLinks.push(`<a href="${cfg.socials.website}" target="_blank" rel="noopener" aria-label="Website">🌐</a>`);
    socials.innerHTML = socialLinks.join("");

    if (cfg.contact.whatsapp) {
      const fab = document.getElementById("whatsapp-fab");
      fab.href = `https://wa.me/${cfg.contact.whatsapp.replace(/[^\d]/g, "")}`;
      fab.classList.remove("hidden");
    }
  }

  function renderFooter() {
    fillText("footer-text", cfg.footer.text || `© ${new Date().getFullYear()} ${cfg.business.name}`);
  }

  applyTheme();
  renderHeader();
  renderHero();
  renderAbout();
  renderOfferings();
  renderGallery();
  renderHours();
  renderContact();
  renderFooter();
})();
