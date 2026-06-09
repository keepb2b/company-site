import type { FeeTableSection } from './feeTables.types'

export const feeTableSectionsJa: FeeTableSection[] = [
  {
    id: 'ecommerce',
    title: '1. ECサイト開発（バジェット向け）',
    columns: ['タイプ', '初期開発費用（円）', '月額費用（円）', '主な活用例'],
    rows: [
      {
        type: 'Basic（Shopify、BASE）',
        badge: 'basic',
        prices: ['¥0 ~ ¥30,000', '¥0 ~ ¥15,000'],
        useCases:
          'ハンドメイドアクセサリーショップ；地元パン屋；古本屋；ペット用品店；チャリティグッズ販売；同窓会Tシャツ；自治会グッズ；学園祭事前注文',
      },
      {
        type: 'Mid（WooCommerce）',
        badge: 'mid',
        prices: ['¥80,000 ~ ¥400,000', '¥2,000 ~ ¥10,000'],
        useCases:
          '小規模農家の野菜直売；釣り具ショップ；ヨガ用品；コーヒー豆販売；着物小物100SKU；クラフトビール；子ども服リサイクル；旧車パーツ',
      },
      {
        type: 'High（Makeshop、EC-CUBE）',
        badge: 'high',
        prices: ['¥300,000 ~ ¥1,200,000', '¥10,000 ~ ¥35,000'],
        useCases:
          '地域土産1000点以上；スーパー配達；ワインクラブ；在宅医療機器；ウェディングドレスレンタル；フリマ集約サイト',
      },
    ],
  },
  {
    id: 'cms',
    title: '2. CMS・コーポレートサイト',
    columns: ['タイプ', 'プロジェクト費用（円）', '月額保守（円）', '主な活用例'],
    rows: [
      {
        type: 'Basic（5〜10ページ）',
        badge: 'basic',
        prices: ['¥30,000 ~ ¥80,000', '¥2,000 ~ ¥5,000'],
        useCases:
          '理容店；カメラマンポートフォリオ；居酒屋メニュー；ピアノ教室；コミュニティカレンダー；教会週報；犬の散歩サービス；家庭教師；野菜直売所',
      },
      {
        type: 'Mid（10〜30ページ）',
        badge: 'mid',
        prices: ['¥100,000 ~ ¥280,000', '¥5,000 ~ ¥15,000'],
        useCases:
          '不動産物件一覧；自動車教習所；小型ホテル；空手道場；NPO活動報告；歯科クリニック；自転車レンタル；ラーメン店3店舗展開',
      },
      {
        type: 'Enterprise',
        badge: 'high',
        prices: ['¥500,000 ~ ¥1,200,000', '¥15,000 ~ ¥50,000'],
        useCases:
          '区観光ポータル；新聞アーカイブ；フランチャイズLP；複数店舗ジム；結婚式場パンフレット',
      },
    ],
  },
  {
    id: 'bpa',
    title: '3. 業務プロセス自動化（BPA）',
    columns: ['規模', 'プロジェクト費用（円）', '主な活用例'],
    rows: [
      {
        type: 'Simple',
        badge: 'basic',
        prices: ['¥20,000 ~ ¥200,000'],
        useCases:
          '日次売上レポート；シフト申請（10名規模）；発注承認；休暇管理；問い合わせ振り分け；在庫少アラート；議事録作成；入社チェックリスト；経費精算',
      },
      {
        type: 'Mid RPA',
        badge: 'mid',
        prices: ['¥800,000 ~ ¥2,000,000'],
        useCases:
          '請求書PDFリネーム；納品書OCR；CRM→メーリングリスト；Google Driveバックアップ；帳票自動入力；SNS投稿スケジュール',
      },
      {
        type: 'Enterprise BPM',
        badge: 'high',
        prices: ['¥6,000,000 ~ ¥15,000,000'],
        useCases: '出張費5段承認；人事契約更新；品質検査承認',
      },
    ],
  },
  {
    id: 'ai',
    title: '4. AI・機械学習導入',
    columns: ['タイプ', 'プロジェクト費用（円）', '年間費用（SaaSの場合）', '主な活用例'],
    rows: [
      {
        type: 'SaaS',
        badge: 'basic',
        prices: ['¥10,000 ~ ¥150,000', '¥1,000,000 ~ ¥1,500,000'],
        useCases:
          '電車遅延FAQボット；クレーム要約；文法チェック；メール自動返信；レビュー感情分析；残り物レシピ提案；イベント推薦ボット',
      },
      {
        type: 'Custom',
        badge: 'mid',
        prices: ['¥1,500,000 ~ ¥6,000,000', 'N/A'],
        useCases:
          'リピーター予測；魚の写真仕分け；果物熟度判定；落書き検知；家族写真自動タグ付け',
      },
    ],
  },
  {
    id: 'fullstack',
    title: '5. フルスタックWebアプリ開発',
    columns: ['複雑度', 'プロジェクト費用（円）', '主な活用例'],
    rows: [
      {
        type: 'Simple corporate',
        badge: 'basic',
        prices: ['¥200,000 ~ ¥600,000'],
        useCases: '法律事務所；鍼灸予約；翻訳者ポートフォリオ；塾時間割；園芸ギャラリー',
      },
      {
        type: 'Mid booking',
        badge: 'mid',
        prices: ['¥600,000 ~ ¥1,500,000'],
        useCases:
          '美容院2席；会議室予約；個人レッスン；車検・整備；ペットトリミング；公民館貸出',
      },
      {
        type: 'Complex',
        badge: 'high',
        prices: ['¥3,000,000 ~ ¥8,000,000'],
        useCases: '農産物余剰出品；地域求人板；機器レンタル；道具ライブラリ；おむつ定期便',
      },
    ],
  },
  {
    id: 'cloud',
    title: '6. クラウド・DevOps',
    columns: ['費用項目', '月額目安（円）', '主な活用例'],
    rows: [
      {
        type: 'Small project',
        badge: 'basic',
        prices: ['¥50,000 ~ ¥120,000'],
        useCases:
          'Lightsail上のWordPress；GitHub Actionsテスト；PostgreSQLバックアップ；S3+CloudFront静的サイト；ステージング環境',
      },
      {
        type: 'Cloud infra',
        badge: 'mid',
        prices: ['¥5,000 ~ ¥200,000'],
        useCases: '選挙夜スケーリング；歯科DB災害復旧；サーバーレス画像リサイズ',
      },
      {
        type: 'DevOps retainer',
        badge: 'high',
        prices: ['¥100,000 ~ ¥250,000'],
        useCases: 'UptimeRobot+Slack連携；k3sクラスター；WooCommerceセキュリティ診断',
      },
    ],
  },
  {
    id: 'performance',
    title: '7. パフォーマンス最適化',
    columns: ['サービス種別', '費用目安（円）', '主な活用例'],
    rows: [
      {
        type: 'One-time audit',
        badge: 'basic',
        prices: ['¥500,000 ~ ¥1,200,000'],
        useCases:
          'EC週末速度低下；海外向け飲食店TTFB；不動産検索5000件；小規模CRM DB最適化',
      },
      {
        type: 'Annual contract',
        badge: 'mid',
        prices: ['¥1,000,000 ~ ¥2,000,000'],
        useCases: '月次Lighthouse計測；WordPressキャッシュ；漫画ポートフォリオCDN；MariaDBインデックス',
      },
    ],
  },
  {
    id: 'api',
    title: '8. API・ヘッドレスCMS',
    columns: ['費用項目', '見積（円）', '主な活用例'],
    rows: [
      {
        type: 'Basic project',
        badge: 'basic',
        prices: ['¥1,000,000 ~ ¥2,500,000'],
        useCases: '二言語ニュースレターCMS；キッチンカーアプリバックエンド；Vue制作会社サイト',
      },
      {
        type: 'CMS license',
        badge: 'mid',
        prices: ['¥8,000/月（microCMS）~ ¥25,000/月（Contentful）'],
        useCases: 'メニュー→デジタルサイネージ；ブログ+ポッドキャスト；物件→Web・LINEボット',
      },
    ],
  },
  {
    id: 'lowcode',
    title: '9. ローコード開発',
    columns: ['規模', 'プロジェクト費用（円）', '月額ライセンス（ユーザーあたり）', '主な活用例'],
    rows: [
      {
        type: 'Basic',
        badge: 'basic',
        prices: ['¥80,000 ~ ¥300,000', '¥500 ~ ¥1,000'],
        useCases:
          'ボランティア登録（Glide）；車庫メンテ記録；清掃チェックリスト（Retool）；課題提出（Softr）',
      },
      {
        type: 'Complex',
        badge: 'mid',
        prices: ['¥600,000 ~ ¥1,800,000', '¥4,000 ~ ¥15,000'],
        useCases: '取引先登録（Bubble）；経費承認（Adalo）；現場点検（OutSystems）',
      },
    ],
  },
  {
    id: 'martech',
    title: '10. MarTech・マーケティング自動化',
    columns: ['サービス', '導入・連携費用（円）', '月額ライセンス（円）', '主な活用例'],
    rows: [
      {
        type: 'MA license',
        badge: 'basic',
        prices: ['¥30,000 ~ ¥150,000', '¥30,000 ~ ¥70,000'],
        useCases: '誕生日クーポン；展示会リードタグ；休眠顧客メルマガ',
      },
      {
        type: 'Custom integration',
        badge: 'mid',
        prices: ['¥150,000 ~ ¥800,000', 'N/A'],
        useCases:
          'Google Forms→LINE；WordPress→Mailchimp；Shopify→Discord；Airtable SMS（Twilio）',
      },
    ],
  },
]
