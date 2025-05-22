import './globals.css'




export const metadata = {
  title: 'Amir Ferroum',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
