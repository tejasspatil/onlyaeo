# OnlyAEO Website — Setup Guide

## Step 1: Set Up Formspree (Email Form)

The contact form sends inquiries to tejas@gai.ventures and CC's amit@gai.ventures.

1. Go to **https://formspree.io** and sign up with tejas@gai.ventures
2. Click **"New Form"** → name it "OnlyAEO Contact"
3. Copy your form endpoint — it looks like: `https://formspree.io/f/abcdefgh`
4. Open `index.html` and find this line (~line 490):
   ```
   action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"
   ```
5. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual form ID (e.g., `xyzabcde`)
6. In Formspree dashboard → Form Settings → Notifications, add `amit@gai.ventures` as an additional email
7. The `_cc` hidden field will also CC amit automatically

**Free plan**: 50 submissions/month (upgrade for more)

---

## Step 2: Deploy to GitHub Pages

1. Go to **https://github.com** → create a free account (or log in)
2. Create a **new repository** — name it `onlyaeo-website` (set to Public)
3. Upload these files to the repo:
   - `index.html`
   - `CNAME`
   - `robots.txt`
   - `sitemap.xml`
4. Go to repo **Settings → Pages**
5. Under "Source", select **"Deploy from a branch"** → branch: `main`, folder: `/ (root)`
6. Click **Save**

GitHub will give you a URL like `https://yourusername.github.io/onlyaeo-website/`

---

## Step 3: Connect GoDaddy Domain (onlyaeo.com)

1. Log in to **https://godaddy.com** → My Products → DNS for `onlyaeo.com`
2. Delete any existing A records for `@` (root domain)
3. Add these **4 A records** (GitHub Pages IPs):

   | Type | Name | Value            | TTL |
   |------|------|------------------|-----|
   | A    | @    | 185.199.108.153  | 600 |
   | A    | @    | 185.199.109.153  | 600 |
   | A    | @    | 185.199.110.153  | 600 |
   | A    | @    | 185.199.111.153  | 600 |

4. Add a **CNAME record** for `www`:

   | Type  | Name | Value                              | TTL  |
   |-------|------|------------------------------------|------|
   | CNAME | www  | yourusername.github.io             | 3600 |

   *(Replace `yourusername` with your actual GitHub username)*

5. Back in GitHub → repo Settings → Pages → "Custom domain" → enter `onlyaeo.com` → Save
6. Check **"Enforce HTTPS"** (may take a few minutes to appear)

**DNS propagation takes 10 minutes to 48 hours.** Use https://dnschecker.org to verify.

---

## What's Already Done

- ✅ Full single-page landing site built
- ✅ SEO meta tags, Open Graph, Twitter Card
- ✅ JSON-LD structured data (Organization, Service, FAQPage, WebSite)
- ✅ robots.txt allowing AI crawlers (GPTBot, anthropic-ai, PerplexityBot)
- ✅ sitemap.xml
- ✅ CNAME file for GitHub Pages custom domain
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Scroll animations, FAQ accordion, form validation
- ✅ Contact form with CC to amit@gai.ventures
