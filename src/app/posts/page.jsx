'use client'

import MDView from "@/components/posts/MDView";
import { POST } from "@/lib/MOCK_DATA";

export default function Page() {
    return (
        <div>
            <MDView Document={POST[0].post_docs}/>
        </div>
    );
}