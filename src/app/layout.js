// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Kronotrack',
  description: 'Kronotrack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" p-4">{children}</body>
    </html>
  )
}
