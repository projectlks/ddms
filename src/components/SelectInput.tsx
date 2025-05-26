interface SelectInputProps {
  label: string;
  required?: boolean;
  options: string[];
}

export default function SelectInput({ label, required, options }: SelectInputProps) {
  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="mb-1.5 space-x-1 text-xs flex font-medium text-gray-700">
        <p>{label}</p> {required && <p className="inline text-red-500">*</p>}
      </label>

      <div className="relative">


        <select
          className="z-20 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-300/50"
        >
          {options.map((item, index) => (
            <option key={index} value={item} className="text-gray-800">
              {item}
            </option>
          ))}

        </select>
        <i className="absolute top-1/2 right-3 transform -translate-1/2">


          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </i>
      </div>

    </div>
  );
}
