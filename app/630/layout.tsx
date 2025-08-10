import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imad & Nour - Engagement Invitation - 6:30 PM",
  description:
    "Join us for our engagement celebration on August 17th, 2025 at 6:30 PM. An evening of love & celebration awaits!",
  metadataBase: new URL('https://imad-nour.vercel.app'),
  alternates: {
    canonical: '/630',
  },
  openGraph: {
    title: "Imad & Nour - Engagement Invitation - 6:30 PM",
    description:
      "Join us for our engagement celebration on August 17th, 2025 at 6:30 PM. An evening of love & celebration awaits!",
    url: 'https://imad-nour.vercel.app/630',
    siteName: 'Imad & Nour Engagement',
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.32%20PM-TEpkdFzBho1yMHhqQsrL4yJSl1pOPA.jpeg",
        width: 1200,
        height: 630,
        alt: "Imad & Nour Engagement Celebration - 6:30 PM",
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: '@imadnour',
    title: "Imad & Nour - Engagement Invitation - 6:30 PM",
    description:
      "Join us for our engagement celebration on August 17th, 2025 at 6:30 PM. An evening of love & celebration awaits!",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-05%20at%201.01.32%20PM-TEpkdFzBho1yMHhqQsrL4yJSl1pOPA.jpeg",
    ],
  },
}

export default function Layout630({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}