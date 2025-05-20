
interface MenuItemProps {
  name: string;
  icon: React.ReactNode;
  isShow: boolean;
  isActive: boolean;
  clickFun: (item: string) => void;
}

export default function MenuItem({
  name,
  icon,
  isShow,
  isActive,
  clickFun,
}: MenuItemProps) {


  const handleItemClick = () => {
    clickFun(name);

  };

  return (
    <li className="relative">
      <div
        onClick={handleItemClick}

        className={`flex items-center p-2 rounded-md cursor-pointer transition-all relative
        ${isShow ? 'space-x-3 justify-start' : 'justify-center space-x-0'}
        ${isActive ? 'bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600' : 'hover:bg-gray-100'}`}
      >
        {icon}
        <span className={`text-sm font-medium ${isShow ? 'block' : 'hidden'}`}>{name}</span>

      </div>


    </li>
  );
}
