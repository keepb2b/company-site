import type { BlogPostMeta } from './types'

export const blogMetaEn: BlogPostMeta[] = [
  {
    date: '2026.05.20',
    categoryKey: 'ai',
    excerpt: 'Finance-tuned Japanese BERT for sentiment scoring and sub-320ms escalation routing at a major bank.',
    description: {
      title: 'AI Chatbot for Financial Institutions | Sentiment Estimation & Auto-Escalation',
      overview: 'A case study of an AI chatbot that detects customer anger, anxiety, and frustration in real time at a major bank, automatically routing to the optimal operator based on urgency.',
      points: [
        'Limitations of keyword-based emotion detection',
        'Finance-domain Japanese BERT model',
        'Priority scoring by sentiment + conversation complexity',
        'Low-latency inference with FastAPI and ONNX Runtime',
        'Improved support quality and reduced legal risk',
      ],
    },
  },
  {
    date: '2026.05.13',
    categoryKey: 'ai',
    excerpt: '89% field extraction from mixed JP/EN/ZH PDFs using LayoutLMv3 and dynamic OCR switching.',
    description: {
      title: 'AI System for Automatic Contract Data Extraction from Multi-Format PDFs',
      overview: 'An AI automation case study extracting key fields—contract value, term, arbitration location—from a mix of scanned, text, and digital PDFs.',
      points: [
        'Challenges of multilingual and irregular PDFs',
        'Combining OCR with language detection',
        'Layout recognition via LayoutLMv3',
        'JSON Schema-compliant data output',
        'Reduced manual entry and improved accuracy',
      ],
    },
  },
  {
    date: '2026.05.06',
    categoryKey: 'ai',
    excerpt: 'Flight price API with Prophet-driven cache TTL—75% cost cut and 450ms average response.',
    description: {
      title: 'Flight Price Prediction API | Cache Strategy & Rate Limiting',
      overview: 'An API development case study integrating multiple airline APIs, combining price-aware cache control with a prediction model for fast, low-cost flight search.',
      points: [
        'Integration of Amadeus, Sabre, and Travelport APIs',
        'Redis-based cache optimization',
        'Price trend forecasting with Prophet',
        'Token bucket rate limiting',
        'API cost reduction and response speed improvement',
      ],
    },
  },
  {
    date: '2026.04.29',
    categoryKey: 'devops',
    excerpt: 'Three-region active/active ops automated with Terraform and Istio. RTO cut from 4 hours to 2 minutes.',
    description: {
      title: 'Multi-Region Active/Active Database Operations Automation',
      overview: 'A DevOps case study automating database operations for a SaaS running across US, EU, and Asia using Terraform, Terragrunt, Istio, and Prometheus.',
      points: [
        'Availability challenges in global SaaS',
        'Combined Cassandra and Aurora Global Database',
        'Multi-region management with Terraform',
        'Traffic control via Istio',
        'RTO reduction and operational overhead cut',
      ],
    },
  },
  {
    date: '2026.04.22',
    categoryKey: 'cms',
    excerpt: 'Block-level versioning for 10k+ manual pages. Partial translation workflow cut costs by 65%.',
    description: {
      title: 'CMS for 10,000+ Page Product Manuals | Multilingual & Version Control',
      overview: 'A manufacturing CMS case study enabling block-level content management so only changed sections are sent for translation.',
      points: [
        'Limits of full-document management in legacy CMS',
        'Block-level content versioning',
        'Translation workflow with DeepL API',
        'Full-text search powered by Algolia',
        'Translation cost reduction and faster publishing',
      ],
    },
  },
  {
    date: '2026.04.15',
    categoryKey: 'ai',
    excerpt: 'Real-time churn scoring over 500M monthly events via Kafka and Flink. Churn 23%→12%.',
    description: {
      title: 'Integrated CRM for Financial Institutions Using Transaction & Behavioral Data',
      overview: 'A CRM development case study combining transaction history, web behavior, email opens, and call content to score churn risk and sales timing in real time.',
      points: [
        'Processing 500M+ events per month',
        'Real-time pipeline with Kafka, Flink, and Redis',
        'XGBoost with feature store',
        'Explainable AI via SHAP values',
        'Reduced churn and improved sales efficiency',
      ],
    },
  },
  {
    date: '2026.04.08',
    categoryKey: 'ec',
    excerpt: 'Live commerce for 100k concurrent viewers. WebRTC plus Redis atomic stock under 2s latency.',
    description: {
      title: 'Live Commerce Platform for 100K Concurrent Viewers',
      overview: 'A live commerce platform development case combining low-latency streaming, real-time inventory sync, and high-load payment processing.',
      points: [
        'Low-latency streaming via WebRTC',
        'Atomic inventory control with Redis',
        'Real-time UI with Next.js and Server-Sent Events',
        'Dynamic rendering at CDN edge',
        'Optimized purchase experience under high traffic',
      ],
    },
  },
  {
    date: '2026.04.01',
    categoryKey: 'ai',
    excerpt: 'Multi-touch attribution on 5B events/month visualized in under 0.8s with ClickHouse.',
    description: {
      title: 'Real-Time Attribution Dashboard for Global Ad Data',
      overview: 'An analytics infrastructure case study processing 5 billion monthly ad events and visualizing cross-device, cross-channel conversion paths.',
      points: [
        'Cross-device measurement challenges',
        'ID graph and probabilistic matching',
        'Fast aggregation with ClickHouse',
        'Stream processing with Flink',
        'Analytics infrastructure driving ROAS improvement',
      ],
    },
  },
  {
    date: '2026.03.25',
    categoryKey: 'ec',
    excerpt: 'Cross-border duties and VAT in 320ms. Shopify Functions and FX lock halved cart abandonment.',
    description: {
      title: 'Dynamic Duty, Tax & FX Calculation System for Cross-Border EC',
      overview: 'A cross-border EC development case built on Shopify Plus, calculating real-time duties, consumption tax, and exchange rates to improve checkout experience.',
      points: [
        'HS code and tax rate database',
        'Zonos API and FX API integration',
        'Rate locking with Redis',
        'Stripe payment integration',
        'Reduced cart abandonment and FX loss',
      ],
    },
  },
  {
    date: '2026.03.18',
    categoryKey: 'devops',
    excerpt: 'Hourly ML-driven MRP over 10TB+. Inventory turns 3.2→5.8; rush orders down 75%.',
    description: {
      title: 'Real-Time Demand Forecasting MRP System with Machine Learning',
      overview: 'An ERP infrastructure case for a multinational manufacturer, integrating inventory, capacity, lead times, and demand forecasting to run hourly MRP.',
      points: [
        'Multi-plant inventory and production data integration',
        'Demand forecasting with Prophet and DeepAR',
        'MRP optimization via Google OR-Tools',
        'IoT data collection with Kafka',
        'Reduced rush orders and improved inventory turns',
      ],
    },
  },
  {
    date: '2026.03.11',
    categoryKey: 'devops',
    excerpt: '50-year COBOL wrapped as REST without changing a line. Response time 1.2s→80ms.',
    description: {
      title: 'Legacy COBOL Modernization: REST API Wrapping Without Code Changes',
      overview: 'A modernization case study analyzing an undocumented COBOL core system and exposing it as a REST API without modifying a single line of the original program.',
      points: [
        'COBOL copybook analysis',
        'Automatic OpenAPI schema generation',
        'CICS transaction integration',
        'Java gateway development',
        'Incremental migration to Java microservices',
      ],
    },
  },
  {
    date: '2026.03.04',
    categoryKey: 'ec',
    excerpt: 'DQN pricing across 7 marketplaces and 50k SKUs. Full channel refresh in 40 minutes.',
    description: {
      title: 'Multi-Channel Automation System for Amazon, Rakuten, Walmart & Shopify',
      overview: 'An EC automation case study centrally managing inventory, pricing, and listings across multiple marketplaces with AI-driven price optimization.',
      points: [
        '7 marketplace API integrations',
        'Request throttling with RabbitMQ',
        'Reinforcement learning for price optimization',
        'Inventory allocation and safety stock design',
        'Bulk SKU updates within API rate limits',
      ],
    },
  },
  {
    date: '2026.02.25',
    categoryKey: 'mobile',
    excerpt: 'Offline home-care app with Yjs CRDT and E2EE. Zero sync conflicts; passed healthcare audit.',
    description: {
      title: 'Offline-Ready, E2EE Mobile App for Healthcare Workers',
      overview: 'A home-care nursing app development case with offline storage, P2P sync, and end-to-end encryption for use in areas with unstable connectivity.',
      points: [
        'SQLite-based offline storage',
        'Conflict resolution with CRDT',
        'End-to-end encryption via AES-GCM',
        'Background sync',
        'Secure handling of medical information',
      ],
    },
  },
  {
    date: '2026.02.18',
    categoryKey: 'mobile',
    excerpt: 'Auto tenant isolation upgrades via K8s Operator. Noisy-neighbor incidents down 95%.',
    description: {
      title: 'Multi-Tenant SaaS Infrastructure Supporting Large Tenants',
      overview: 'A SaaS infrastructure case study enabling dynamic upgrade of DB and Kubernetes namespace isolation levels per tenant.',
      points: [
        'Addressing the noisy neighbor problem',
        'Automated control via Kubernetes Operator',
        'Low-downtime migration with AWS DMS',
        'Dynamic routing with Envoy',
        'Stripe billing integration',
      ],
    },
  },
  {
    date: '2026.02.11',
    categoryKey: 'ec',
    excerpt: 'Shopify bundle reservations with Redis Lua. Stock-out errors below 0.1% on Black Friday.',
    description: {
      title: 'Dynamic Bundle Products & Real-Time Inventory Reservation on Shopify',
      overview: 'A custom app development case achieving atomic inventory reservations for multiple items using Redis and Webhooks—something Shopify native cannot handle.',
      points: [
        'Limitations of Shopify native inventory',
        'Atomic multi-stock reservation with Redis Lua scripts',
        'TTL-based tentative reservation and checkout confirmation',
        'Inventory restoration logic on returns',
        'Stable operation under Black Friday peak load',
      ],
    },
  },
  {
    date: '2026.02.04',
    categoryKey: 'animation',
    excerpt: 'Three.js + WebXR furniture customizer. 50fps mobile and 2.8× AR conversion lift.',
    description: {
      title: 'WebGL 3D Product Customizer Development',
      overview: 'A UI/UX and frontend case study building a 3D customizer for a furniture brand, allowing real-time material and color changes for sofas.',
      points: [
        '3D rendering with Three.js',
        'Lightweight delivery via GLTF and Draco compression',
        'Dynamic PBR material switching',
        'AR display with WebXR',
        'High frame rate maintained on mobile',
      ],
    },
  },
  {
    date: '2026.01.28',
    categoryKey: 'ai',
    excerpt: 'Hybrid OCR, Temporal, and RPA claims workflow. 72% straight-through; 3-hour average turnaround.',
    description: {
      title: 'Insurance Claims Workflow Automation with OCR, AI & RPA',
      overview: 'An end-to-end automation case combining document classification, information extraction, fraud detection, RPA integration, and human approval for insurance claims.',
      points: [
        'AI classification of complex claim documents',
        'Information extraction with LayoutLMv3',
        'Fraud detection via graph neural network',
        'RPA integration with UiPath',
        'Automatic task assignment to reviewers',
      ],
    },
  },
]
