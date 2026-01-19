import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageTransition } from "@/components/layout/PageTransition"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Victor Collins Oppon | Data Scientist & ML Engineer",
  description: "Data Scientist & ML Engineer (MSc Data Science, FCCA, MBA Finance) building Production ML Systems with Measurable Business Impact. 17+ projects across Financial AI, Healthcare ML, and Predictive Analytics.",
  keywords: [
    "data scientist",
    "machine learning engineer",
    "MSc Data Science",
    "FCCA",
    "MBA Finance",
    "financial AI",
    "healthcare ML",
    "production ML",
    "data science portfolio",
  ],
  authors: [{ name: "Victor Collins Oppon" }],
  openGraph: {
    title: "Victor Collins Oppon | Data Scientist & ML Engineer",
    description: "Data Scientist & ML Engineer (MSc Data Science, FCCA, MBA Finance) - 17+ Production ML Projects with Measurable Business Impact",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased gradient-mesh min-h-screen`}>
        <Header />
        <main className="pt-16 md:pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
