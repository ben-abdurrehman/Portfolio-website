import './globals.css';
import type { Metadata } from 'next';
import {Poppins, Bebas_Neue } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const BebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
});




export const metadata: Metadata = {
  title: 'Professional Developer | Websites & Apps That Convert',
  description: 'Expert web developer specializing in modern websites and applications that drive results. Get in touch for your next project.',
  keywords: 'web developer, websites, apps, development, responsive design, seo, ui/ux' ,
  authors: [{ name: 'Abdurrehman' }],
  creator: 'Ben Abdurrehman',
  openGraph: {
    title: 'Professional Developer | Websites & Apps That Convert',
    description: 'Expert web developer specializing in modern websites and applications that drive results.',
    url: 'https://benabdurrehman.com',
    siteName: 'Ben Abdurrehman',
    images: [
      {
        url: '/graph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Developer | Websites & Apps That Convert',
    description: 'Expert web developer specializing in modern websites and applications that drive results.',
    images: ['/graph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '1ed7017196c03738',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <meta name="google-site-verification" content="1ed7017196c03738" />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "benabdurrehman",
              "url": "https://benabdurrehman.com",
              "logo": "https://benabdurrehman.com/logo.png",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Abdurrehman"
                }
              ],
              "foundingDate": "2025-6-01",
              "foundingLocation": "Lahore, Pakistan",
              "sameAs": [
                "https://linkedin.com/in/abdurrehman-waseem/",
                "https://instagram.com/benabdurrehman",
                "https://github.com/ben-abdurrehman/",
                "https://www.upwork.com/freelancers/~01669495152aa87771"
              ],
              "description": "Expert web developer specializing in modern websites and applications that drive results.",
              "location": {
                "@type": "Place",
                "address": {
                  "addressLocality": "Lahore",
                  "addressCountry": "Pakistan"
                }
              },
            })
          }}
        />
      </head>
      <body className={`${BebasNeue.variable} ${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}