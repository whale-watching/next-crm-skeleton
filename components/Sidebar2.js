import classNames from "classnames";
import Link from "next/link";
import {
  CogIcon,
  HomeIcon,
  ChatIcon,
  ChartPieIcon,
  UserIcon,
  DesktopComputerIcon,
  XCircleIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../context/ContextProvider";

function Sidebar2() {
  const menuItems = [
    { id: 1, label: "Overview", icon: HomeIcon, link: "/" },
    { id: 2, label: "Apps", icon: DesktopComputerIcon, link: "/apps" },
    { id: 3, label: "Chat", icon: ChatIcon, link: "/chat" },
    { id: 4, label: "Charts", icon: ChartPieIcon, link: "/charts" },
    { id: 5, label: "Profile", icon: UserIcon, link: "/profile" },
    { id: 6, label: "Settings", icon: CogIcon, link: "/settings" },
  ];
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className=" px-10 pt-8 shadow bg-white flex justify-between flex-col h-screen md:overflow-hidden scrollbar-hide scroll-smooth overflow-auto md:hover:overflow-auto pb-10 ease-in-out duration-300">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href={"/"}
              onClick={() => setActiveMenu(false)}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
            >
              <span>ERM Dashboard</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <XCircleIcon
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className={`absolute ml-8 items-center h-5 w-5 hover:text-red-600 cursor-pointer ease-in-out duration-300 ${
                  setActiveMenu ? "translate-x-0" : "translate-x-full"
                }`}
              />
            </TooltipComponent>
          </div>
          <div className="mt-5">
            {menuItems.map(({ icon: Icon, ...item }) => (
              <Link
                href={item.link}
                key={item.id}
                onClick={() => {}}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <a className="flex items-center py-4 px-3 w-full">
                  <div style={{ width: "1.5rem" }}>
                    <Icon />
                  </div>

                  <span className="text-gray-400 m-3 mt-4 uppercase">
                    {item.label}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar2;
