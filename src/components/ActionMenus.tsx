import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id : number
}

function ActionMenu({id } : Props) {
    const [open, setOpen] = useState(false);


    return (
        <td className="px-5 py-4 sm:px-6 flex items-center gap-x-2">
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    onBlur={() => setTimeout(() => setOpen(false), 150)}
                    className="w-8 h-8 rounded-full hover:bg-gray-100 flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                    </svg>
                </button>

                {open && (
                    <div className="absolute right-0 top-full mt-1 text-xs bg-white border border-gray-300 rounded shadow-sm p-1 flex flex-col space-y-1 z-10">


                        <Link to={'/profile'}>

                            <span

                                className="flex justify-start items-center cursor-pointer w-[80px] px-3 py-1 hover:bg-gray-100 select-none"
                            >
                                View
                            </span>
                        </Link>
                        <Link to={`/profile/update/${id}`}>
                            <span

                                className="flex justify-start items-center cursor-pointer w-[80px] px-3 py-1 hover:bg-gray-100 select-none"
                            >
                                Edit
                            </span>
                        </Link>


                        <Link to={'/profile'}>
                            <span

                                className="flex justify-start items-center cursor-pointer w-[80px] px-3 py-1 hover:bg-gray-100 select-none"
                            >
                                Delete
                            </span>

                        </Link>
                    </div>
                )}
            </div>
        </td>
    );
}

export default ActionMenu;
