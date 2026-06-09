import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'
import type { FeeTableBadge } from '../../data/feeTables.types'

export function PricingTablesSection() {
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 100 })
  const { dict } = useI18n()
  const { tableSections, tableBadges, tableNotes, pageTablesTitle } = dict.fee

  const badgeLabel = (badge: FeeTableBadge) => tableBadges[badge]

  return (
    <section ref={ref} className="page-fee-tables mt-16">
      <header className="page-fee-tables-head">
        <h2 className="page-fee-tables-head__en">{pageTablesTitle}</h2>
      </header>

      <div className="page-fee-tables-list">
        {tableSections.map((section) => {
          const priceColumnCount = section.columns.length - 2

          return (
            <div key={section.id} className="page-fee-table scroll-reveal">
              <div className="page-fee-table__title">{section.title}</div>

              <div className="page-fee-table__scroller">
                <div
                  className="page-fee-table__grid"
                  style={{
                    ['--fee-cols' as string]: `${priceColumnCount}`,
                  }}
                >
                  <div className="page-fee-table__row page-fee-table__row--head">
                    {section.columns.map((column) => (
                      <div
                        key={column}
                        className={`page-fee-table__cell ${
                          column === section.columns[section.columns.length - 1]
                            ? 'page-fee-table__cell--cases'
                            : column === section.columns[0]
                              ? 'page-fee-table__cell--type'
                              : 'page-fee-table__cell--price'
                        }`}
                      >
                        {column}
                      </div>
                    ))}
                  </div>

                  {section.rows.map((row) => (
                    <div key={row.type} className="page-fee-table__row">
                      <div className="page-fee-table__cell page-fee-table__cell--type">
                        {row.badge ? (
                          <span className={`page-fee-badge page-fee-badge--${row.badge}`}>
                            {badgeLabel(row.badge)}
                          </span>
                        ) : null}
                        <span className="page-fee-table__type">{row.type}</span>
                      </div>

                      {row.prices.map((price, index) => (
                        <div
                          key={`${row.type}-${index}`}
                          className="page-fee-table__cell page-fee-table__cell--price"
                        >
                          {price}
                        </div>
                      ))}

                      {row.prices.length < priceColumnCount
                        ? Array.from({ length: priceColumnCount - row.prices.length }).map((_, index) => (
                            <div
                              key={`${row.type}-empty-${index}`}
                              className="page-fee-table__cell page-fee-table__cell--price"
                            >
                              -
                            </div>
                          ))
                        : null}

                      <div className="page-fee-table__cell page-fee-table__cell--cases">{row.useCases}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <ul className="page-fee-table-notes">
        {tableNotes.map((note) => (
          <li key={note}>※ {note}</li>
        ))}
      </ul>
    </section>
  )
}
