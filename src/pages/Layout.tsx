import { Outlet } from "react-router-dom";
import SideBar from "../components/siderBar/SideBar";
import Header from "../components/header/Header";
import { useState } from "react";

export default function Layout() {

  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <section className="flex  ">
      <nav className="z-20">
        <SideBar isShow={isShow} setIsShow={setIsShow} />
        {/* Add your sidebar content here */}
      </nav>

      <div className="flex-1 z-10">
        <Header isShow={isShow} setIsShow={setIsShow} />

        <main className=" p-5 bg-gray-100  h-[calc(100vh-60px)]  ">


     

          <div className=" h-full overflow-y-auto   ">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
}
