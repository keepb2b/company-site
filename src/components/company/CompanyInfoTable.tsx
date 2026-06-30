import { useI18n } from '../../i18n'

export function CompanyInfoTable() {
  const { dict } = useI18n()

  return (
    <dl className="scroll-reveal divide-y divide-sand-200 border-y border-sand-200 bg-transparent">
      {dict.company.rows.map((row) => (
        <div key={row.label} className="grid gap-2 px-0 py-4 md:grid-cols-[200px_1fr] lg:py-2.5">
          <dt className="text-sm font-semibold text-navy-900">{row.label}</dt>
          <dd className="text-sm text-navy-800">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
