// import { useState } from "react";

interface Props {
  preview: string | null
  handleFileChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ProfileImageUpload({ preview,  handleFileChange  }: Props) {



  return (
    <div>


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



    </div>
  );
}
