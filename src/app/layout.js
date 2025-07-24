import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>우리로그</title> 
      <body>
        {children}
      </body>
    </html>
  );
}
