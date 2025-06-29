import './globals.css';
import type { Metadata } from 'next';
import { Inter, Big_Shoulders_Display, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bigShoulders',
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
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
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${bigShoulders.variable} ${inter.variable} ${poppins.variable}`}>
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