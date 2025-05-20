

import { useState } from 'react';
import DropDownMenuItem from './DropDownMenuItem';
import { menuItems } from './menus.tsx';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem.tsx';






interface SidebarProps {

  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

export default function Sidebar({ isShow, setIsShow }: SidebarProps) {

  const [isActive, setIsActive] = useState<string>('ဒက်ရှ်ဘုတ်');
  const [beforeActive, setBeforeActive] = useState<boolean>(isShow);

  const clickFun = (item: string) => {
    setIsActive(item);
  };

  return (

    <section className=''>
      {/* overlay for mobile */}
      <div onClick={() => setIsShow(false)} className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${isShow ? 'block xl:hidden ' : 'hidden'}`} />

      <div

        className={`fixed xl:relative h-screen border-r border-gray-300 bg-white transition-all duration-300 overflow-x-visible
           ${isShow ? 'w-[250px] ' : ' w-[0px] overflow-hidden xl:overflow-visible bg-red-500   xl:block xl:w-[90px]'
          }`}
      >



        {/* Header */}
        <header className={`relative p-5 flex flex-col justify-center items-center space-y-2  `}>

          {/* profile picture */}
          <div className="w-[60px] aspect-square h-[60px] bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            H
          </div>

          {/* User Info */}
          <div className={` flex-col  items-center space-y-1 `}>


            <h1 className="text-base font-semibold"> မင်္ဂလာပါ, Admin</h1>

            <span className='flex items-center justify-center w-fit  h-fit border border-gray-300 rounded p-0 text-gray-500'>
              <Link to="/profile">
                <i className='cursor-pointer w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 transition-all duration-300'>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </i>
              </Link>


              <Link to={'profile/edit'}>

                <i className='cursor-pointer w-7 h-7 flex items-center border-x border-gray-300 justify-center  hover:bg-gray-100 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </i>
              </Link>
              <i className='cursor-pointer w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 transition-all duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>

              </i>

            </span>
          </div>
          {/* Toggle Button */}
          <div
            onClick={(e) => { setIsShow(!isShow); e.preventDefault(); }}
            className={`absolute -right-[20px] top-1/2 -translate-y-1/2 w-10 aspect-square flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer rounded-full transition-all transform ${isShow ? 'rotate-0' : 'rotate-180'
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </header>

        {/* Divider */}
        <div className="w-[80%] mx-auto border-t border-gray-500 h-[1px]" />

        {/* Menu */}
        <div


          onMouseEnter={() => {
            setBeforeActive(isShow); // store old state
            setIsShow(true);         // expand on hover
          }}

          onMouseLeave={() => setIsShow(beforeActive)} className='overflow-auto p-5 scrollbar-hide h-[calc(100vh-200px)]'>
          <ul className='flex flex-col space-y-2'>

            <MenuItem
              isShow={isShow}
              isActive={isActive === 'ဒက်ရှ်ဘုတ်'}
              name="ဒက်ရှ်ဘုတ်"
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
              }
              clickFun={clickFun}
            />

            {menuItems.map((menu) => (
              <DropDownMenuItem
                key={menu.name}
                name={menu.name}
                icon={menu.icon}
                subMenus={menu.subMenus}
                isActive={isActive === menu.name}
                isShow={isShow}
                clickFun={clickFun}
              />
            ))}



          </ul>
        </div>
      </div>

    </section>
  );
}

//  <DropDownMenuItem
//             subMenus={[
//               { label: 'ပြည်နယ်တိုင်းဒေသကြီးများ', route: '/regions' },
//               { label: 'ခရိုင်များ', route: '/districts' },
//               { label: 'မြို့နယ်များ', route: '/townships' },
//               { label: 'ရုံးများ', route: '/offices' },
//             ]}
//             isActive={isActive === 'အုပ်ချုပ်ရေးအဆင့်အတန်း'}
//             isShow={isShow}
//             name="အုပ်ချုပ်ရေးအဆင့်အတန်း"
//             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
//             </svg>


//             }
//             clickFun={clickFun}
//           />



//           <DropDownMenuItem
//             subMenus={[
//               { label: 'အထွေထွေ ကိုယ်စားလှယ်လွှဲစာ', route: '/power-of-attorney/general' },
//               { label: 'အထူး ကိုယ်စားလှယ်လွှဲစာ', route: '/power-of-attorney/special' },
//             ]}
//             isActive={isActive === 'ကိုယ်စားလှယ်လွှဲစာ'}
//             isShow={isShow}
//             name="ကိုယ်စားလှယ်လွှဲစာ"
//             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//             </svg>


//             }
//             clickFun={clickFun}
//           />

//           <DropDownMenuItem
//             subMenus={[
//               { label: "အရောင်းအဝယ် စာချုပ်", route: "/contracts/sale" },
//               { label: "အမွေဆက်ခံပိုင်ဆိုင်ကြောင်း ကြေညာစာချုပ်", route: "/contracts/inheritance-declaration" },
//               { label: "အငှားစာချုပ်", route: "/contracts/rent" },
//               { label: "အပေးစာချုပ်", route: "/contracts/gift" },
//               { label: "စွန့်လွှတ်စာချုပ်", route: "/contracts/release" },
//               { label: "အစုစပ်စာချုပ်", route: "/contracts/joint" },
//               { label: "အမှားပြင်စာချုပ်", route: "/contracts/correction" },
//               { label: "ဖျက်သိမ်းစာချုပ်", route: "/contracts/cancel" },
//               { label: "တရားရုံးအမိန့်အရစာချုပ် ဖျက်သိမ်းခြင်း", route: "/contracts/court-order-cancel" },
//               { label: "စာချုပ်စာတမ်းမိတ္တူရေးကူးခြင်း", route: "/contracts/copy" },
//               { label: "ပစ္စည်းလဲလှယ်ခြင်းစာချုပ်", route: "/contracts/exchange" },
//               { label: "အခြားစာချုပ်", route: "/contracts/others" },
//             ]}

//             isActive={isActive === 'စာချုပ်များ'}
//             isShow={isShow}
//             name="စာချုပ်များ"
//             icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//             </svg>


//             }
//             clickFun={clickFun}
//           />
