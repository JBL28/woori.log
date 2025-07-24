export default function layout({children}) {
  return (
   <div className="flex bg-white w-full h-full justify-center items-center flex-col">
        {children}
   </div>
  );
}
