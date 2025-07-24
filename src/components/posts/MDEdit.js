"use client"

import React from "react";
import MDEditor from '@uiw/react-md-editor';

// prop으로 height를 받습니다.
// 받은 값으로 초기 에디터 높이가 설정됩니다.
export default function MDEdit({height}) {
  const InitHeight = Number(height);

  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container h-max">
      <MDEditor
        value={value}
        onChange={setValue}
        height={InitHeight}
      />
    </div>
  );
}