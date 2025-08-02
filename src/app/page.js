import HotBoard from "@/components/HotBoard/HotBoard";
import Maincontent from "@/components/main/Maincontent";

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center w-full h-9/10 flex-row " >
      <Maincontent/>
      <HotBoard/>
    </div>
    
    </>
  );
}

export const metadata = {
  title: '우리자리',
  description: '블로그 포스팅을 나혼자서, 다같이',
  keywords: '기술 블로그, 팀블로그, 블로그',
  robots: "index, follow",
  icons: {
    icon: 'image/favicon.png',
  },
}