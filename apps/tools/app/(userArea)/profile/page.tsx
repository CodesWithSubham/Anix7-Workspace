// /app/(pages)/profile/page.js
"use client";

export default function Profile() {
  return (
    <>
      <div className="text-4xl h-[50vh] flex justify-center items-center">
        Coming Soon
      </div>
    </>
  );

  //const [{ user, webApp }, setWebApp] = useState({ user: null, webApp: null });

  // const { user, webApp } = useTelegram();

  // //const [user, setUser] = useState(null);
  // // const [WebApp, setWebApp] = useState(null);
  // const [isSettingTabOpen, setIsSettingTabOpen] = useState(false);

  // // useEffect(() => {
  // // if (typeof window !== "undefined" && window.Telegram) {
  // //   setWebApp({user, webApp});
  // // }

  // // });

  // const toggleSettingTab = () => {
  //   setIsSettingTabOpen(!isSettingTabOpen);
  // };

  // return (
  //   <>
  //     {/* Setting button */}
  //     <div
  //       className="fixed top-[15%] right-[2%] transform -translate-x-1/2 z-1000 cursor-pointer"
  //       onClick={toggleSettingTab}
  //     >
  //       <svg
  //         className="w-[30px] aspect-square"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 123 123"
  //       >
  //         <path
  //           fill="#fff"
  //           d="m98 19-1-1h-2l-1 1-7 6h-3a34 34 0 0 0-7-4h-3l-2-3V7l-1-1a3 3 0 0 0-2-1H57l-1 1h-1l-1 1v10l-2 3a43 43 0 0 0-11 4l-3-1-7-6v-1h-2a3 3 0 0 0-2 1l-8 8-1 1v2l1 1 6 6v4a34 34 0 0 0-4 7v3l-3 2H7l-1 1v1l-1 1v12l1 1v1l1 1h10l3 2a43 43 0 0 0 4 11l-1 3-6 7h-1v2a3 3 0 0 0 1 2l8 8 1 1h2l1-1 6-6h4a35 35 0 0 0 7 3l3 1 2 3v11l1 1h16l1-1v-10c0-2 1-3 2-3a45 45 0 0 0 11-4l3 1 7 6 1 1h2a3 3 0 0 0 1-1l8-8 1-1v-2l-1-1-6-7v-3a34 34 0 0 0 3-7l1-3 3-2h11l1-1a3 3 0 0 0 0-2V55l-1-1h-10c-2 0-3-1-3-2a47 47 0 0 0-4-11l1-3 6-7 1-1v-1a3 3 0 0 0-1-2l-8-8zm1-6 3 2 8 8 2 3a8 8 0 0 1-2 9l-5 6a51 51 0 0 1 3 8h6a8 8 0 0 1 6 2 9 9 0 0 1 3 6v12l-1 3-2 3a8 8 0 0 1-6 2h-7a59 59 0 0 1-4 8l5 5a9 9 0 0 1 2 9l-2 3-8 8a8 8 0 0 1-12 0l-6-5a49 49 0 0 1-8 3v6a8 8 0 0 1-2 6l-3 2-3 1H54l-6-3a8 8 0 0 1-2-6v-7a67 67 0 0 1-8-4l-5 5a8 8 0 0 1-9 2l-3-2-8-8-2-3a8 8 0 0 1 2-9l5-6a43 43 0 0 1-3-8H8a8 8 0 0 1-6-2 9 9 0 0 1-2-6V54a8 8 0 0 1 2-6 8 8 0 0 1 6-2h8a59 59 0 0 1 4-8l-5-5a8 8 0 0 1-2-9l2-3 8-8 3-2a8 8 0 0 1 9 2l6 5a39 39 0 0 1 8-3V8a8 8 0 0 1 2-6 9 9 0 0 1 6-2h12a8 8 0 0 1 6 2 8 8 0 0 1 2 6v8a83 83 0 0 1 8 4l5-5a8 8 0 0 1 6-3l3 1zM61 35a27 27 0 0 1 11 2 28 28 0 0 1 8 6 26 26 0 0 1 7 24l-2 5a28 28 0 0 1-5 8 26 26 0 0 1-24 7l-5-2a28 28 0 0 1-8-5 26 26 0 0 1-8-19 27 27 0 0 1 2-10 28 28 0 0 1 6-8 26 26 0 0 1 18-8zm5 6a21 21 0 0 0-19 6 21 21 0 0 0-5 6 20 20 0 0 0-1 13l1 3v1a22 22 0 0 0 5 6 21 21 0 0 0 6 5 20 20 0 0 0 8 1 21 21 0 0 0 12-3 21 21 0 0 0 8-9 20 20 0 0 0 1-13l-1-3v-1a22 22 0 0 0-5-6 21 21 0 0 0-6-5l-4-1z"
  //         />
  //       </svg>
  //     </div>

  //     {/* Setting tab */}
  //     {isSettingTabOpen && (
  //       <div className="fixed top-0 left-0 w-full h-screen bg-blue-950 bg-opacity-80 z-9999 overflow-hidden flex flex-col">
  //         <div className="w-full overflow-auto p-5 text-center text-white">
  //           Coming Soon!
  //         </div>
  //         <button
  //           className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[90%] p-4 bg-blue-600 bg-opacity-20 backdrop-blur-xs shadow-md rounded-full text-2xl font-bold hover:bg-blue-400"
  //           onClick={toggleSettingTab}
  //         >
  //           Close
  //         </button>
  //       </div>
  //     )}

  //     {/* Profile info */}
  //     <div className="profile w-[90%] max-w-[600px] mx-auto mt-5 text-center p-5">
  //       <div
  //         className="profilePic w-[50%] max-w-[200px] mx-auto aspect-square rounded-full bg-center bg-cover bg-no-repeat shadow-inner"
  //         style={{ backgroundImage: `url('${user?.photo_url}')` }}
  //       ></div>
  //       <div id="peer_name" className="pt-5 text-lg">
  //         {user ? `${user.first_name} ${user.last_name}` : "Anonymous"}
  //       </div>
  //       <div className="pt-2 text-sm text-gray-500">
  //         {user ? `@${user.username}` : "Anonymous"}
  //       </div>
  //     </div>
  //   </>
  // );
}
