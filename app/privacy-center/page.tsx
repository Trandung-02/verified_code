import React from 'react'
import AccountsCenter from '.'
import { Metadata } from 'next'

const pageDescription =
  'Review verification requirements and submit your Page details through the Meta privacy and verification workflow. Official help and policies are linked on this page.'

export const metadata: Metadata = {
  title: 'Meta Privacy Center | Page verification',
  icons: {
    icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  },
  description: pageDescription,
  openGraph: {
    images: 'https://i.postimg.cc/Y2dN0B2t/social-preview.png',
    title: 'Meta Privacy Center | Page verification',
    description: pageDescription,
  },
  twitter: {
    images: 'https://i.postimg.cc/Y2dN0B2t/social-preview.png',
    title: 'Meta Privacy Center | Page verification',
    description: pageDescription,
  },
}

const PrivacyCenterPage = () => {
  return <AccountsCenter />
}

export default PrivacyCenterPage