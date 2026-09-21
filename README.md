# Lomi and Lymph website

## Package status

This is a **complete replacement preview package** prepared for Cloudflare Pages. It is not approved for public launch until the remaining client content below has been supplied, reviewed and incorporated.

## What is included

- `index.html` — one-page landing page
- `privacy.html`, `accessibility.html`, `thank-you.html` and `404.html`
- `assets/` — website styles, script and image copies
- `robots.txt`, `sitemap.xml`, `_headers` and `_redirects`
- `PRELAUNCH-CHECKLIST.md`, `CONTENT-STILL-NEEDED.md` and `INVENTORY.md`

## Preview locally

Open `index.html` directly in a browser. For the most accurate test, run a simple local web server from this folder and open its local URL.

## Contact form

The form uses **FormSubmit**, the same delivery approach used for Kali Ikemoto’s website. It sends general inquiries to `halepamaikai@gmail.com`. The first submission will send an activation email to that address. Pōmaikaʻi must click **Activate Form**, then a second test submission must be completed before launch.

The form includes a honeypot field and required privacy acknowledgment. It must never be used for medical records, diagnoses, treatment details or other sensitive health information. Square remains the appointment and booking platform.

## Deploy to Cloudflare Pages

1. Place this complete folder in the approved private GitHub repository, or upload it directly to Cloudflare Pages.
2. For a Git-connected Pages project, set the production branch as agreed. No build command is required. Set the output directory to the repository root containing `index.html`.
3. Preview and test the Cloudflare Pages URL before connecting the domain.
4. Pōmaikaʻi should purchase and own `lomiandlymphhawaii.com`, then invite Webby Wahine as a collaborator with only the access needed to configure the site.
5. Connect both the apex domain and `www`; redirect one consistently to the preferred `www.lomiandlymphhawaii.com` address.

## DNS and email safety

Do not delete or overwrite existing MX, SPF, DKIM, DMARC or other email-verification records when connecting the website. Website records and email records serve different purposes. Record the existing DNS zone before any change, and verify email delivery after launch.

## Common updates

- Main text and links: edit `index.html`.
- Colors and layout: edit `assets/styles/main.css`.
- Logo and approved photos: place optimized copies in `assets/images/` and update the relevant `src` references.
- Form destination: update the FormSubmit address only with written client approval.
- Square booking links: replace the general Square URL with verified individual service URLs when available.

## External services

- Square for appointment booking
- FormSubmit for general-inquiry email delivery
- Google Maps for the embedded map and directions
- Instagram for the public social profile
- Cloudflare Pages for hosting

## Launch approval

Obtain written client approval before connecting the production domain or replacing any current live page.
