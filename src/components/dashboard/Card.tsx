
type CardProps = {
    title: string;
};

const Card = ({ title }: CardProps) => {
    return (
        <div className="w-full h-auto bg-white shadow rounded-md border border-gray-200 flex flex-col justify-between">
            {/* Content Section */}
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-5 ">{title}</h3>
                <ul className="text-xs text-gray-600 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-2">
                        <span className="text-xs leading-[0.8] text-gray-400">•</span>
                        <span className="flex justify-between items-center w-full">
                            <span className="">ရေးသွင်းခြင်း</span>
                            <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-semibold flex items-center justify-center">
                                0
                            </span>
                        </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-xs leading-[0.8] text-gray-400">•</span>
                        <span className="flex justify-between items-center w-full">
                            <span>စိစစ်အတည်ပြုခြင်း</span>
                            <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-semibold flex items-center justify-center">
                                0
                            </span>
                        </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-xs leading-[0.8] text-gray-400">•</span>
                        <span className="flex justify-between items-center w-full">
                            <span>ပြုပြင်ရန်ပြန်ပို့ခြင်း</span>
                            <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-semibold flex items-center justify-center">
                                0
                            </span>
                        </span>
                    </li>
                </ul>


            </div>

            {/* Action Buttons Footer */}
            <div className="border-t border-dotted border-gray-300 px-4 pt-3 pb-4 flex justify-between text-xs text-blue-600 font-medium">
                <button className="flex items-center gap-1 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                    <span>စာရင်း</span>
                </button>

                <button className="flex items-center gap-1 hover:underline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                    </svg>
                    <span>အသစ်</span>
                </button>
            </div>
        </div>

    );
};


export default Card;