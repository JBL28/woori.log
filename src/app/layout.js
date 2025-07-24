import Header from "@/components/common/Header";
import "./globals.css";
import Footer from "@/components/common/Footer";
import SidebarContainer from "@/components/common/sidebar/SidebarContainer";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        <main className="flex">
          <SidebarContainer/>
          <div className="flex-1">{children}</div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
