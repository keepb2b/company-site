import type { FeeTableSection } from './feeTables.types'

export const feeTableSectionsEn: FeeTableSection[] = [
  {
    id: 'ecommerce',
    title: '1. E-commerce Development (Budget Freelancer)',
    columns: ['Type', 'Initial Development (JPY)', 'Monthly Cost (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Basic (Shopify, BASE)',
        badge: 'basic',
        prices: ['¥0 ~ ¥30,000', '¥0 ~ ¥15,000'],
        useCases:
          'Handmade accessories shop; local bakery selling bread online; used book store; pet supplies; charity event merchandise; class reunion t-shirt sales; neighborhood association goods; school festival pre-orders',
      },
      {
        type: 'Mid-range (WooCommerce)',
        badge: 'mid',
        prices: ['¥80,000 ~ ¥400,000', '¥2,000 ~ ¥10,000'],
        useCases:
          'Small farm selling vegetables; fishing gear shop; yoga studio props; coffee roaster beans; 100 SKUs of kimono accessories; local craft beer; second-hand kids clothes; auto parts for classic cars',
      },
      {
        type: 'High-end (Makeshop, EC-CUBE)',
        badge: 'high',
        prices: ['¥300,000 ~ ¥1,200,000', '¥10,000 ~ ¥35,000'],
        useCases:
          'Regional souvenir shop with 1,000+ items; small supermarket delivery; membership wine club; medical equipment for home care; rental wedding dress shop; flea market aggregator',
      },
    ],
  },
  {
    id: 'cms',
    title: '2. CMS Development (Traditional)',
    columns: ['Type', 'Project Cost (JPY)', 'Monthly Maintenance (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Basic (5–10 pages)',
        badge: 'basic',
        prices: ['¥30,000 ~ ¥80,000', '¥2,000 ~ ¥5,000'],
        useCases:
          'Barber shop info + price list; freelance photographer portfolio; small izakaya menu + location; piano teacher\'s lesson schedule; community center event calendar; church bulletin; dog walking service; tutoring ad; vegetable stand hours',
      },
      {
        type: 'Mid-range (10–30 pages)',
        badge: 'mid',
        prices: ['¥100,000 ~ ¥280,000', '¥5,000 ~ ¥15,000'],
        useCases:
          'Real estate agent with property listings; driving school course info; small hotel with room types; karate dojo with belt progression; local NPO activity reports; dental clinic with treatment explanations; bike rental shop; ramen shop chain (3 locations)',
      },
      {
        type: 'Enterprise (Large/EC integrated)',
        badge: 'high',
        prices: ['¥500,000 ~ ¥1,200,000', '¥15,000 ~ ¥50,000'],
        useCases:
          'City ward tourism portal; regional newspaper archive; franchise fast food landing pages; multi-location gym schedule; wedding venue brochure + booking inquiry',
      },
    ],
  },
  {
    id: 'bpa',
    title: '3. Business Process Automation (BPA)',
    columns: ['Scale', 'Project Cost (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Simple (kintone, Garoon, or Google Forms + Apps Script)',
        badge: 'basic',
        prices: ['¥20,000 ~ ¥200,000'],
        useCases:
          'Daily store sales report (Excel to email); shift request for 10 staff; purchase order approval for small factory; leave balance tracking; customer inquiry routing; inventory low-stock alert; meeting minutes distribution; employee onboarding checklist; reimbursement form',
      },
      {
        type: 'Mid-scale (Package RPA, e.g., WinActor, UiPath community)',
        badge: 'mid',
        prices: ['¥800,000 ~ ¥2,000,000'],
        useCases:
          'Automating monthly invoice PDF renaming; extracting data from scanned delivery slips; moving CRM data to mailing list; nightly backup of Google Drive to local NAS; auto-filling web forms from spreadsheet; social media posting scheduler',
      },
      {
        type: 'Enterprise (Full BPM)',
        badge: 'high',
        prices: ['¥6,000,000 ~ ¥15,000,000'],
        useCases:
          'Cross-departmental travel expense claim (5+ approvals); HR contract renewal reminders; quality inspection sign-off for small manufacturer',
      },
    ],
  },
  {
    id: 'ai',
    title: '4. AI Integration & Machine Learning',
    columns: ['Type', 'Project Cost (JPY)', 'Annual Cost (if SaaS)', 'Typical Use Cases'],
    rows: [
      {
        type: 'SaaS-based (ChatGPT API, Voiceflow, Zapier AI)',
        badge: 'basic',
        prices: ['¥10,000 ~ ¥150,000', '¥1,000,000 ~ ¥1,500,000'],
        useCases:
          'Chatbot for FAQs about train delays; AI that summarizes customer complaints; Japanese grammar checker for student essays; automated reply to common email inquiries; sentiment monitor of product reviews; recipe generator from leftover ingredients; event recommendation chatbot',
      },
      {
        type: 'Custom AI Development',
        badge: 'mid',
        prices: ['¥1,500,000 ~ ¥6,000,000', 'N/A'],
        useCases:
          'Predict which local store customers will return; sort fish by species from photo; estimate fruit ripeness for farmer; detect graffiti on public signage; auto-tag old family photos',
      },
    ],
  },
  {
    id: 'fullstack',
    title: '5. Full-Stack Web Development',
    columns: ['Complexity', 'Project Cost (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Simple (corporate site)',
        badge: 'basic',
        prices: ['¥200,000 ~ ¥600,000'],
        useCases:
          'Small law firm homepage; acupuncture clinic with booking button; translator portfolio + contact; tutoring school timetable; gardening service before/after gallery',
      },
      {
        type: 'Mid-level (booking system)',
        badge: 'mid',
        prices: ['¥600,000 ~ ¥1,500,000'],
        useCases:
          'Hair salon reservation (2 chairs); shared meeting room booking; private lesson scheduler (piano, swimming); car service appointment; pet grooming slot picker; community hall rental',
      },
      {
        type: 'Complex (custom web service)',
        badge: 'high',
        prices: ['¥3,000,000 ~ ¥8,000,000'],
        useCases:
          'Farmer-to-restaurant daily surplus listing; local freelance job board; equipment rental with live availability; neighborhood tool library; subscription for diaper delivery',
      },
    ],
  },
  {
    id: 'cloud',
    title: '6. Cloud & DevOps Engineering',
    columns: ['Cost Component', 'Monthly Estimate (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Small-scale Project',
        badge: 'basic',
        prices: ['¥50,000 ~ ¥120,000'],
        useCases:
          'Deploy WordPress on AWS Lightsail; set up GitHub Actions to run unit tests; automate backup of small PostgreSQL DB; move static site to S3 + CloudFront; create staging environment for a freelance app',
      },
      {
        type: 'Cloud Infrastructure (AWS/Azure/GCP)',
        badge: 'mid',
        prices: ['¥5,000 ~ ¥200,000'],
        useCases:
          'Auto-scaling for a local news site during election night; cheap disaster recovery for a dental clinic\'s patient DB; serverless image resizing for a photographer',
      },
      {
        type: 'DevOps/SRE Consultant Retainer',
        badge: 'high',
        prices: ['¥100,000 ~ ¥250,000'],
        useCases:
          'Add monitoring (UptimeRobot + Slack alerts); manage 1 small Kubernetes cluster (k3s); basic security scan for a WooCommerce shop',
      },
    ],
  },
  {
    id: 'performance',
    title: '7. Performance Optimization & Scalability Consulting',
    columns: ['Service Type', 'Cost Estimate (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'One-time Audit & Tuning',
        badge: 'basic',
        prices: ['¥500,000 ~ ¥1,200,000'],
        useCases:
          'EC site slow on weekends (fix image size, lazy load); reduce TTFB for a Japanese restaurant site hosted abroad; speed up search on a real estate site with 5,000 properties; optimize database for a small CRM',
      },
      {
        type: 'Annual Optimization Contract',
        badge: 'mid',
        prices: ['¥1,000,000 ~ ¥2,000,000'],
        useCases:
          'Monthly Lighthouse reports; cache tuning for a WordPress news site; CDN setup for a manga artist\'s portfolio; index recommendations for MariaDB',
      },
    ],
  },
  {
    id: 'api',
    title: '8. API-First & Headless Architecture',
    columns: ['Cost Component', 'Estimate (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Project Cost (Basic)',
        badge: 'basic',
        prices: ['¥1,000,000 ~ ¥2,500,000'],
        useCases:
          'Headless CMS for a bilingual (English/Japanese) community newsletter; mobile app backend for a food truck locator; power a Vue.js site for a small design agency',
      },
      {
        type: 'Headless CMS License (microCMS, Contentful)',
        badge: 'mid',
        prices: ['¥8,000/month (microCMS) ~ ¥25,000/month (Contentful)'],
        useCases:
          'Push menu changes to restaurant digital signage; blog + podcast site; real estate listing fed to both web and a LINE bot',
      },
    ],
  },
  {
    id: 'lowcode',
    title: '9. Low-Code/No-Code Application Development',
    columns: ['Scale', 'Project Cost (JPY)', 'Monthly License (per user)', 'Typical Use Cases'],
    rows: [
      {
        type: 'Basic App / Internal Tool',
        badge: 'basic',
        prices: ['¥80,000 ~ ¥300,000', '¥500 ~ ¥1,000'],
        useCases:
          'Volunteer sign-up sheet (Glide); car maintenance log for a small garage (Airtable); daily task checklist for cleaning crew (Retool free tier); student assignment dropbox (Softr + Google Sheets)',
      },
      {
        type: 'Complex / Enterprise App',
        badge: 'mid',
        prices: ['¥600,000 ~ ¥1,800,000', '¥4,000 ~ ¥15,000'],
        useCases:
          'Vendor onboarding portal (Bubble); expense approval with photo receipts (Adalo); field inspection app for construction safety (OutSystems free tier until scale)',
      },
    ],
  },
  {
    id: 'martech',
    title: '10. MarTech Development',
    columns: ['Service', 'Setup/Integration Cost (JPY)', 'Monthly License (JPY)', 'Typical Use Cases'],
    rows: [
      {
        type: 'MA Tool License (HubSpot Starter, SATORI Lite)',
        badge: 'basic',
        prices: ['¥30,000 ~ ¥150,000', '¥30,000 ~ ¥70,000'],
        useCases:
          'Send birthday coupons to loyalty members; auto-tag leads from a trade show form; re-engage inactive newsletter subscribers',
      },
      {
        type: 'Custom Integration Development',
        badge: 'mid',
        prices: ['¥150,000 ~ ¥800,000', 'N/A'],
        useCases:
          'Connect Google Forms to LINE Notify; sync WordPress form to Mailchimp; push new Shopify orders to a Discord channel; send SMS from Airtable via Twilio',
      },
    ],
  },
]
