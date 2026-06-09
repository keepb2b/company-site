import fs from 'fs'

const source = fs.readFileSync('F:/aaa/final/tmp-workcases-source.txt', 'utf8')
const content = source.split('<user_query>').pop().split('</user_query>')[0]

const parts = content.split(/## SERVICE (\d+)：/)
const groupsJa = []

for (let i = 1; i < parts.length; i += 2) {
  const num = parts[i]
  const rest = parts[i + 1]
  const titleEnd = rest.indexOf('\n\n')
  const serviceTitle = rest.slice(0, titleEnd).trim()
  const block = rest.slice(titleEnd)
  const caseParts = block.split(/### 事例(\d+-\d+)：/).slice(1)
  const cases = []

  for (let j = 0; j < caseParts.length; j += 2) {
    const idRaw = caseParts[j]
    const [svc, idx] = idRaw.split('-')
    const id = `${svc.padStart(2, '0')}-${idx}`
    const body = caseParts[j + 1]
    const titleEnd2 = body.indexOf('\n**課題**')
    const title = body.slice(0, titleEnd2).trim()
    const challenge = body.match(/\*\*課題\*\*：(.+?)\s*\n\*\*解決策\*\*：/s)[1].trim()
    const solution = body.match(/\*\*解決策\*\*：(.+?)\s*\n\*\*結果\*\*：/s)[1].trim()
    const result = body.match(/\*\*結果\*\*：(.+?)(?=\n\n---|\n\n##|\n\n以上、|$)/s)[1].trim()
    cases.push({ id, title, challenge, solution, result })
  }

  groupsJa.push({ serviceNumber: num.padStart(2, '0'), serviceTitle, cases })
}

const serviceTitlesEn = {
  '01': 'AI Chatbots & Customer Support',
  '02': 'AI-Powered Business Automation',
  '03': 'API Development & Integrations',
  '04': 'Cloud Infrastructure & DevOps',
  '05': 'CMS Development & Integration',
  '06': 'CRM & Customer Management',
  '07': 'Custom Web Application Development',
  '08': 'Dashboard & Analytics Platforms',
  '09': 'E-Commerce Site Development',
  '10': 'ERP & Inventory Management',
  '11': 'Maintenance, Optimization & Technical Support',
  '12': 'Marketplace Integrations',
  '13': 'Mobile App Development',
  '14': 'SaaS Platform Development',
  '15': 'Shopify / eBay / Amazon Automation',
  '16': 'UI/UX Design & Frontend',
  '17': 'Workflow Automation',
}

const casesEn = {
  '01-1': {
    title: 'Automated Order Status Responses for E-Commerce',
    challenge:
      'Monthly inquiries such as "My order has not arrived" and "Where is my shipment?" accounted for 80% of live support volume (1,500 tickets), with an average response time of 24 hours.',
    solution:
      'We integrated the order management system with an AI chatbot via API. When users enter an order number, delivery status (shipped, in transit, delivered) is shown in real time. Only exceptions (delays or lost packages) escalate to operators. A knowledge base that learns from FAQs is updated weekly.',
    result:
      '94% of shipping-related inquiries are resolved automatically. Live tickets dropped to 80 per month. Average response time fell to 2 seconds, and customer satisfaction improved from 4.2 to 4.8 (out of 5).',
  },
  '01-2': {
    title: 'Insurance Quote Chatbot with Live-Agent Handoff',
    challenge:
      'On an insurance agency website, the quote form had an 85% abandonment rate. Users could not understand complex coverage details and left mid-flow.',
    solution:
      'We deployed a conversational chatbot that asks about age, family structure, and budget, then recommends suitable plans. After showing a quote, a "Talk to an expert" button lets users continue with an operator, with full conversation history carried over.',
    result:
      'Quote completion rose from 15% to 58%. Contracts after live handoff reached 2.3× the previous rate, and monthly contracts grew from 30 to 110.',
  },
  '01-3': {
    title: 'SaaS Error Message Resolution Chat',
    challenge:
      'Business SaaS users often could not interpret messages such as "Error code: E-401" and churned before contacting support.',
    solution:
      'When users paste an error message, AI pulls causes and up to three resolution steps from the knowledge base and past ticket history. If unresolved, error logs and action history are collected automatically and a support ticket is created.',
    result:
      'First-contact resolution reached 68%. Support tickets fell from 800 to 250 per month. Self-service satisfaction improved, and Net Promoter Score rose from +12 to +35.',
  },
  '02-1': {
    title: 'Invoice OCR Auto-Booking with Accounting Integration',
    challenge:
      'Finance manually entered 500+ invoices per month (PDF, fax, email). Average 10 posting errors monthly delayed month-end close by five business days.',
    solution:
      'AI OCR (Document AI) extracts vendor, date, amount, tax category, and bank details. A rules engine assigns accounts and creates journal entries in Freee or Money Forward via API. Low-confidence or mismatched items go to a human review queue.',
    result:
      'Data entry dropped from 20 hours to 1 hour per week. Error rate fell below 0.3%. Month-end close now completes in two days.',
  },
  '02-2': {
    title: 'Slack Inquiry Auto-Routing and Resolution Suggestions',
    challenge:
      'Internal Slack received ~50 varied inquiries daily ("When is expense deadline?", "My PC is slow"). Misrouting caused chronic response delays.',
    solution:
      'A BERT-based classifier tags messages (Finance, General Affairs, IT, HR, etc.) and forwards them to the right channel while surfacing links to similar past Q&A. Humans respond only when AI suggestions fail.',
    result:
      'Time to first response fell from 4 hours to 12 minutes. 58% of inquiries resolve with AI suggestions alone, halving help desk load.',
  },
  '02-3': {
    title: 'Meeting Transcription to Minutes and Auto Task Creation',
    challenge:
      'Weekly project meetings (~20) required ~30 minutes per member for minutes, with missed action items.',
    solution:
      'Zoom recordings are transcribed with Whisper API; GPT-4 extracts decisions, open issues, and next actions (owner and deadline). Tasks auto-register in JIRA or Asana and summary emails go to stakeholders.',
    result:
      'Minutes creation time reached zero. Action completion rose from 65% to 92%. Meeting time itself shortened 20% due to less repetition.',
  },
  '03-1': {
    title: 'Unified Payment Gateway API (PayPay, LINE Pay, Convenience Store)',
    challenge:
      'The e-commerce site supported only PayPay; users wanting LINE Pay or convenience store payment abandoned checkout. Building each provider API separately was costly.',
    solution:
      'We built an in-house REST payment aggregator with a unified interface. The frontend switches providers with one token. Webhooks receive payment status in real time.',
    result:
      'Adding a new payment method dropped from 2 weeks to 2 days. After convenience store payment, conversion among users under 40 rose 23%. Payment errors fell to one-third of prior levels.',
  },
  '03-2': {
    title: 'Bidirectional GraphQL Sync Between CRM and MA Tools',
    challenge:
      'Salesforce customer data and HubSpot marketing activity were out of sync, so sales missed email open timing.',
    solution:
      'We defined a GraphQL schema and built middleware syncing Salesforce and HubSpot deltas every five minutes. Sales dashboards query both systems in real time through one interface.',
    result:
      'Deal close rate rose from 18% to 31%. Duplicate data and manual exports were eliminated, saving sales 8 hours per week.',
  },
  '03-3': {
    title: 'Wholesale Inventory Inquiry and Order API',
    challenge:
      'Wholesale orders arrived by fax or phone, causing order errors and post-stock-out orders. Wholesalers wanted real-time inventory visibility.',
    solution:
      'We designed an authenticated REST API integrating inventory and order systems. Wholesalers can check stock, bulk upload orders, and receive automatic delivery dates via API.',
    result:
      'Fax and phone orders were retired. Order errors fell from 12 per month to zero. Ordering time dropped from 15 minutes to 2 minutes on average, and transaction volume grew 40%.',
  },
  '04-1': {
    title: 'Black Friday Auto-Scaling (AWS ECS + Fargate)',
    challenge:
      'The e-commerce site crashed during annual sales. Peak traffic reached 20× normal, but always-on capacity was wasteful.',
    solution:
      'We containerized on ECS Fargate with Application Auto Scaling. When CPU exceeds 60%, tasks scale from 2 to 50. ALB request-based scaling was added.',
    result:
      'Response time stayed under 200 ms during sales. Normal-time cost halved with peak-only scaling. Zero downtime achieved.',
  },
  '04-2': {
    title: 'CI/CD Pipeline: Deploy Time 40 Min to 5 Min (GitHub Actions + GCP)',
    challenge:
      'Java app deploys took 40 minutes via manual build and SCP. Rollbacks were slow; recovery often exceeded one hour.',
    solution:
      'GitHub Actions on push to main runs tests, builds Docker images, pushes to Artifact Registry, and canary-deploys 10% traffic to Cloud Run before full rollout.',
    result:
      'Deploy time is 5 minutes. Rollback is one click within one minute. Monthly downtime from incidents fell from ~2 hours to near zero.',
  },
  '04-3': {
    title: 'Multi-Cloud Monitoring with Slack Alerts (Datadog)',
    challenge:
      'Resources split across AWS (EC2/RDS) and Azure (AKS) required separate consoles, slowing incident detection.',
    solution:
      'Datadog aggregates metrics (CPU, memory, disk I/O, SQL error rate) from both clouds. Threshold breaches notify Slack #incident and trigger OpsGenie on-call calls.',
    result:
      'Mean time to detect fell from 20 to 3 minutes. Mean time to recover from 2 hours to 18 minutes. Annual revenue loss from outages reduced by ¥12M.',
  },
  '05-1': {
    title: 'WordPress to Headless (Next.js) Migration — 3× Faster',
    challenge:
      'The corporate WordPress site (many themes) was slow with LCP at 3.2s, hurting SEO. Editors wanted to keep the WordPress admin.',
    solution:
      'WordPress remains the REST API backend. The frontend uses Next.js SSG with all articles pre-rendered at build time. Images use Next.js Image optimization.',
    result:
      'LCP improved from 3.2s to 0.9s. Average Google ranking rose 5 positions. Editors still update in WordPress with unchanged operating cost.',
  },
  '05-2': {
    title: 'Movable Type and Inventory System Integration (Manufacturing Catalog)',
    challenge:
      'Product catalog specs (weight, dimensions, stock) were manually updated in CMS while duplicating the inventory system, causing frequent errors.',
    solution:
      'A Movable Type plugin fetches inventory API data into custom fields. Pages show live stock at render time; editors only maintain spec copy in CMS.',
    result:
      'Stock mismatch errors fell from 40 per month to zero. Update work dropped from 8 hours to 1 hour per week.',
  },
  '05-3': {
    title: 'Shared Headless CMS Across 10 Brands',
    challenge:
      'Ten group companies used separate CMS platforms (WordPress, Jimdo, hand-built HTML), making unified design and security updates difficult.',
    solution:
      'Contentful serves as the shared platform with per-brand spaces. Common components (header, footer, news) are libraryized. Each brand frontend uses Next.js with the same data SDK.',
    result:
      'Annual site operations cost reduced by ¥8M. Security patches apply automatically via Contentful. Consistent UI/UX unified brand value.',
  },
  '06-1': {
    title: 'Sales Deal History Visualization Dashboard',
    challenge:
      'The B2B sales team managed customers in Excel and email. Finding past deal notes took ~15 minutes on average with frequent handoff errors.',
    solution:
      'We built a custom CRM with timeline views of phase, next action, attachments, and notes per deal. Reminders surface deals with no contact in a week.',
    result:
      'Close rate rose from 18% to 32%. Information lookup dropped under one minute on average, and customer-facing time increased 1.5×.',
  },
  '06-2': {
    title: 'Unified Inquiry History (Phone, Email, Chat)',
    challenge:
      'Support managed phone, email, and chat in separate tools. Customers often complained that prior phone conversations were unknown.',
    solution:
      'All channels feed one CRM. Phone uses CTI with recording and transcription; email via IMAP; chat via API. Customer ID links all history for instant operator access.',
    result:
      'CSAT rose from 3.4 to 4.7 (out of 5). Duplicate tickets for the same issue fell 70%.',
  },
  '06-3': {
    title: 'CRM with Built-In Segmented Campaigns',
    challenge:
      'A D2C brand used a separate MA tool for newsletters without purchase history, sending uniform coupons with weak results.',
    solution:
      'CRM auto-segments by purchase count, last purchase date, and favorite categories. Example: 10% off to "no purchase in 3+ months with 2+ past orders."',
    result:
      'Repeat rate rose from 25% to 41%. Dormant customer reactivation reached 2.5× prior levels. MA tool cost was cut by consolidating into CRM.',
  },
  '07-1': {
    title: 'Remote Attendance System (Clock-In, Requests, Payroll)',
    challenge:
      'Paper time cards and Excel aggregation caused missed punches and tampering under remote work. Payroll took finance three days monthly.',
    solution:
      'We built a Laravel + Vue.js web app with GPS clock-in (allowed outside office IP), paid-leave workflow, overtime auto-calculation, and freee payroll API integration.',
    result:
      'Payroll work dropped from 3 days to 2 hours monthly. Missed punches fell from 200 to 5 per month. Request-to-approval time fell from 2 days to 1 hour.',
  },
  '07-2': {
    title: 'Members-Only Recipe Site (Shopping Lists, Nutrition Filters)',
    challenge:
      'A health food maker wanted a recipe site for engagement but off-the-shelf plugins lacked required features.',
    solution:
      'Custom React + Node.js build with favorites, ingredient-based recipe suggestions, one-click shopping lists with Rakuten price comparison, and filters for carbs, calories, and sodium.',
    result:
      '1,200 paid members in three months. 500K monthly PV. Shopping list usage exceeded 80%, boosting ad revenue.',
  },
  '07-3': {
    title: 'Factory Sensor Remote Monitoring (Predictive Maintenance)',
    challenge:
      'Production equipment stoppages cost ¥1M per hour with only reactive maintenance and no data-driven prevention.',
    solution:
      'IoT sensors (temperature, vibration, power) feed AWS IoT Core. A React + D3.js dashboard shows live graphs with email/Slack alerts. ML flags equipment with ≥80% failure probability.',
    result:
      'Unplanned stoppages fell from 3 per month to 1 per year. Annual loss reduced from ¥120M to ¥8M. Maintenance became data-driven with half the effort.',
  },
  '08-1': {
    title: 'Sales Forecast Dashboard (BigQuery + Looker)',
    challenge:
      'A retailer set weekly orders from past sales only, ignoring weather and events, causing overstock and stockouts.',
    solution:
      'Three years of sales, weather (temperature, rain probability), and local events unified in BigQuery. LightGBM forecasts weekly sales; Looker shows forecast, recommended orders, and confidence intervals.',
    result:
      'Inventory waste fell from 15% to 6%. Stockout opportunity loss reduced from ¥30M to ¥8M annually. Ordering decisions dropped from 8 hours to 1 hour weekly.',
  },
  '08-2': {
    title: 'Real-Time Customer Support KPI Monitoring',
    challenge:
      'Support SLA (average response within 24 hours) was reviewed monthly, delaying corrective action.',
    solution:
      'A real-time dashboard integrates Zendesk showing open tickets, live first-response time, resolution rate, and CSAT trends. Managers alert when response exceeds 2 hours.',
    result:
      'SLA achievement rose from 88% to 99.5%. Staffing adjusts immediately during peaks, cutting 20 overtime hours monthly.',
  },
  '08-3': {
    title: 'Automated Marketing ROI Reports (CPA and LTV by Channel)',
    challenge:
      'An agency manually compiled Google Ads, Meta, LINE, and email reports in Excel for 10 hours weekly with stale data.',
    solution:
      'APIs pull spend, impressions, clicks, and conversions into BigQuery. User journeys link clicks to purchases for channel CPA, ROAS, and LTV. Looker Studio auto-updates reports.',
    result:
      'Report creation time reached zero. Weekly budget allocation became data-driven; overall ROAS rose from 3.2 to 4.8.',
  },
  '09-1': {
    title: 'Shopify Plus B2B E-Commerce (Company Pricing and Quotes)',
    challenge:
      'A wholesaler ran B2C on Shopify but needed per-company pricing, volume discounts, and quote requests for B2B.',
    solution:
      'Shopify Plus custom price lists and B2B catalog plus a custom quote app storing price tables by company ID. Orders auto-apply company payment terms (invoice, net terms).',
    result:
      'B2B order processing dropped from 15 to 2 minutes per order. Wholesale order errors fell 90%. B2B revenue reached 2.5× in three months.',
  },
  '09-2': {
    title: 'EC-CUBE to Makeshop Migration with Inventory and Shipping APIs',
    challenge:
      'Legacy EC-CUBE posed security risks with limited payment options. Migration to Makeshop required custom inventory and carrier API integration (Yamato, Sagawa).',
    solution:
      'Makeshop extension APIs sync inventory in real time. Orders trigger shipping APIs; tracking numbers return automatically. Custom tool migrated members and order history.',
    result:
      'Site speed doubled post-migration. More payment options cut cart abandonment from 22% to 12%. Monthly revenue grew 40% YoY.',
  },
  '09-3': {
    title: 'Subscription E-Commerce Site (Cosmetics Brand)',
    challenge:
      'A cosmetics brand wanted subscriptions but their platform lacked native recurring functionality.',
    solution:
      'Customized Shopify + subscription apps (Rebuy, Bold). My Page allows skip, reschedule, and cancel. Loyalty rules like "10% off after 3 months" apply automatically.',
    result:
      '85% subscription retention vs. 65% industry average. Customer LTV reached 2.4×. 54% of first buyers enrolled in subscriptions.',
  },
  '10-1': {
    title: 'Manufacturing ERP (Parts Inventory to Production to Shipment)',
    challenge:
      'A mid-size manufacturer tracked parts, orders, production, and shipping in separate Excel files. Month-end inventory took five days with frequent over/under ordering.',
    solution:
      'Web ERP (Laravel + PostgreSQL) with safety stock and auto reorder suggestions. MRP for production orders and real-time workflow for process progress.',
    result:
      'Inventory turnover improved from 2.5 to 4.2. Month-end stocktake dropped from 5 days to half a day. Production lead time fell from 8 to 5 days.',
  },
  '10-2': {
    title: 'Warehouse WMS (Barcode Picking and Inspection)',
    challenge:
      'Wrong shipments occurred ~200 times yearly. Paper pick lists and visual inspection caused errors.',
    solution:
      'Android PDA web app scans barcodes on receipt, optimizes pick routes, re-scans at inspection with alarms on mismatch, and auto-syncs tracking to carriers.',
    result:
      'Shipment errors fell from 200 to 5 per year. Pick time dropped from 2 minutes to 40 seconds per order. New worker training time halved.',
  },
  '10-3': {
    title: 'Retail Chain Inter-Store Inventory Transfer System',
    challenge:
      'Among 30 apparel stores, some overstocked while others stockout. Inter-store transfers relied on phone and fax.',
    solution:
      'Cloud ERP aggregates POS data. Store managers view live stock and request transfers with one button; logistics API handles dispatch.',
    result:
      'Lost sales reduced from ¥30M to ¥9M annually. Transfer lead time fell from 3 days to 1 day. Inventory write-offs halved.',
  },
  '11-1': {
    title: 'E-Commerce Vulnerability Assessment and Emergency Patching',
    challenge:
      'Annual security checks only; Log4j and PHP vulnerabilities required urgent fixes but internal skills were lacking.',
    solution:
      'Monthly penetration testing (automated + manual). Critical patches within 24 hours under contract. WAF rule tuning included.',
    result:
      'Zero incidents over two years. PCI DSS audit passed cleanly. Customer trust drove 10% revenue growth.',
  },
  '11-2': {
    title: 'Legacy Laravel Performance Tuning',
    challenge:
      'A Laravel business app averaged 3s list views with N+1 queries and occasional memory crashes.',
    solution:
      'Telescope profiling identified N+1; fixed with eager loading. Redis query cache, CDN for images, and OpCache tuning.',
    result:
      'Page load dropped from 3s to 0.4s average. Server CPU/memory usage fell from 60% to 25%. User bounce rate halved.',
  },
  '11-3': {
    title: 'PHP 5.6 to 8.2 Upgrade Support',
    challenge:
      'A 10-year-old PHP 5.6 app faced end of security support without in-house upgrade expertise.',
    solution:
      'Phased plan: PHPStan for deprecations, compatibility fixes (mysql_* to PDO), staged upgrades 7.4 → 8.0 → 8.2 with added unit tests.',
    result:
      'Security risk eliminated. Performance doubled (JIT). New feature development accelerated 1.5×.',
  },
  '12-1': {
    title: 'Amazon Listing and Inventory Auto-Sync (FBA and Own Warehouse)',
    challenge:
      'A manufacturer held stock in own warehouse and Amazon FBA with mismatches causing overselling on one channel while stock remained on another.',
    solution:
      'Amazon SP-API fetches inventory every 5 minutes, reconciles with internal stock, auto-adjusts, and applies price changes per Amazon rules.',
    result:
      'Amazon inventory penalty warnings fell from 5 to 0 monthly. Inventory turnover improved 20%. Manual work cut 10 hours weekly.',
  },
  '12-2': {
    title: 'Rakuten and Yahoo! Shopping Unified Orders and Tracking Sync',
    challenge:
      'Orders downloaded separately from each mall and manually entered; tracking numbers uploaded by hand with frequent errors.',
    solution:
      'REST APIs pull orders from Rakuten RMS and Yahoo! Shopping into one system. Tracking numbers auto-upload to both malls on shipment; cancellations and returns sync.',
    result:
      'Order processing dropped from 3 hours to 15 minutes daily. Tracking errors fell from 20 to 0 monthly. Marketplace ratings improved for fast shipping notices.',
  },
  '12-3': {
    title: 'Real-Time Inventory Sync Across Amazon, Rakuten, and Own EC',
    challenge:
      'Selling the same SKU on three channels with separate updates caused post-sale stockouts and cancellations.',
    solution:
      'Cloud inventory hub (linked to Service 10 ERP) connects mall APIs and Shopify. Any order instantly decrements all channels; per-channel rules supported.',
    result:
      'Double-order cancellation rate fell from 8% to 0.2%. Real-time sync reduced lost sales by ¥15M annually.',
  },
  '13-1': {
    title: 'Native iOS/Android Delivery Driver App (Swift/Kotlin)',
    challenge:
      'Drivers reported deliveries on paper and feature phones; HQ lacked real-time location and completion data for customer inquiries.',
    solution:
      'Native apps (Swift/Kotlin) send location every 5 seconds, scan barcodes for delivery completion with photo proof, and sync offline when connectivity returns.',
    result:
      'Real-time delivery visibility cut "Where is my package?" response time from 10 minutes to 10 seconds. Paper forms retired, saving ¥3M annually.',
  },
  '13-2': {
    title: 'Cross-Platform B2B Sales App (Flutter)',
    challenge:
      'Field sales needed catalogs and quotes on the go; paper was heavy to update. Both iOS and Android required with limited resources.',
    solution:
      'Flutter cross-platform app with offline catalogs (PDF/3D), on-site quote creation and email send, real-time CRM sync via API.',
    result:
      '~50% less development vs. native (90% code sharing). Close rate rose from 22% to 34%. Printing costs eliminated.',
  },
  '13-3': {
    title: 'React Native Consumer EC App (Push Notifications and Wallet)',
    challenge:
      'Mobile web conversion was low; the team wanted a native app for repeat purchases using React Native.',
    solution:
      'React Native app integrates Shopify via GraphQL. Push notifications for sales and cart abandonment; Apple Pay and Google Pay for one-tap checkout.',
    result:
      'App sales reached 35% of total revenue. Cart recovery via push rose from 18% to 34%. Delivered in 3 months.',
  },
  '14-1': {
    title: 'Multi-Tenant Quote and Invoice Automation SaaS',
    challenge:
      'Launching SMB quote/invoice SaaS required difficult tenant isolation, billing, and permission design.',
    solution:
      'Multi-tenant architecture with PostgreSQL RLS and schema separation (Rails + Apartment). Stripe Connect per-tenant billing with roles (admin, editor, viewer).',
    result:
      '50 tenants in four months post-beta. Quote creation dropped from 40 to 8 minutes on average. Zero missed invoices.',
  },
  '14-2': {
    title: 'Healthcare SaaS (Booking, Video, EHR Integration)',
    challenge:
      'Clinic telehealth platform needed booking, WebRTC video, HL7 EHR integration, and HIPAA-grade security.',
    solution:
      'Tenant isolation on AWS VPC with encrypted RDS. Daily.co for video. HL7 over MLLP to HTTP gateway. Audit logs and retention policies implemented.',
    result:
      'Five-clinic pilot handled 800 visits monthly. Patient wait time fell from 40 to 8 minutes. National rollout began after certification.',
  },
  '14-3': {
    title: 'Multi-Brand White-Label Survey SaaS',
    challenge:
      'A research firm wanted per-client branded survey SaaS with custom domains, logos, and CSS.',
    solution:
      'Next.js middleware resolves subdomains/custom domains and applies tenant themes dynamically. Unified GraphQL API. Usage-based billing per response.',
    result:
      '30 client companies in year one. White-label differentiation succeeded. ARR exceeded ¥500M.',
  },
  '15-1': {
    title: 'Shopify and Amazon Inventory and Price Auto-Sync (Cross-Border)',
    challenge:
      'Japan-to-US cross-border sales on Shopify and Amazon.com suffered manual inventory updates and FX-driven margin erosion.',
    solution:
      'AWS Lambda links Shopify webhooks and Amazon SP-API. Inventory syncs within 10 seconds. Daily FX-based price recalculation on both channels.',
    result:
      'Zero stockouts and pricing errors. Saved 80 labor hours monthly. Margin improved 5% through proper pricing.',
  },
  '15-2': {
    title: 'eBay and Shopify Order and Fulfillment Sync (Python + eBay API)',
    challenge:
      'A handmade seller duplicated orders across eBay and Shopify and created separate shipping labels manually.',
    solution:
      'Middleware connects eBay Fulfillment API and Shopify Order API. eBay orders auto-create in Shopify; tracking entered once updates both. Real-time inventory sync.',
    result:
      'Double-entry time dropped from 15 hours weekly to zero. Wrong shipments fell from 3 to 0 monthly. eBay top-seller rating for shipping speed.',
  },
  '15-3': {
    title: 'Amazon MCF and Shopify Auto-Integration',
    challenge:
      'Shopify seller without warehouse wanted Amazon Multi-Channel Fulfillment but lacked auto order submission from Shopify.',
    solution:
      'Shopify checkout triggers Amazon MCF API order creation. MCF tracking auto-updates Shopify. Returns sync both systems.',
    result:
      'Fulfillment fully outsourced; only inbound to Amazon warehouse remains. Shipment error rate below 0.1%. Customer satisfaction improved with end-to-end automation.',
  },
  '16-1': {
    title: 'Design System (Storybook + Tailwind + Figma)',
    challenge:
      'A large web app had inconsistent buttons and forms. New features required costly one-off CSS.',
    solution:
      'Figma design tokens (color, typography, spacing). Storybook component catalog as React components. Tailwind extended to match tokens.',
    result:
      'UI consistency reached 98%. Feature development speed doubled. Designer-engineer coordination effort halved.',
  },
  '16-2': {
    title: 'Next.js + Framer Motion Animated Landing Page',
    challenge:
      'A B2B SaaS static HTML landing page had high bounce and failed to convey product value.',
    solution:
      'Next.js with Framer Motion scroll animations (parallax, fade-in, number counters). WebP images with lazy loading for performance.',
    result:
      'Bounce rate fell from 65% to 42%. Free trial conversion rose from 2.1% to 5.8%. Mobile load time reached 1.8 seconds.',
  },
  '16-3': {
    title: 'WCAG 2.1 AA Compliant Admin Dashboard',
    challenge:
      'A public-sector admin system required screen reader and keyboard support for visually impaired operators; existing UI had none.',
    solution:
      'React rebuild with semantic HTML, proper ARIA, visible keyboard focus, skip links, contrast checks, and axe-core in automated tests.',
    result:
      'Full WCAG 2.1 AA compliance verified with NVDA. Accessible workplace environment helped win the contract.',
  },
  '17-1': {
    title: 'Invoice Approval Workflow Automation (Slack + Google Apps Script)',
    challenge:
      'Paper expense reports took over a week for manager approval; delays worsened when approvers were away.',
    solution:
      'Google Form submissions log to Sheets; Apps Script posts approval requests to private Slack channels. Emoji reactions approve or reject with auto notification and accounting sync.',
    result:
      'Approval time fell from 5 days to 4 hours average. Paper eliminated, saving ¥500K annually. Zero missed approvals.',
  },
  '17-2': {
    title: 'Lead-to-Contract Automation (HubSpot + DocuSign + Salesforce)',
    challenge:
      'Sales manually created and sent contracts after leads, averaging two weeks to close.',
    solution:
      'When HubSpot lead score exceeds threshold, DocuSign envelope auto-sends. Signed contracts update Salesforce to "Closed Won" and notify implementation via Slack. PDFs auto-archive.',
    result:
      'Contract cycle dropped from 2 weeks to 3 days. Sales admin time cut 10 hours weekly. Close rate improved 15% from faster turnaround.',
  },
  '17-3': {
    title: 'HR Onboarding Automation (New Employee Account Provisioning)',
    challenge:
      'IT manually created Gmail, Slack, GitHub, and SaaS accounts per hire, taking 2 hours each.',
    solution:
      'n8n workflow links Google Workspace Admin SDK, Slack SCIM, and GitHub API. Adding a row to the onboarding sheet creates accounts and channel invites; offboarding auto-disables access.',
    result:
      'Onboarding dropped from 2 hours to 5 minutes per person. Zero permission gaps or lingering accounts after departure. ~400 IT hours saved annually.',
  },
}

function escapeTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function renderGroups(groups, locale) {
  const lines = groups.map((group) => {
    const title =
      locale === 'ja' ? group.serviceTitle : serviceTitlesEn[group.serviceNumber]
    const caseLines = group.cases
      .map((c) => {
        const data = locale === 'ja' ? c : { ...c, ...casesEn[c.id] }
        return `      {
        id: '${data.id}',
        title: '${escapeTs(data.title)}',
        challenge: '${escapeTs(data.challenge)}',
        solution: '${escapeTs(data.solution)}',
        result: '${escapeTs(data.result)}',
      }`
      })
      .join(',\n')
    return `  {
    serviceNumber: '${group.serviceNumber}',
    serviceTitle: '${escapeTs(title)}',
    cases: [
${caseLines},
    ],
  }`
  })
  return lines.join(',\n')
}

const jaOut = `import type { WorkServiceGroup } from './types'

export const workCaseGroupsJa: WorkServiceGroup[] = [
${renderGroups(groupsJa, 'ja')},
]
`

const enOut = `import type { WorkServiceGroup } from './types'

export const workCaseGroupsEn: WorkServiceGroup[] = [
${renderGroups(groupsJa, 'en')},
]
`

fs.writeFileSync('F:/aaa/final/src/data/workCases/ja.ts', jaOut, 'utf8')
fs.writeFileSync('F:/aaa/final/src/data/workCases/en.ts', enOut, 'utf8')

const caseCount = groupsJa.reduce((s, g) => s + g.cases.length, 0)
console.log(`Written ja.ts and en.ts: ${groupsJa.length} groups, ${caseCount} cases`)
