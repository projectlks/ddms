import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { useParams } from 'react-router-dom';
import ProfileImageUpload from "./ProfileImageUpload";


const onChangePassword = () => alert("Change Password clicked");

export default function ProfileUpdate() {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };
    const { id } = useParams<{ id: string }>();

    return (
        <>


            <Breadcrumb
                crumbs={[
                    { label: 'မူလစာမျက်နှာ', to: '/' },
                    { label: 'ကိုယ်ရေးအကျဉ်း', to: '/profile' },
                    { label: 'ပြုပြင်မည်' }, // No `to` means it's the current page
                ]}
            />

            <section className="mt-5 h-[calc(100vh-140px)] bg-white">
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
                        <p className="text-sm">အသုံးပြုသူ ကိုပြု ပြင်မည် {id}</p>
                    </div>

                    {/* account management */}
                    <div className="col-span-2 space-x-3 flex">
                        <button
                            onClick={onChangePassword}
                            className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 bg-white hover:bg-gray-100"
                        >
                            အသုံးပြုသူ များကိုစီမံမည်
                        </button>

                        <button
                            onClick={onChangePassword}
                            className="mt-2 cursor-pointer text-sm border border-gray-300 rounded px-4 py-2 bg-white hover:bg-gray-100"
                        >
                            အသုံးပြုသူ စာရင်း
                        </button>
                    </div>
                </div>

                <div className="min-h-[calc(100%-80px)] bg-white py-[100px] flex items-center justify-center  ">
                    <form className="flex flex-col space-y-5 max-w-xl w-[90%]  not-only-of-type:">

                        <p>
                            <span className="inline text-red-500 mr-1">*</span>
                            ပါသောကွက်လပ်များကို ဖြည့်ရန်လိုအပ်သည်။
                        </p>


                        {/* Upload File */}
                        {/* <div>


                            <div className="mb-5">

                                {
                                    preview ? <img
                                        src={preview}
                                        alt="Preview"
                                        className="h-32 w-32 object-cover rounded-full border border-gray-300"
                                    /> :
                                        <span className="flex justify-center items-center h-32 w-32 border border-gray-300 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-10 w-10 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5H4.5"
                                                />
                                            </svg>
                                        </span>
                                }

                            </div>

                            <label className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-400">
                                အသုံးပြုသူဓာတ်ပုံ
                            </label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="focus:border-ring-brand-300 shadow-theme-xs focus:file:ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pr-3 file:pl-3.5 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900"
                            />



                        </div> */}

                        <ProfileImageUpload preview={preview} handleFileChange={handleFileChange} />

                        {/* Name */}

                        <TextInput label="အမည်" required={true} defaultValue="admin" type={"text"} />


                        {/* Username */}


                        <TextInput label="အသုံးပြုသူအမည်" required={true} defaultValue="admin" type={"text"} />

                        {/* password */}

                        <TextInput label="စကားဝှက်" required={true} defaultValue="passwordisadmin@pimjo.com" type={"password"} />


                        {/* Email */}


                        <TextInput label="အီးမေးလ်" required={true} defaultValue="randomuser@pimjo.com" type={"email"} />

                        {/* Status */}
                        <SelectInput
                            label="အဆင့်"
                            required={true}
                            options={['အသစ်', 'အတည်ပြုထားသည်', 'ပိတ်ထားသည်']}
                        />

                        {/* Role */}
                        <SelectInput
                            label="Role"
                            required={false}
                            options={['Admin', 'Editor', 'Viewer']}
                        />

                        {/* Office */}
                        <SelectInput
                            label="Office"
                            required={false}
                            options={['ရန်ကုန်ရုံးခွဲ', 'နေပြည်တော်ရုံးခွဲ', 'မန္တလေးရုံးခွဲ']}
                        />

                        <button
                            type="button"
                            className="flex w-fit justify-center rounded-lg  px-4 py-2.5 text-sm font-medium text-white bg-blue-500"
                        >
                            သီမ်းဆည်းမည်
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
