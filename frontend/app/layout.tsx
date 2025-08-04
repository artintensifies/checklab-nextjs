import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Checklabs",
  description: "Study. Fork. Contribute. Advance the future with Checklabs.",
  other: {
    'google-site-verification': 'unalQ9RDl0GkYpi8cutyVxfwD8kVhSRIKHFNuwd8LOU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Checklabs — Community-led Innovation, Protected by Firebird</title>
        <meta name="description" content="Checklab empowers contributors to share paradigms, collaborate in Labs, and protect their innovation with Firebird’s DAUM system." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://checklab.vercel.com/" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


// import './globals.css'
// import TopNav from './components/TopNav'
// import Sidebar from './components/Sidebar'
// import type { ReactNode } from 'react'

// export default function HomeLayout({ children }: { children: ReactNode }) {
//   return (
//     <div className="min-h-screen bg-[#0e0e10] text-white">
//       <TopNav />
//       <Sidebar />
//       <main className="pl-[240px] pt-[50px] px-6">
//         {children}
//       </main>
//     </div>
//   )
// }
