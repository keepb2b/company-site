import { useI18n } from '../../i18n'

export function CompanyInfoTable() {
  const { dict } = useI18n()

  return (
    <dl className="scroll-reveal divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
      {dict.company.rows.map((row) => (
        <div key={row.label} className="grid gap-2 px-6 py-4 md:grid-cols-[200px_1fr]">
          <dt className="text-sm font-semibold text-navy-800">{row.label}</dt>
          <dd className="text-sm text-navy-700/85">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
