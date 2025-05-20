import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";


// Dummy components/functions - replace with actual implementations
const Info = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="mb-2 text-xs leading-normal text-gray-500">
      {label}
    </p>
    <p className="text-sm font-medium text-gray-800">
      {value}
    </p>
  </div>
);

const EditBtn = () => (

  <Link to={'edit'}>

    <button
      // onClick={() => setIsProfileInfoModal(true)} // Replace with your actual handler
      className="flex cursor-pointer w-full items-center h-[46px] justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto"
    >
      <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
          fill="currentColor"
        />
      </svg>
      <p className="whitespace-nowrap">
        ပြုပြင်မည်
      </p>
    </button>
  </Link>

)




const onChangePassword = () => alert("Change Password clicked");

export default function Profile() {
  return (


    <>
      <Breadcrumb
        crumbs={[
          { label: 'မူလစာမျက်နှာ', to: '/' },
          { label: 'ကိုယ်ရေးအကျဉ်း' },

        ]}
      />






      <section className=" mt-5 bg-white  ">
        {/* Header */}
        <div className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-300">

          <div className="space-x-1 flex ">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0Z"
              />
            </svg>
            <p className="text-sm">ကိုယ်ရေးအကျဉ်း</p>
          </div>


          {/* account management */}
          <div className="col-span-2 space-x-3 flex  ">
            <button
              onClick={onChangePassword}
              className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 bg-white hover:bg-gray-100 "
            >
              အသုံးပြုသူ များကိုစီမံမည်
            </button>

            <button
              onClick={onChangePassword}
              className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 bg-white hover:bg-gray-100 "
            >
              အသုံးပြုသူ စာရင်း
            </button>
          </div>
        </div>




        {/* Main Profile Card */}
        <div className=" mx-auto  p-8 space-y-8">
          {/* Profile Summary */}
          <div className="rounded border border-gray-200 bg-white p-5 lg:p-6">

            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
                <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full">
                  <span className="bg-blue-600 text-white text-4xl h-full flex justify-center items-center w-full">M</span>
                </div>
                <div className="order-3 xl:order-2">
                  <h4 className="mb-2 text-lg font-semibold text-center xl:text-left">Musharof Chowdhury</h4>
                  <div className="flex flex-col items-center text-sm text-gray-500 gap-1 xl:flex-row xl:gap-3 xl:text-left">
                    <p>Admin</p>
                    {/* <div className="hidden h-3.5 w-px bg-gray-300 xl:block" /> */}
                    {/* <p>Arizona, United States.</p> */}
                  </div>
                </div>
              </div>

              <EditBtn />



            </div>
          </div>

          {/* Personal Info */}
          <div className="rounded border border-gray-200 bg-white p-5 lg:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">ကိုယ်ရေးအချက်အလက်</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 2xl:gap-x-32">
                  <Info label="အမည်" value="Musharof Chowdhury" />
                  <Info label="အီးမေးလ်" value="randomuser@pimjo.com" />
                  <Info label="မှတ်ပုံတင်သည့်နေ့စွဲ" value="2014-08-14 03:57:07" />
                  <Info label="နောက်ဆုံးဝင်ရောက်ချိန်" value="2025-05-20 11:50:54" />
                  <Info label="အဆင့်" value="အသုံးပြုသည်" />
                  <div className="col-span-2 space-x-3 flex  ">
                    <button
                      onClick={onChangePassword}
                      className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
                    >
                      စကားဝှက်အသစ်ပြောင်းရန်
                    </button>

                    <button
                      onClick={onChangePassword}
                      className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
                    >
                      ထွက်မည်
                    </button>
                  </div>
                </div>
              </div>

              <EditBtn />
            </div>
          </div>


        </div>
      </section >
    </>
  );
}
