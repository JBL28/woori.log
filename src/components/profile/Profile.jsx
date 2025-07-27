import { USER } from '@/lib/MOCK_DATA';

export default function MyProfile ({user_id}) {
    console.log("profle",user_id)
    const foundUser = USER.find(user => user.user_id === user_id);
    console.log(foundUser)
    return (
         <div
        className="w-full flex justify-center items-end relative -b-2"
        style={{
          height: '280px',
          background: 'linear-gradient(to right, #edf9ff 0%, #56beff 50%, #004c8b 100%)',
        }}
      >
    
    
  <div className="absolute w-full h-[60px] bg-white">

  </div>

  {/* 반응형 흰색 박스 */}
  <div
    className="
      absolute 
      bottom-0

      w-[100%]          /* 기본: 화면 너비의 90% */
      sm:w-8/10         /* sm 이상: 75% */
     
      lg:w-8/10         /* lg 이상: 33% */
          /* 너비가 너무 커지면 xl(36rem)까지만 */
      h-50             /* 고정 높이 (14rem) */
       
      md:w-9/10         
      sm:h-54          /* sm 이상: 16rem */
      bg-white
      rounded-t-xl
-2 /* 알아보기 위한 예시임 - 지울예정 */
    "
  >
    <div className="w-full h-full flex justify-around items-center">
       <div className="w-30 h-30 rounded-full bg-gray-300">
    </div>
    <div className="flex-column ">
        <div className=" text-7xl  mb-3">
          {foundUser.user_name}
        </div>
        <div className="">
           {foundUser.user_intro}
        </div>
    </div>
  
    </div>
   
  </div>

</div>
    )
}