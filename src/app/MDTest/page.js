"use client"

// MD 에디터에서 값 받아오는 방법.
// 1. useRef 임포트
// 2. useRef를 사용할 변수 선언
// 3. MDEdit 컴포넌트의 prop으로 getValue 넘겨주기

import MDEdit from "@/components/posts/MDEdit";
// 1단계. useRef 임포트
import { useRef } from "react";

export default function Home() {
  // 2단계. useRef를 사용할 변수 선언
  const getValue = useRef("");

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
        {/* 3단계. MDEdit 컴포넌트의 prop으로 getValue 넘겨주기 */}
        {/* height prop으로 초기 높이 설정 가능합니다. (사용자가 늘렸다 줄였다 가능) */}
        <MDEdit height="500" getValue={getValue}/>
      </main>
      <button onClick={() =>console.log(getValue.current)}>클릭</button>
    </div>
  );
}