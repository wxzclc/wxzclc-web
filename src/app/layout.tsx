// import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { getPicPrefix } from '@/utils/commonFuncs';

const inter = Inter({ subsets: ['latin'] })

const BodyStyle: React.CSSProperties = {
  backgroundImage: `url("${getPicPrefix("/img/bg_1012-w.jpg")}")`,
  backgroundSize: 'cover',
};

export const metadata: Metadata = {
  title: 'Diplozoon paradoxum',
  description: 'Diplozoon paradoxum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={BodyStyle}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
