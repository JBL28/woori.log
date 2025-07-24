import Image from "next/image";
import MDEdit from "@/components/posts/MDEdit";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* 고정 헤더 */}
      <header className="h-16 bg-blue-600 text-white flex items-center justify-center shadow-md z-10">
        <h1 className="text-xl font-bold">더미 헤더</h1>
      </header>

      {/* 스크롤 가능한 콘텐츠 영역 */}
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <MDEdit height="500"/>
      </main>
    </div>
  );
}
