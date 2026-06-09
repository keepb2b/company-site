import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto('http://localhost:3008/', { waitUntil: 'networkidle', timeout: 90000 })
await page.waitForTimeout(4000)

async function measure(label) {
  const data = await page.evaluate(() => ({
    scrollY: Math.round(window.scrollY),
    scrollX: Math.round(window.scrollX),
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    overflow: document.documentElement.scrollWidth > window.innerWidth,
  }))
  console.log(label, data)
}

await measure('top')
for (let i = 0; i < 8; i++) {
  await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.45))
  await page.waitForTimeout(400)
  await measure(`scroll-${i + 1}`)
}

await browser.close()
