import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ActionMenu from "../components/ActionMenus";

const onChangePassword = () => alert("Change Password clicked");

interface User {
    id: number;
    username: string;
    registrationDate: string;
    lastLogin: string;
    status: "active" | "inactive";
}

const sampleUsers: User[] = [
    {
        id: 1,
        username: "admin@ddms.com",
        registrationDate: "2024-01-15",
        lastLogin: "2024-01-24 09:30:00",
        status: "active",
    },
    {
        id: 2,
        username: "user1@company.com",
        registrationDate: "2024-01-18",
        lastLogin: "2024-01-23 14:45:00",
        status: "active",
    },
    {
        id: 3,
        username: "manager@ddms.com",
        registrationDate: "2024-01-10",
        lastLogin: "2024-01-24 08:15:00",
        status: "active",
    },
    {
        id: 4,
        username: "staff@company.com",
        registrationDate: "2024-01-20",
        lastLogin: "2024-01-22 16:20:00",
        status: "inactive",
    },
    {
        id: 5,
        username: "supervisor@ddms.com",
        registrationDate: "2024-01-12",
        lastLogin: "2024-01-24 10:00:00",
        status: "active",
    },
    {
        id: 6,
        username: "supervisor@ddms.com",
        registrationDate: "2024-01-12",
        lastLogin: "2024-01-24 10:00:00",
        status: "active",
    },
    {
        id: 7,
        username: "supervisor@ddms.com",
        registrationDate: "2024-01-12",
        lastLogin: "2024-01-24 10:00:00",
        status: "active",
    },
    {
        id: 8,
        username: "supervisor@ddms.com",
        registrationDate: "2024-01-12",
        lastLogin: "2024-01-24 10:00:00",
        status: "active",
    },
];

export default function Profile() {
    const [users] = useState<User[]>(sampleUsers);
    const [sortField, setSortField] = useState<keyof User | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const handleSort = (field: keyof User) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const sortedUsers = [...users].sort((a, b) => {
        if (!sortField) return 0;
        const aValue = a[sortField];
        const bValue = b[sortField];
        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB");
    };

    const formatDateTime = (dateTimeString: string) => {
        const date = new Date(dateTimeString);
        return date.toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <>
            <Breadcrumb
                crumbs={[
                    { label: "မူလစာမျက်နှာ", to: "/" },
                    { label: "အသုံးပြုသူများ" },
                ]}
            />

            <section className="mt-5 bg-white">
                {/* Header */}
                <div className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-300">
                    <div className="space-x-1 flex">
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
                    {/* account management */}
                    <div className="col-span-2 space-x-3 flex">
                        <button
                            onClick={onChangePassword}
                            className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 bg-white hover:bg-gray-100"
                        >
                            အသုံးပြုသူ များကိုစီမံမည်
                        </button>
                    </div>
                </div>

                {/* Main */}
                <div className="mx-auto p-8 space-y-8">
                    {/* Table Container */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="overflow-x-auto pb-[100px]">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            #
                                        </th>
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
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
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
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
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
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            အခြေအနေ
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            လုပ်ဆောင်ချက်များ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {sortedUsers.map((user, index) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                            <svg
                                                                className="h-6 w-6 text-blue-600"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {user.username}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {formatDate(user.registrationDate)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {formatDateTime(user.lastLogin)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        user.status === "active"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-red-100 text-red-800"
                                                    }`}
                                                >
                                                    {user.status === "active"
                                                        ? "အသုံးပြုနေသည်"
                                                        : "အသုံးမပြုတော့ပါ"}
                                                </span>
                                            </td>
                                            <ActionMenu />
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table Footer */}
                    <div className="bg-white px-6 py-3 border-t border-gray-200 rounded-b-lg">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-700">
                                စုစုပေါင်း <span className="font-medium">{users.length}</span> ယောက်
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                    disabled
                                >
                                    ယခင်
                                </button>
                                <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
                                    1
                                </span>
                                <button
                                    className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                    disabled
                                >
                                    နောက်
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}