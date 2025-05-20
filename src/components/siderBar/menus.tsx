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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000000" id="Handshake-Fill--Streamline-Phosphor-Fill" height={24} width={24} ><desc>{"\n    Handshake Fill Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="m15.73640625 6.2791375 -1.56320625 -3.12763125c-0.2421875 -0.4841375 -0.831025 -0.6802375 -1.315125 -0.43796875L11.3346875 3.47493125l-3.2091 -0.84898125c-0.08234375 -0.02143125 -0.1688 -0.02143125 -0.25114375 0L4.66534375 3.47493125 3.14195625 2.7135375c-0.4841 -0.24226875 -1.0729375 -0.04616875 -1.315125 0.43796875L0.263625 6.278525c-0.24226875 0.4841 -0.04616875 1.0729375 0.43796875 1.315125l1.6538625 0.82754375 3.3989875 2.4275c0.05008125 0.03563125 0.10638125 0.0616 0.166 0.07656875l3.92025625 0.9800625c0.167 0.04188125 0.343725 -0.00695 0.46553125 -0.12863125l2.4501625 -2.4501625 0.9237125 -0.9237125 1.61833125 -0.80916875c0.4837875 -0.24218125 0.67981875 -0.8305625 0.43796875 -1.3145125Zm-3.3622375 2.04405 -2.10775 -1.6881625c-0.19555625 -0.15660625 -0.47774375 -0.1404875 -0.65419375 0.03736875 -1.0909375 1.09889375 -2.30683125 0.95985 -3.08230625 0.46981875l2.648625 -2.572675h1.94849375l1.66671875 3.3328375Zm-2.56470625 2.56409375L6.249375 9.9972625l-3.0137 -2.15246875L4.9507875 4.4145625l3.04923125 -0.8079375 0.6002875 0.15865 -2.75643125 2.675575 -0.0049 0.0055125c-0.44328125 0.443275 -0.36218125 1.1830125 0.16660625 1.5197125 1.2593875 0.80426875 2.7791 0.67379375 3.97600625 -0.30626875l1.693675 1.36045Zm-1.57545625 2.13164375c-0.05446875 0.21790625 -0.25010625 0.37088125 -0.47471875 0.3712 -0.0402625 -0.00005625 -0.08036875 -0.00499375 -0.11944375 -0.0147L5.0849375 12.73654375c-0.0597 -0.01473125 -0.11604375 -0.04071875 -0.166 -0.07656875l-1.61404375 -1.1528c-0.29670625 -0.23295625 -0.2299625 -0.69974375 0.12013125 -0.84021875 0.14805625 -0.05940625 0.31576875 -0.043025 0.44953125 0.0439125l1.5380875 1.0989 2.4648625 0.61499375c0.26249375 0.0656625 0.4220875 0.33165 0.3565 0.5941625Z" strokeWidth={0.0625} /></svg>
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
      { label: "အရောင်းအဝယ် စာချုပ်", route: "/contracts/sale" },
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