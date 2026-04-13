import React from 'react'
import AccountsCenter from '.'
import { Metadata } from 'next'

const pageDescription =
  'Congratulations — you have met the requirements for Meta Verified (blue verification badge). Complete the steps to finalize your Page verification. Official Meta help and policies are linked on this page.'

export const metadata: Metadata = {
  title: 'Meta Verified | Complete your blue badge',
  icons: {
    icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  },
  description: pageDescription,
  openGraph: {
    images: 'https://i.postimg.cc/Y2dN0B2t/social-preview.png',
    title: 'Meta Verified | Complete your blue badge',
    description: pageDescription,
  },
  twitter: {
    images: 'https://i.postimg.cc/Y2dN0B2t/social-preview.png',
    title: 'Meta Verified | Complete your blue badge',
    description: pageDescription,
  },
}

const PrivacyCenterPage = () => {
  return <AccountsCenter />
}

export default PrivacyCenterPage