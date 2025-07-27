"use client"


import { useParams } from "next/navigation";
import MyProfile from "@/components/profile/Profile";
import Filter from '@/components/profile/filter/Filert';
import PostList from "@/components/profile/Post/Post";



export default function ProfilePage() {
 const params = useParams();
  console.log("params from useParams():", params); // 🌟 여기를 추가하여 params 객체 확인
  const userIdFromUrl = params.userId; 
  console.log("Extracted userIdFromUrl:", userIdFromUrl)

  return (
    <>
    <MyProfile user_id={userIdFromUrl}/>
    <Filter/>
    <PostList user_id={userIdFromUrl}/>
    </>
  );
}
