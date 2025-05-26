import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ActionMenu from "../../components/ActionMenus";
import { sampleUsers, type User } from "./usersArray"
import { useRef, useEffect } from "react";










export default function Profile() {

    const users: User[] = sampleUsers
    const [sortField, setSortField] = useState<keyof User | null>(null)
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")


    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const [filterValue, setFilterValue] = useState<string>("")


    const [openSearchValueDropdown, setOpenSearchValueDropdown] = useState<boolean>(false)
    const [searchOptionValue, setSearchOptionValue] = useState<string>('username')
    const [searchValue, setSearchValue] = useState<string>('')



    const filterRef = useRef<HTMLDivElement | null>(null);
    // const ref={searchRef}

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setOpenFilter(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleSort = (field: keyof User) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortField(field)
            setSortDirection("asc")
        }
    }

    const sortedUsers = [...users].sort((a, b) => {
        if (!sortField) return 0

        const aValue = a[sortField]
        const bValue = b[sortField]

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
        return 0
    })

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-GB")
    }

    const formatDateTime = (dateTimeString: string) => {
        const date = new Date(dateTimeString)
        return date.toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        })
    }


    const Array = filterValue ? sortedUsers.filter(ary => (ary.status.toLocaleLowerCase() === filterValue.toLocaleLowerCase())) : sortedUsers

    const finalArray = Array.filter(items => (items[searchOptionValue === "username" ? "username" : "email"].toLowerCase().includes(searchValue.toLowerCase()))
    )





    return (


        <>
            <Breadcrumb
                crumbs={[
                    { label: 'မူလစာမျက်နှာ', to: '/' },
                    { label: 'အသုံးပြုသူများ' },

                ]}
            />






            <section className=" mt-5 bg-white  ">
                {/* Header */}
                <div className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-300">
                    <div className="space-x-1 flex items-center">
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
                        <p className="text-sm">အသုံးပြုသူ စာရင်း</p>
                    </div>

                    {/* Search Box */}
                    <div className="hidden xl:flex relative items-center space-x-2">



                        {filterValue && (<div className="w-fit px-4  text-xs  flex  items-center border h-7 border-gray-300 rounded "> <p>{filterValue}</p></div>)}

                        <div className="relative">
                            <input
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                type="text"
                                placeholder={`${searchOptionValue === "username" ? "အသုံးပြုသူ အမည်" : "အီးမေလ်"}ဖြင့် ရှာဖွေပါ`}

                                className="px-4 py-2 w-[400px] text-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                            />
                            <i
                                className="absolute top-1/2 right-0 h-8 w-8 border-l border-gray-200 flex justify-center items-center transform -translate-y-1/2 cursor-pointer"
                                onClick={() =>
                                    setOpenSearchValueDropdown(!openSearchValueDropdown)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </i>

                            {openSearchValueDropdown && (
                                <div className="absolute right-0 top-full mt-1 text-xs bg-white border border-gray-300 rounded shadow-sm p-1 flex flex-col space-y-1 z-10">
                                    {["username", "email"].map((label) => (
                                        <span
                                            key={label}
                                            onClick={() => {
                                                setSearchOptionValue(label);
                                                setOpenSearchValueDropdown(false);
                                            }}
                                            className="flex justify-start items-center cursor-pointer w-[140px] px-3 py-1 hover:bg-gray-100 select-none"
                                        >
                                            {label === "username" ? "အသုံးပြုသူ အမည်" : "အီးမေလ်"}

                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Filter */}
                        <div ref={filterRef} className="relative">
                            <button
                                onClick={() => setOpenFilter(!openFilter)}
                                className="border border-gray-300 h-9 cursor-pointer p-2 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                                    />
                                </svg>
                            </button>

                            {openFilter && (
                                <div className="absolute right-0 top-full mt-1 text-xs bg-white border border-gray-300 rounded shadow-sm p-1 flex flex-col space-y-1 z-10">
                                    {["", "Active", "Not Active", "Banned"].map((label) => (
                                        <span
                                            key={label}
                                            onClick={() => {
                                                setFilterValue(label);
                                                setOpenFilter(false);
                                            }}
                                            className="flex justify-start items-center h-6 cursor-pointer w-[120px] px-3 py-1 hover:bg-gray-100 select-none"
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="bg-cyan-600 h-9 text-white cursor-pointer py-2 px-5 rounded-md">
                            Search
                        </button>
                    </div>
                </div>



                {/* Main  */}
                <div className=" mx-auto  p-8 space-y-8">





                    {/* Table Container */}
                    <div className="bg-white rounded-lg  overflow-hidden">
                        <div className="overflow-x-auto pb-[100px] "  >
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSort("username")}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>အသုံးပြုသူအမည်</span>
                                                {sortField === "username" && (
                                                    <svg
                                                        className={`w-4 h-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </th>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSort("username")}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>အီးမေးလ်</span>
                                                {sortField === "username" && (
                                                    <svg
                                                        className={`w-4 h-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </th>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSort("registrationDate")}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>မှတ်ပုံတင်သည့်နေ့စွဲ</span>
                                                {sortField === "registrationDate" && (
                                                    <svg
                                                        className={`w-4 h-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </th>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSort("lastLogin")}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>နောက်ဆုံးဝင်ရောက်ချိန်</span>
                                                {sortField === "lastLogin" && (
                                                    <svg
                                                        className={`w-4 h-4 ${sortDirection === "asc" ? "transform rotate-180" : ""}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            အခြေအနေ
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {finalArray.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">


                                                <div className="text-sm font-medium text-gray-900">{user.username}</div>


                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {formatDate(user.registrationDate)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {formatDateTime(user.lastLogin)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                        }`}
                                                >
                                                    {/* {user.status === "active" ? "အသုံးပြုနေသည်" : "အသုံးမပြုတော့ပါ"} */}

                                                    {user.status}
                                                </span>
                                            </td>

                                            <ActionMenu  id= {user.id} />


                                        </tr>
                                    ))}
                                </tbody>
                            </table >
                        </div >
                    </div >

                    {/* Table Footer */}
                    <div className="bg-white px-6 py-3 border-t border-gray-200 rounded-b-lg" >
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-700">
                                စုစုပေါင်း <span className="font-medium">{finalArray.length}</span> ယောက်
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50" disabled>
                                    ယခင်
                                </button>
                                <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</span>
                                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50" disabled>
                                    နောက်
                                </button>
                            </div>
                        </div>
                    </div >
                </div >


            </section >
        </>
    );
}
