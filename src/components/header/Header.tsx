import Profile from "./Profile";

interface HeaderProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

export default function Header({ isShow, setIsShow }: HeaderProps) {
  return (
    <div className="w-full py-2 bg-white text-gray-800 flex items-center justify-between px-8 relative">
      <h1 className="text-lg hidden xl:block font-bold">My App</h1>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsShow(!isShow)}
        className="xl:hidden w-10 aspect-square flex items-center justify-center cursor-pointer rounded"
        aria-label="Toggle menu"
      >
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </button>

      {/* search */}

      <div className="hidden xl:flex items-center space-x-2">
        <input
          type="text"
          placeholder="ရှာဖွေမည်"
          aria-label="Search"
          className="px-4 py-2 w-[400px] text-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

        </button>
      </div>

      {/* Profile */}

      <Profile />

      {/*  */}
    </div>
  );
}
