import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'NIPPON SYSTEMS',
  description: 'Web development, automation, AI chatbot, and ecommerce solutions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          id="extension-attribute-cleanup"
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const shouldRemove = (name) =>
                  name === 'bis_skin_checked' ||
                  name === 'bis_register' ||
                  name.startsWith('__processed_');

                const clean = (node) => {
                  if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
                  for (const attr of Array.from(node.attributes)) {
                    if (shouldRemove(attr.name)) node.removeAttribute(attr.name);
                  }
                  for (const child of node.children) clean(child);
                };

                clean(document.documentElement);

                new MutationObserver((records) => {
                  for (const record of records) {
                    if (record.type === 'attributes' && shouldRemove(record.attributeName || '')) {
                      record.target.removeAttribute(record.attributeName);
                    }

                    for (const node of record.addedNodes) clean(node);
                  }
                }).observe(document.documentElement, {
                  attributes: true,
                  childList: true,
                  subtree: true,
                });
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
