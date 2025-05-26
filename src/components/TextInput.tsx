interface TextInputProps {
  label: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
}

export default function TextInput({ label, required, type = "text", defaultValue }: TextInputProps) {
  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="mb-1.5 space-x-1 text-xs flex font-medium text-gray-700">
        <p>{label}</p> {required && <p className="inline text-red-500">*</p>}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-xs placeholder:text-gray-400 focus:border-indigo-300 focus:outline-none focus:ring-3 focus:ring-indigo-500/10"
      />
    </div>
  );
}
