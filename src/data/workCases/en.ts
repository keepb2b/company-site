import type { WorkServiceGroup } from './types'

export const workCaseGroupsEn: WorkServiceGroup[] = [
  {
    serviceNumber: '01',
    serviceTitle: 'AI Chatbots & Customer Support',
    cases: [
      {
        id: '01-1',
        title: 'Sentiment Estimation + Auto Escalation Priority Chatbot for Financial Institutions',
        challenge: 'A major bank handles 10,000+ daily chat inquiries. When users show anger or urgency, immediate escalation is required, but keyword rules miss strong dissatisfaction without the word "complaint." Operators also need automatic urgency and complexity scoring.',
        technicalDifficulty: 'Real-time sentiment estimation (Japanese tone, emphasis, emoji, repeated punctuation)\nFine-tuned BERT from limited labeled data (financial domain adaptation)\nContext-aware sentiment trend from the last three turns\nOperator skill matching (complaint handling experience and product knowledge) on escalation\nCloud inference with sub-500ms latency requirement',
        solution: 'Japanese financial BERT (Tohoku BERT + 100K in-house inquiry history) predicts five sentiment classes (anger, urgency, sadness, neutral, joy).\nDynamic urgency score combines sentiment with complexity (turn count, jargon frequency, unresolved flags).\nAbove threshold, the operator queue receives priority plus best-match routing.\nFastAPI + ONNX Runtime optimization achieves 320ms average response time.',
        result: 'Sentiment detection F1: 84%\nEscalation appropriateness (operator rating): 41% better than keyword rules\nLegal risk reduced by catching complaints before litigation',
      },
    ],
  },
  {
    serviceNumber: '02',
    serviceTitle: 'AI-Powered Business Automation',
    cases: [
      {
        id: '02-1',
        title: 'Contract Field Extraction from Mixed-Format PDFs (Unstructured, Multilingual)',
        challenge: 'A trading company has 30,000 contract PDFs mixing scans, text PDFs, and digital PDFs with English, Chinese, and Japanese in one document. Clause structures vary; fields like contract amount, term, and arbitration venue must be extracted automatically.',
        technicalDifficulty: 'Maintaining OCR accuracy (Tesseract / Azure Form Recognizer) across mixed languages\nAuto-detecting section headers ("Article 3", "第三条", "第3条", etc.)\nTable detection plus row/column mapping for monetary tables\nRule engine for schema mapping supplemented by machine learning',
        solution: 'Language detection (fastText) in preprocessing switches OCR engines dynamically.\nLayoutLMv3 recognizes fields at bounding-box level (image + text + layout).\nResults convert to a document object graph; rules plus a small GNN fix logical inconsistencies.\nFinal output conforms to JSON Schema.',
        result: 'Field extraction exact-match accuracy: 89% (vs. 52% with regex keywords)\nAverage processing time: 2.8 seconds per document\nAnnual manual entry reduced by 1,200 hours',
      },
    ],
  },
  {
    serviceNumber: '03',
    serviceTitle: 'API Development & Integrations',
    cases: [
      {
        id: '03-1',
        title: 'Flight Price Prediction API (Dynamic Pricing, Caching, Rate-Limit Avoidance)',
        challenge: 'A travel metasearch engine wraps Amadeus, Sabre, and Travelport APIs to show lowest fares. Strict per-second rate limits make cache hit rate critical; dynamic fares require statistically tuned TTL.',
        technicalDifficulty: 'Abstracting multi-provider APIs (auth, params, response formats differ)\nRequest deduplication for identical route/date queries\nDynamic TTL based on price volatility (shorter during volatile periods)\nPer-provider retries and circuit breakers for rate limits\nFallback predictions from historical statistics on failure',
        solution: 'Kong API gateway unifies auth and routing.\nRedis cache keyed by request signature (origin, destination, date).\nProphet time-series model computes max stable duration at 95% confidence from one month of price histograms.\nToken-bucket queuing when approaching rate limits.\nLightGBM precomputes same-day predicted prices for fallback.',
        result: 'Cache hit rate: 78%\nAPI cost reduced from ¥1.2M to ¥350K annually\nAverage response: 450ms (12ms on cache hit)',
      },
    ],
  },
  {
    serviceNumber: '04',
    serviceTitle: 'Cloud Infrastructure & DevOps',
    cases: [
      {
        id: '04-1',
        title: 'Multi-Region Active/Active Database Operations Automation',
        challenge: 'A global SaaS needs active/active across US, EU, and Asia. Stateless apps are done, but strong-consistency tables (balances) vs. eventual-consistency tables (logs) require a hybrid of Cassandra and Aurora Global Database, fully automated with Terraform and CI/CD.',
        technicalDifficulty: 'Data modeling for 150–300ms cross-region latency\nIdempotent migrations without inconsistency on auto failover\nTerraform multi-region management (dependencies and provider aliases)\nBlue/green deploys including schema changes (dual-write design)\nIstio service mesh shifts traffic when replication lag exceeds thresholds',
        solution: 'Static partitioning by user ID hash: strong-consistency writes go to home region; reads are local.\nSchema policy: backward-compatible changes only; breaking changes use new tables with dual app versions.\nTerraform modules per region parameterized with Terragrunt.\nIstio VirtualService weighted routing from Prometheus replication lag metrics.',
        result: '99.99% annual availability (up from 99.9%)\nRTO reduced from 4 hours to 2 minutes (auto failover)\nManual ops reduced from 20 hours/week to near zero',
      },
    ],
  },
  {
    serviceNumber: '05',
    serviceTitle: 'CMS Development & Integration',
    cases: [
      {
        id: '05-1',
        title: '10,000+ Page Manufacturing Manual CMS (Multilingual, Versioning, Partial Translation)',
        challenge: 'An industrial equipment maker publishes ~150-page manuals per product, updated twice yearly with branches and 10 languages. Translation vendors should receive changed sections only, but legacy CMS required full-document management.',
        technicalDifficulty: 'Versioning at content-block level (headings, paragraphs, figures), not whole pages\nCross-block references ("Section 3.2.1" auto-updates)\nTranslation memory integration: diff changed blocks, XLIFF export, auto-merge on return\nFast full-text search across 100K blocks\nFine-grained roles: editor, translation manager, publish approver',
        solution: 'Headless CMS (Sanity.io) models blocks and versions with custom schema.\nGit-like branches per product version; change sets visualized as PRs.\nWorkflow: auto diff → machine pre-translate (DeepL) → human edit → approve.\nBacklink plugin updates in-text section numbers.\nAlgolia search under 100ms.',
        result: 'Translation cost down 65% via partial translation\nPublish lead time: 3 weeks → 2 days\nSupport inquiries via search down 40%',
      },
    ],
  },
  {
    serviceNumber: '06',
    serviceTitle: 'CRM & Customer Management',
    cases: [
      {
        id: '06-1',
        title: 'Financial CRM: Transaction History + Behavioral Prediction (Real-Time Scoring)',
        challenge: 'An asset manager wants unified trading, web behavior, email opens, and call transcripts scored in real time for next-best actions and churn risk. Volume exceeds 500M events per month.',
        technicalDifficulty: 'Low-latency join of Kafka streams and batch warehouse data\nFeature hashing without exposing customer IDs for privacy\nReal-time XGBoost inference (~500MB model) under 100ms\nExplainable AI (SHAP) for sales-facing reasons\nWorkflow triggers (email, tasks) from score changes',
        solution: 'Kafka → Flink → Redis feature cache → TensorFlow Serving.\nFeast feature store unifies online/offline features.\nk-anonymization for training; inference uses session keys instead of raw IDs.\nPrecomputed SHAP approximations for fast display.\nScores published to Pulsar; SendGrid and Salesforce handlers subscribe.',
        result: 'Churn prediction AUC: 0.92\nChurn rate reduced from 23% to 12% via targeted intervention\nCross-sell close rate 2.1× prior',
      },
    ],
  },
  {
    serviceNumber: '07',
    serviceTitle: 'Custom Web Application Development',
    cases: [
      {
        id: '07-1',
        title: 'Live Commerce Platform (100K Concurrent Viewers + Real-Time Inventory)',
        challenge: 'An EC company wants live commerce with instant purchase during streams: 100K concurrent viewers, 5,000 inventory/payment requests per second, streaming latency under 2 seconds.',
        technicalDifficulty: 'Low-latency WebRTC delivery (HLS exceeds 6 seconds)\nHigh-throughput atomic inventory decrement (optimistic lock + retry)\nFrontend state: flash-sale timers per viewer cart with auto reset\nCDN edge partial cache invalidation for sold-out badges\nDDoS and bot protection',
        solution: 'SRS on Kubernetes with WebRTC SFU and autoscaling.\nRedis DECR with async Aurora persistence for inventory.\nNext.js + SSE for countdown; cart in IndexedDB.\nFastly VCL dynamically overrides sold-out blocks at edge.\nCloudflare Turnstile plus IP and session rate limits.',
        result: 'Peak concurrent viewers: 127,000\nPayment error rate: 0.3%\nLive conversion rate 4× standard EC',
      },
    ],
  },
  {
    serviceNumber: '08',
    serviceTitle: 'Dashboard & Analytics Platforms',
    cases: [
      {
        id: '08-1',
        title: 'Global Real-Time Attribution Dashboard (Multi-Touch, Cross-Device)',
        challenge: 'A major EC retailer needs real-time cross-device, cross-channel conversion paths across 5B monthly events under iOS ATT and GDPR constraints.',
        technicalDifficulty: 'Probabilistic ID graph unifying cookies, IDFA, email hashes, login IDs\nReal-time multi-touch attribution (linear, time decay, data-driven)\n30-day lookback window design for cross-device journeys\nDifferential privacy in aggregates\nSub-second dashboard queries via pre-aggregation',
        solution: 'Privacy-safe ID graph with Bloom filters and LSH.\nClickHouse window functions and custom aggregates for attribution.\nFlink enriches events via ID graph into ClickHouse.\nNoisy views in ClickHouse for differential privacy.\nApache Superset on materialized views.',
        result: 'Average query time: 0.8s during 5K writes/sec\nROAS improved from 2.9 to 4.2 with attribution models\nGDPR audit passed',
      },
    ],
  },
  {
    serviceNumber: '09',
    serviceTitle: 'E-Commerce Site Development',
    cases: [
      {
        id: '09-1',
        title: 'Cross-Border EC: Dynamic Duties, Tax, and FX Hedge Integration',
        challenge: 'Japan-to-US/EU/SEA cross-border EC with local currency display, complex duties and VAT by HS code, and locked FX rates at order confirmation.',
        technicalDifficulty: 'Real-time HS code and duty database (~200 countries)\nCached external APIs (Avalara, Zonos) with low latency\nSlippage between display and checkout FX rates\nFixed session rates to avoid cart confusion\nAccurate split amounts to Stripe (goods + duty + shipping)',
        solution: 'Shopify Plus Functions call Zonos on cart add for duty-inclusive totals.\nFixer.io rate locked at order time, cached 15 minutes in Redis per session.\nCommon HS codes cached locally (24h TTL).\nStripe receives precomputed totals, not split payments.\nEU OSS VAT report batch automation.',
        result: 'Duty calculation at checkout: 320ms average\nInternational cart abandonment: 22% → 11%\nFX loss reduced 90% YoY',
      },
    ],
  },
  {
    serviceNumber: '10',
    serviceTitle: 'ERP & Inventory Management',
    cases: [
      {
        id: '10-1',
        title: 'Multinational Real-Time ML-Driven Demand Forecast MRP',
        challenge: 'An auto parts maker refreshes ERP across Japan, Thailand, and Mexico plants with ML demand forecasts and hourly MRP on 10TB+ history.',
        technicalDifficulty: 'Meta-model auto-selects time-series methods (Prophet, DeepAR) per part\nNP-hard MRP approximated with constraint satisfaction and evolutionary algorithms\nDynamic modeling of plant capacity (shifts, utilization)\nExternal lead-time variance (port delays) via APIs\nAnomaly detection excludes sensor spikes from MRP',
        solution: 'S3 data lake → Spark features → SageMaker training and API deployment.\nPython + Google OR-Tools MRP with min order, safety stock, batch constraints.\nKafka IoT feed filtered by Isolation Forest in real time.\nReact + WebGL editable Gantt for production plans.',
        result: 'Inventory turnover: 3.2 → 5.8 annually\nEmergency orders down 75%\nMRP runtime: 6 hours on-prem → 8 minutes hourly',
      },
    ],
  },
  {
    serviceNumber: '11',
    serviceTitle: 'Maintenance, Optimization & Technical Support',
    cases: [
      {
        id: '11-1',
        title: 'Legacy COBOL Modernization Companion (Black-Box API Reverse Engineering)',
        challenge: 'A major insurer runs 50-year COBOL on IBM z/OS with no docs and retiring developers. Web systems call CICS transactions; wrap as REST without rewriting COBOL for gradual replacement.',
        technicalDifficulty: 'Parse COBOL copybooks to auto-generate OpenAPI schemas\nTrace CICS I/O buffers from binary dumps\nRACF-integrated mainframe authentication\nCustom session management for idempotency\nMap COBOL ABEND to HTTP errors',
        solution: 'Custom ANTLR COBOL parser generates JSON Schema from copybooks.\nJava gateway (z/OS Connect alternative) invokes CICS transactions.\nFuzzing on tens of thousands of test pairs discovers undefined fields.\nFallback defaults for garbled output buffers.\nParallel Java microservices behind Envoy for gradual cutover.',
        result: 'REST API without changing a line of COBOL\nResponse time: 1.2s → 80ms (excluding network)\nNew features in Java while maintaining COBOL support contract',
      },
    ],
  },
  {
    serviceNumber: '12',
    serviceTitle: 'Marketplace Integrations',
    cases: [
      {
        id: '12-1',
        title: 'AI-Optimized Multi-Channel Amazon, Rakuten, Walmart, and Shopify Integration',
        challenge: 'A major equipment maker lists on seven marketplaces (Amazon JP/US/DE, Rakuten, Walmart, Shopify) with 50K SKUs. Maintain competitiveness and margin with unified inventory and hourly price updates.',
        technicalDifficulty: 'Respect per-mall API limits while updating 50K SKUs within one hour\nDynamic pricing from competitor data (scraping or mall APIs)\nProbabilistic safety stock allocation across channels (newsvendor model)\nFX, VAT, and duty-aware pricing\nAuto-convert listings to each mall format (HTML, size limits)',
        solution: 'RabbitMQ throttles requests per provider; Node.js async workers.\nDQN reinforcement learning optimizes price from competitor price, cost, and elasticity.\nGamma distribution from historical sales sets safety stock per channel.\nHandlebars templates with custom filters for listing conversion.\nAWS Step Functions with retry and manual intervention queues.',
        result: 'Full-channel price updates in 40 minutes\nMargin up 8% vs. flat pricing\nStockout opportunity loss: ¥200M → ¥30M annually',
      },
    ],
  },
  {
    serviceNumber: '13',
    serviceTitle: 'Mobile App Development',
    cases: [
      {
        id: '13-1',
        title: 'Offline Medical Field App (P2P Sync + End-to-End Encryption)',
        challenge: 'Home-visit nurses enter vitals and photos in low-connectivity areas with later sync. Medical data requires E2EE and CRDT conflict resolution when multiple nurses edit the same patient.',
        technicalDifficulty: 'Offline SQLite storage and background online sync\nCRDT merge for offline edits (last-write-wins is unsafe)\nE2EE: server stores ciphertext only; QR pairing for key exchange\nChunked encrypted binary sync with delta transfer\nBattery-efficient background sync on iOS/Android constraints',
        solution: 'WatermelonDB for fast React Native SQLite.\nYjs CRDT merges text, numbers, and lists.\nWebCrypto AES-GCM; keys in Secure Enclave/Keystore.\nCustom library wrapping iOS background fetch and Android WorkManager.\nPhotos split into 1MB encrypted chunks with exponential backoff retry.',
        result: 'Near-native UX offline\nZero data loss from sync conflicts (vs. several manual merges monthly)\nPassed medical data security audit',
      },
    ],
  },
  {
    serviceNumber: '14',
    serviceTitle: 'SaaS Platform Development',
    cases: [
      {
        id: '14-1',
        title: 'Multi-Tenant Dynamic Microservice Granularity Control',
        challenge: 'SaaS serves tenants from 10 users to 100K+. Shared microservices suffer noisy neighbors; isolation levels (dedicated DB, K8s namespace, shared) must change dynamically per tenant.',
        technicalDifficulty: 'Auto-upgrade isolation when tenants grow (e.g., 10K WAU → dedicated DB)\nNear-zero-downtime migration (copy + CDC)\nEnforce per-tenant quotas beyond simple rate limits (CPU/memory)\nTransparent backend switches without endpoint changes\nBilling tied to isolation tier',
        solution: 'Kubernetes Operator (Go) watches Prometheus metrics; Terraform provisions dedicated DB on threshold.\nAWS DMS CDC with <5s cutover downtime.\nEnvoy rate limits plus custom filters on processing time (429 on exceed).\nDynamic Envoy xDS routing from control plane.\nStripe metered billing per isolation level.',
        result: '150K-user tenant with no neighbor impact\nFully automated tier changes without ops\nNoisy-neighbor incidents down 95%',
      },
    ],
  },
  {
    serviceNumber: '15',
    serviceTitle: 'Shopify / eBay / Amazon Automation',
    cases: [
      {
        id: '15-1',
        title: 'Shopify Dynamic Bundles + Real-Time Atomic Inventory Reservation',
        challenge: 'An apparel EC wants custom bundles (top + bottom + accessory) with bundle discounts. Independent SKUs must decrement atomically; partial stockouts during checkout must be avoided.',
        technicalDifficulty: 'Shopify cannot atomically reserve bundle inventory at cart add\nThousands of bundle combinations make precomputed stock sets impractical\nDistributed transaction consistency on Black Friday traffic\nPartial return restock logic per item',
        solution: 'Redis Lua script decrements multiple keys for atomic bundle reservation.\n10-minute TTL reservation on cart add; release on timeout.\nCheckout confirms reservation; Shopify inventory updated via webhook.\nReturns restore Redis and Shopify per item, not per bundle.\nShopify Scripts (Ruby) compute dynamic bundle pricing in cart.',
        result: 'Bundle stockout errors: 5% → under 0.1%\n200 bundle reservations/sec peak on Black Friday\nBundles became 35% of revenue',
      },
    ],
  },
  {
    serviceNumber: '16',
    serviceTitle: 'UI/UX Design & Frontend',
    cases: [
      {
        id: '16-1',
        title: 'WebGL 3D Product Customizer (Photorealistic + Performance)',
        challenge: 'A furniture maker wants real-time 3D customization of fabric, legs, and cushion firmness at 60fps on mobile, seamless texture swaps, and AR room placement.',
        technicalDifficulty: 'Display 100K+ polygon models in browser (decimation + LOD)\nShader-based PBR material switching\nTexture preload and GC tuning to prevent memory leaks\nJS bridge to ARKit/ARCore for camera compositing\nSave/share customization as quote URLs',
        solution: 'Three.js with Draco-compressed GLTF; three LOD levels via Simplify.js.\nMaterial array switching (draw calls up, fps prioritized).\nBasisU compressed textures cut VRAM 70%.\nWebXR AR with camera feed as Three.js background.\nRedux Toolkit state encoded in URL query for sharing.',
        result: 'Desktop stable 60fps; iPhone 12+ 50–60fps\nAR conversion 2.8× non-AR\nCustom sofa AOV 1.6× standard',
      },
    ],
  },
  {
    serviceNumber: '17',
    serviceTitle: 'Workflow Automation',
    cases: [
      {
        id: '17-1',
        title: 'End-to-End Insurance Claim Processing (OCR + Rules + RPA + Human Approval)',
        challenge: 'A P&C insurer auto-adjudicates claims from accident reports, repair estimates, and medical receipts. Complex cases need hybrid AI preprocessing with auto-approval, examiner routing, and RPA for legacy systems.',
        technicalDifficulty: 'Document classification (damage vs. medical vs. theft) at 99%+ accuracy\nMulti-page aggregation with spreadsheet and date consistency checks\nCombined Drools rules and ML with interpretability\nFraud anomaly detection\nRPA (UiPath) for systems without APIs\nOptimal examiner routing by specialty and load',
        solution: 'Fine-tuned Swin ViT document classifier at 99.2%.\nLayoutLMv3 extraction plus rule post-processing.\nGNN on claimant/repairer/clinic network plus Isolation Forest for fraud.\nTemporal workflows call UiPath Orchestrator asynchronously.\nMulti-armed bandit routing by examiner history and tags.',
        result: 'Fully automated claims: 72% (vs. under 10%)\nProcessing: 5 business days → 3 hours average (5 minutes automated)\nFraud detection 2.3× prior audits\nExaminers focus on complex cases',
      },
    ],
  },
]
