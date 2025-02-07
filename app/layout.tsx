import type React from "react"
import { ToastProvider } from "../components/ui/toast"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ficon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Sigmatic Trading</title>
      </head>
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  )
}



import './globals.css'