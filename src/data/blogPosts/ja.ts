import type { BlogPostMeta } from './types'

export const blogMetaJa: BlogPostMeta[] = [
  {
    date: '2026.05.20',
    categoryKey: 'ai',
    excerpt: '日本語金融特化BERTで感情推定し、320ms以内にエスカレーション優先度を自動判定する事例。',
    description: {
      title: '金融機関向けAIチャットボット開発｜感情推定とエスカレーション自動判定の仕組み',
      overview: '大手銀行のカスタマーサポートにおいて、ユーザーの怒り・焦り・不満をリアルタイムで検知し、緊急度に応じて最適なオペレーターへ自動ルーティングするAIチャットボット開発事例。',
      points: [
        '従来のキーワード判定では検知できない感情の課題',
        '日本語金融ドメインに特化したBERTモデルの活用',
        '感情スコアと会話複雑度による優先度判定',
        'FastAPIとONNX Runtimeによる低レイテンシ推論',
        'カスタマーサポート品質向上と法的リスク低減',
      ],
    },
  },
  {
    date: '2026.05.13',
    categoryKey: 'ai',
    excerpt: '日英中混在PDFから契約フィールドを89%精度で抽出。LayoutLMv3とOCR切替の実装ポイント。',
    description: {
      title: '複数形式PDFから契約書情報を自動抽出するAIシステム開発',
      overview: 'スキャンPDF、テキストPDF、デジタルPDFが混在する契約書から、契約金額・契約期間・仲裁地などの重要項目を自動抽出するAI業務自動化事例。',
      points: [
        '多言語・不定型PDF処理の課題',
        'OCRと言語判定の組み合わせ',
        'LayoutLMv3によるレイアウト認識',
        'JSON Schemaに準拠したデータ出力',
        '手動入力工数削減と精度向上',
      ],
    },
  },
  {
    date: '2026.05.06',
    categoryKey: 'ai',
    excerpt: '航空券APIのキャッシュTTLをProphetで動的調整し、コスト75%削減・450ms応答を実現。',
    description: {
      title: '航空券価格予測API開発｜キャッシュ戦略とレート制限対策',
      overview: '複数の航空会社APIを統合し、価格変動を考慮したキャッシュ制御と予測モデルを組み合わせて、高速かつ低コストな価格検索を実現したAPI開発事例。',
      points: [
        'Amadeus、Sabre、Travelportなど複数APIの統合',
        'Redisによるキャッシュ最適化',
        'Prophetによる価格変動予測',
        'トークンバケット方式によるレート制限対策',
        'APIコスト削減と応答速度改善',
      ],
    },
  },
  {
    date: '2026.04.29',
    categoryKey: 'devops',
    excerpt: '3リージョンA/A構成をTerraform＋Istioで自動運用。RTOを4時間から2分へ短縮。',
    description: {
      title: 'マルチリージョン・アクティブ/アクティブDB運用自動化',
      overview: '米国・欧州・アジアの3リージョンで稼働するSaaS向けに、Terraform、Terragrunt、Istio、Prometheusを活用してデータベース運用を自動化したDevOps事例。',
      points: [
        'グローバルSaaSにおける可用性の課題',
        'CassandraとAurora Global Databaseの併用',
        'Terraformによるマルチリージョン管理',
        'Istioによるトラフィック制御',
        'RTO短縮と運用工数削減',
      ],
    },
  },
  {
    date: '2026.04.22',
    categoryKey: 'cms',
    excerpt: '1万ページ超の製造業マニュアルをブロック単位でバージョン管理し、部分翻訳コスト65%削減。',
    description: {
      title: '1万ページ超の製品マニュアルCMS開発｜多言語・バージョン管理対応',
      overview: '製造業向けに、製品マニュアルをブロック単位で管理し、変更箇所のみを翻訳対象にできる多言語CMSを構築した事例。',
      points: [
        '従来CMSにおける全文管理の限界',
        'コンテンツブロック単位のバージョン管理',
        '翻訳ワークフローとDeepL API連携',
        'Algoliaによる高速全文検索',
        '翻訳コスト削減と公開リードタイム短縮',
      ],
    },
  },
  {
    date: '2026.04.15',
    categoryKey: 'ai',
    excerpt: 'Kafka×Flinkで月5億件の行動データをリアルタイムスコアリング。解約率を23%→12%に改善。',
    description: {
      title: '取引履歴と行動データを統合した金融機関向けCRM開発',
      overview: '取引履歴、Web行動、メール開封、通話内容を統合し、解約リスクや営業タイミングをリアルタイムにスコアリングするCRM開発事例。',
      points: [
        '月間5億件超のデータ処理',
        'Kafka、Flink、Redisによるリアルタイム基盤',
        'XGBoostと特徴量ストアの活用',
        'SHAP値による説明可能AI',
        '解約率低減と営業効率向上',
      ],
    },
  },
  {
    date: '2026.04.08',
    categoryKey: 'ec',
    excerpt: '10万人同時視聴のライブコマース。WebRTC＋Redis原子操作で在庫連動と低遅延決済を両立。',
    description: {
      title: '10万人同時視聴に対応したライブコマースプラットフォーム開発',
      overview: '低遅延配信、リアルタイム在庫連動、高負荷決済処理を組み合わせたライブコマースプラットフォームの開発事例。',
      points: [
        'WebRTCによる低遅延配信',
        'Redis原子操作による在庫制御',
        'Next.jsとServer-Sent EventsによるリアルタイムUI',
        'CDNエッジでの動的表示制御',
        '高トラフィック時の購入体験最適化',
      ],
    },
  },
  {
    date: '2026.04.01',
    categoryKey: 'ai',
    excerpt: '50億イベント/月のマルチタッチアトリビューションをClickHouseで0.8秒以内に可視化。',
    description: {
      title: 'グローバル広告データを可視化するリアルタイムAttributionダッシュボード',
      overview: '月間50億件規模の広告イベントを処理し、複数デバイス・複数チャネルをまたいだコンバージョン経路を可視化する分析基盤開発事例。',
      points: [
        'クロスデバイス計測の課題',
        'IDグラフと確率的マッチング',
        'ClickHouseによる高速集計',
        'Flinkによるストリーミング処理',
        'ROAS改善につながる分析基盤',
      ],
    },
  },
  {
    date: '2026.03.25',
    categoryKey: 'ec',
    excerpt: '越境ECの関税・VATを320msで算出。Shopify Functionsと為替ロックでカゴ落ち率を半減。',
    description: {
      title: '越境EC向け動的関税・消費税・為替計算システム開発',
      overview: 'Shopify Plusをベースに、各国の関税・消費税・為替レートをリアルタイムに計算し、チェックアウト体験を改善した越境EC開発事例。',
      points: [
        'HSコードと税率データベースの活用',
        'Zonos APIと為替APIの連携',
        'Redisによるレート固定',
        'Stripe決済との連携',
        'カゴ落ち率低下と為替損失削減',
      ],
    },
  },
  {
    date: '2026.03.18',
    categoryKey: 'devops',
    excerpt: '10TB超の需要予測MRPを毎時8分で実行。在庫回転率3.2→5.8回、緊急発注75%削減。',
    description: {
      title: '機械学習を統合したリアルタイム需要予測MRPシステム開発',
      overview: '多国籍製造業向けに、在庫、生産能力、納期、需要予測を統合し、毎時間MRPを実行できるERP基盤を構築した事例。',
      points: [
        '複数工場の在庫・生産データ統合',
        'Prophet、DeepARによる需要予測',
        'Google OR-ToolsによるMRP最適化',
        'KafkaによるIoTデータ収集',
        '緊急発注削減と在庫回転率改善',
      ],
    },
  },
  {
    date: '2026.03.11',
    categoryKey: 'devops',
    excerpt: '50年稼働のCOBOLをREST API化。ドキュメントなしでも1行不改変で80ms応答を達成。',
    description: {
      title: 'レガシーCOBOLシステムをREST API化するモダナイゼーション支援',
      overview: 'ドキュメントが存在しないCOBOL基幹システムを解析し、既存プログラムを改修せずにREST APIとして利用可能にしたモダナイゼーション事例。',
      points: [
        'COBOLコピーブックの解析',
        'OpenAPIスキーマ自動生成',
        'CICSトランザクション連携',
        'Javaゲートウェイ開発',
        '段階的なJavaマイクロサービス移行',
      ],
    },
  },
  {
    date: '2026.03.04',
    categoryKey: 'ec',
    excerpt: 'Amazon・楽天・Walmart等7モールの5万SKUをDQNで価格最適化。40分で全チャネル更新。',
    description: {
      title: 'Amazon・楽天・Walmart・Shopifyを連携するマルチチャネル自動化システム',
      overview: '複数マーケットプレイスにおける在庫、価格、出品情報を一元管理し、AIで価格最適化を行うEC自動化システム開発事例。',
      points: [
        '7マーケットプレイスのAPI統合',
        'RabbitMQによるリクエスト制御',
        '強化学習による価格最適化',
        '在庫配分とセーフティストック設計',
        'API制限下での大量SKU更新',
      ],
    },
  },
  {
    date: '2026.02.25',
    categoryKey: 'mobile',
    excerpt: '訪問看護向けオフラインアプリ。Yjs CRDT＋E2EEで同期競合ゼロ・医療監査合格。',
    description: {
      title: 'オフライン対応・E2EE対応の医療現場向けモバイルアプリ開発',
      overview: '通信が不安定な地域でも利用できる訪問看護向けアプリとして、オフライン保存、P2P同期、エンドツーエンド暗号化に対応した開発事例。',
      points: [
        'SQLiteベースのオフライン保存',
        'CRDTによるコンフリクト解決',
        'AES-GCMによるエンドツーエンド暗号化',
        'バックグラウンド同期',
        '医療情報の安全な取り扱い',
      ],
    },
  },
  {
    date: '2026.02.18',
    categoryKey: 'mobile',
    excerpt: 'マルチテナントSaaSの隔離レベルをK8s Operatorで自動昇格。noisy neighborを95%低減。',
    description: {
      title: '巨大テナントにも対応するマルチテナントSaaS基盤開発',
      overview: 'テナントごとにDBやKubernetes namespaceの隔離レベルを動的に変更できるSaaS基盤を構築した事例。',
      points: [
        'noisy neighbor問題への対応',
        'Kubernetes Operatorによる自動制御',
        'AWS DMSによる低停止マイグレーション',
        'Envoyによる動的ルーティング',
        'Stripe課金との連携',
      ],
    },
  },
  {
    date: '2026.02.11',
    categoryKey: 'ec',
    excerpt: 'ShopifyカスタムバンドルのRedis Lua予約で在庫切れエラーを0.1%以下に。BFピーク200件/秒。',
    description: {
      title: 'Shopifyで動的バンドル商品とリアルタイム在庫予約を実現する開発事例',
      overview: 'Shopify標準機能では難しい、複数商品のアトミックな在庫予約をRedisとWebhookで実現したカスタムアプリ開発事例。',
      points: [
        'Shopify標準在庫管理の限界',
        'Redis Luaスクリプトによる複数在庫の同時予約',
        'TTL付き仮予約とチェックアウト確定処理',
        '返品時の在庫戻しロジック',
        'ブラックフライデーなど高負荷時の安定運用',
      ],
    },
  },
  {
    date: '2026.02.04',
    categoryKey: 'animation',
    excerpt: 'Three.js＋WebXRで家具3Dカスタマイザー。モバイル50fps・ARコンバージョン2.8倍。',
    description: {
      title: 'WebGLを活用した3Dプロダクトカスタマイザー開発',
      overview: '家具メーカー向けに、ソファの素材や色をリアルタイムに変更できる3Dカスタマイザーを開発したUI/UX・フロントエンド事例。',
      points: [
        'Three.jsによる3D表示',
        'GLTFとDraco圧縮による軽量化',
        'PBRマテリアルの動的切り替え',
        'WebXRによるAR表示',
        'モバイルでも高いフレームレートを維持',
      ],
    },
  },
  {
    date: '2026.01.28',
    categoryKey: 'ai',
    excerpt: '保険金請求のOCR＋Temporal＋RPAハイブリッド。72%を自動処理、平均3時間で査定完了。',
    description: {
      title: 'OCR・AI・RPAを組み合わせた保険金請求ワークフロー自動化',
      overview: '保険金請求に必要な書類分類、情報抽出、詐欺検知、RPA連携、人的承認を組み合わせたエンドツーエンド自動化事例。',
      points: [
        '複雑な請求書類のAI分類',
        'LayoutLMv3による情報抽出',
        'グラフニューラルネットワークによる不正検知',
        'UiPathとのRPA連携',
        '審査員への自動タスク割り振り',
      ],
    },
  },
]
