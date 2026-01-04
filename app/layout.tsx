import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Sanjay R - AI & Data Science Engineer',
    description: 'Portfolio of Sanjay R, an Artificial Intelligence and Data Science Engineer specializing in Python, JavaScript, OpenCV, and Machine Learning.',
    keywords: ['AI Engineer', 'Data Science', 'Python Developer', 'Machine Learning', 'OpenCV', 'Web Development'],
    authors: [{ name: 'Sanjay R' }],
    openGraph: {
        title: 'Sanjay R - AI & Data Science Engineer',
        description: 'Portfolio showcasing AI and Data Science projects',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    )
}
