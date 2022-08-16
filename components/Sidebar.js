import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  CogIcon,
  HomeIcon,
  ChatAlt2Icon,
  ChartPieIcon,
  UserIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  DocumentReportIcon,
  CalendarIcon,
  PencilAltIcon,
  ClipboardListIcon,
  LogoutIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const links = [
  { title: "Dashboard", links: [{ name: "overview", icon: <HomeIcon /> }] },
  {
    title: "Apps",
    links: [
      { name: "calendar", icon: <CalendarIcon /> },
      { name: "kanban", icon: <ClipboardListIcon/> },
      { name: "editor", icon: <PencilAltIcon/> },
    ],
  },
  { title: "Chat", links: [{ name: "messages", icon: <ChatAlt2Icon /> }] },
  {
    title: "Charts",
    links: [
      { name: "line", icon: <PresentationChartLineIcon /> },
      { name: "bar", icon: <ChartBarIcon /> },
      { name: "pie", icon: <ChartPieIcon /> },
      { name: "financial", icon: <DocumentReportIcon /> },
    ],
  },
  { title: "Profile", links: [{ name: "profile", icon: <UserIcon /> }] },
  { title: "Settings", links: [{ name: "settings", icon: <CogIcon /> }] },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => links.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col md:overflow-hidden scrollbar-hide scroll-smooth overflow-auto md:hover:overflow-auto",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap"
    );
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              ERP Dashboard
            </span>
          </div>

          <button className={collapseIconClasses} onClick={handleSidebarToggle}>
            <MenuIcon className="cursor-pointer flex items-center mr-3 h-6 sm:h-9" />
          </button>
        </div>

        <div className="flex flex-col items-start mt-24">
          {links.map((item) => (
            <div key={item.title}>
              {!toggleCollapse && (
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
              )}
              <ul>
                {item.links.map((link) => (
                  // eslint-disable-next-line react/jsx-key
                  <li>
                    <a
                      href={`/${link.name}`}
                      className="flex items-center py-4 px-3 w-full"
                    >
                      <div style={{ width: "1.5rem" }} className="mr-2">
                        {link.icon}
                      </div>
                      {!toggleCollapse && (
                        <span className="capitalize ">{link.name}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "1.5rem" }} className="mr-2">
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
