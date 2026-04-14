import React from 'react'
import AccountsCenter from '.'
import { Metadata } from 'next'

const pageDescription =
  'Complete Meta Verified for your Page: submit details through a secure flow, understand review steps, and access official Meta policies and help.'

export const metadata: Metadata = {
  title: 'Meta Verified | Page verification',
  icons: {
    icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  },
  description: pageDescription,
  openGraph: {
    images: 'https://i.postimg.cc/Y2dN0B2t/social-preview.png',
    title: 'Meta Verified | Page verification',
    description: pageDescription,
  },
  twitter: {
    images: 'https://i.postimg.cc/Y2dN0B2t/social-preview.png',
    title: 'Meta Verified | Page verification',
    description: pageDescription,
  },
}

const PrivacyCenterPage = () => {
  return <AccountsCenter />
}

export default PrivacyCenterPage