"use client"

// 마크다운 뷰어 사용법
// MDView 임포트
// MDView 컴포넌트의 prop으로 Document를 넘겨줌

import MDView from '@/components/posts/MDView';

const page = () => {
    return (
        <div>
            <MDView Document="
            # 마크다운 언어입니다.
            <br><br>
            ## 이것은 목차입니다."/>
        </div>
    );
}

export default page;