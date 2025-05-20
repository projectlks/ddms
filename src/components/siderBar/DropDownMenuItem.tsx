import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  icon: React.ReactNode;
  isShow: boolean;
  isActive: boolean;
  clickFun: (item: string) => void;
  subMenus: { label: string; route: string }[];
}

export default function MenuItem({
  name,
  icon,
  isShow,
  isActive,
  clickFun,
  subMenus = [],
}: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    clickFun(name);
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <div
        onClick={handleItemClick}
        aria-expanded={isOpen}
        className={`flex items-center p-2 rounded-md cursor-pointer transition-all relative
        ${isShow ? 'space-x-3 justify-start' : 'justify-center space-x-0'}
        ${isActive ? 'bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600' : 'hover:bg-gray-100'}`}
      >
        {icon}
        <span className={`text-sm font-medium ${isShow ? 'block' : 'hidden'}`}>{name}</span>

        <i className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110 ${isShow ? 'block' : 'hidden'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </i>
      </div>

      {/* Submenu */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out relative
          ${isOpen && isShow ? 'max-h-fit mt-2 pl-9' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col space-y-2">




          {subMenus.map((subMenu, index) => (
            <Link to={subMenu.route} key={index} className="w-full">
              <li className="flex items-center p-2 rounded-md cursor-pointer transition-colors duration-200 relative hover:bg-gray-200">
                <span className="text-sm font-medium w-[calc(100%-20px)] ">{subMenu.label}</span>


                <span className="w-5 h-5 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  0
                </span>
              </li>
            </Link>
          ))}
        </ul>


        {/* line */}

        <div className="absolute w-[1px] h-full  bg-gray-300 top-0 left-3 "></div>
      </div>
    </li>
  );
}


