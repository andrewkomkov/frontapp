import {Metadata} from 'next'
import {ColorModeProvider} from '~/components/providers/ColorModeContext'
import {MagicScriptTag} from '~/components/theme/InlineCssVariables'
import {Providers} from './providers'
import '../styles/index.css'

// Use system fonts instead of Google Fonts to avoid network issues during build
const fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

const APP_NAME = 'X-Cart Auto app'
const APP_DEFAULT_TITLE = 'X-Cart Auto front app'
const APP_TITLE_TEMPLATE = '%s - X-Cart Auto front app'
const APP_DESCRIPTION = 'X-Cart Auto demo store front app'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  themeColor: '#FFFFFF',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: [{url: '/icons/touch-icon-iphone.png', sizes: '180x180'}],
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" style={{fontFamily}} suppressHydrationWarning>
      <body className="bg-contrast leading-base text-primary antialiased">
        <MagicScriptTag />
        <ColorModeProvider>
          <Providers>{children}</Providers>
        </ColorModeProvider>
      </body>
    </html>
  )
}
