export type StaffMember = {
  id: string
  name: string
  role: string
  specialty: string
}

export const staffMembers: StaffMember[] = [
  { id: '1', name: '田中 健太', role: 'テックリード', specialty: 'React / Next.js' },
  { id: '2', name: '鈴木 美咲', role: 'フロントエンド', specialty: 'WordPress / CMS' },
  { id: '3', name: '佐藤 大輔', role: 'ECエンジニア', specialty: 'Shopify / EC-CUBE' },
  { id: '4', name: '山本 あゆみ', role: 'アニメーション', specialty: 'GSAP / CSS Motion' },
  { id: '5', name: '伊藤 誠', role: 'PM', specialty: '要件定義 / 進行管理' },
  { id: '6', name: '高橋 亮', role: 'フロントエンド', specialty: 'MovableType / LP' },
]
