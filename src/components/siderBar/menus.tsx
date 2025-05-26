export const menuItems = [
  {
    name: 'အုပ်ချုပ်ရေးအဆင့်အတန်း',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    subMenus: [
      { label: 'ပြည်နယ်တိုင်းဒေသကြီးများ', route: '/regions' },
      { label: 'ခရိုင်များ', route: '/districts' },
      { label: 'မြို့နယ်များ', route: '/townships' },
      { label: 'ရုံးများ', route: '/offices' },
    ],
  },
  {
    name: 'ကိုယ်စားလှယ်လွှဲစာ',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Business-Handshake-Deal--Streamline-Cyber" height="24" width="24">
        <desc>
          Business Handshake Deal Streamline Icon: https://streamlinehq.com
        </desc>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.5 10.5 9.934 12 9 11.066 13.132 7.5H15L18 9l2.5 0.5V16l-2 0.5h-4.626" stroke-width="1"></path>
        <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="m3.5 15 2.597 0.5 3.952 3.951 1.709 -0.294 0.294 -1.709 1.709 -0.295 0.295 -1.709 1.708 -0.294 0.295 -1.709 -2.599 -2.599" stroke-width="1"></path>
        <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M11.514 8.896 9.618 7 6 8.5 3.5 9" stroke-width="1"></path>
        <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M3.5 7.5h-3v9h3v-9Z" stroke-width="1"></path>
        <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" d="M23.5 8.5h-3v9h3v-9Z" stroke-width="1"></path>
      </svg>
    ),
    subMenus: [
      { label: 'အထွေထွေ ကိုယ်စားလှယ်လွှဲစာ', route: '/power-of-attorney/general' },
      { label: 'အထူး ကိုယ်စားလှယ်လွှဲစာ', route: '/power-of-attorney/special' },
    ],
  },
  {
    name: 'စာချုပ်များ',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>

    ),
    subMenus: [
      { label: "အရောင်းအဝယ် စာချုပ်", route: "/contracts/sale", },
      { label: "အမွေဆက်ခံပိုင်ဆိုင်ကြောင်း ကြေညာစာချုပ်", route: "/contracts/inheritance-declaration" },
      { label: "အငှားစာချုပ်", route: "/contracts/rent" },
      { label: "အပေးစာချုပ်", route: "/contracts/gift" },
      { label: "စွန့်လွှတ်စာချုပ်", route: "/contracts/release" },
      { label: "အစုစပ်စာချုပ်", route: "/contracts/joint" },
      { label: "အမှားပြင်စာချုပ်", route: "/contracts/correction" },
      { label: "ဖျက်သိမ်းစာချုပ်", route: "/contracts/cancel" },
      { label: "တရားရုံးအမိန့်အရစာချုပ် ဖျက်သိမ်းခြင်း", route: "/contracts/court-order-cancel" },
      { label: "စာချုပ်စာတမ်းမိတ္တူရေးကူးခြင်း", route: "/contracts/copy" },
      { label: "ပစ္စည်းလဲလှယ်ခြင်းစာချုပ်", route: "/contracts/exchange" },
      { label: "အခြားစာချုပ်", route: "/contracts/others" },
    ],
  },

  // add more menu items here

  {
    name: "တရားဥပဒေ ဆိုင်ရာစာတမ်းများ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>

    ),
    subMenus: [
      { label: "တရားရုံးအမိန့်/ဒီဂရီ", route: "/legal-documents/orders-degrees" },
      { label: "ငြင်းပယ်ကြောင်းမှတ်ပပုံတင်စာအုပ်", route: "/legal-documents/rejection-register" },
      { label: "ကန့်ကွတ်လွှတ်", route: "/legal-documents/restriction-release" },
      { label: "အိတ်ပိတ် သေတမ်းစာ", route: "/legal-documents/sealed-death-certificate" },
    ],
  },
  {
    name: "သက်သေပြစာတမ်းများ / မှတ်တမ်းများ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-scroll-text-icon lucide-scroll-text"><path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></svg>
    ),
    subMenus: [
      { label: "သေတမ်းစာ", route: "/evidence-documents/death-certificate" },
      { label: "အစီရင်ခံစာ", route: "/evidence-documents/reports" },
    ],
  },
  {
    name: "ကုန်အမှတ်တံဆိပ်နှင့် ပိုင်ဆိုင်မှုများ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>

    ),
    subMenus: [
      { label: "ကုန်အမှတ်တံဆိပ်", route: "/trademarks" },
      { label: "ကုန်အမှတ်တံဆိပ်များ", route: "/trademarks/list" },
      { label: "မရွှေ့ပြောင်းနိုင်သောပစ္စည်း၏ လွှဲပြောင်းခဲ့မှုအခြေအနေများ", route: "/trademarks/immovable-transfers" },
    ],
  },
];