"use client"

import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { DropHandler } from "./MDTextarea";

// prop으로 height를 받습니다.
// 받은 값으로 초기 에디터 높이가 설정됩니다.
export default function MDEdit({height, getValue}) {
  const InitHeight = Number(height);

  // 에디터에 처음 입력되어 있는 문자열 세팅
  const [value, setValue] = React.useState("여기에 작성해주세요.\n\n두 칸을 띄워야 공백이 적용됩니다. (마크다운 문법)");
  
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        height={InitHeight}
        textareaProps={{
          onDrop: (e) => DropHandler(e, setValue, getValue),
          onChange: (e) => {
            getValue.current = e.target.value;
          }
        }}
      />
    </div>
  );
}