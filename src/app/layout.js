import Header from "@/components/common/Header";
import "./globals.css";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <title>우리로그</title> 
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
