import { useState } from "react";
import { useNavigate, useLocation, NavigateFunction } from "react-router";
import {
  Bars3Icon,
  HomeIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import ThemeButton from "./ThemeButton";

interface IPath {
  name: string;
  path: string;
  icon: JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar(props: any) {
  const paths = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon className="w-6 h-6 p-0 m-0" />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <ClipboardDocumentListIcon className="w-6 h-6 p-0 m-0" />,
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const [pathname] = useState(location.pathname);

  return (
    <>
      <div className="flex h-screen bg-blue-100 dark:bg-gray-900">
        <div className="h-full rounded-b-sm flex gap-2">
          <div className="h-full hidden sm:flex items-center">
            {/* Desktop*/}
            {renderPaths(paths, navigate, pathname)}
          </div>
        </div>
        <div className="w-full h-full p-2">
          {/* Mobile*/}
          {renderDrawer(paths, navigate, pathname)}
          {props.children}
        </div>
      </div>
    </>
  );
}

function renderDrawer(
  paths: Array<IPath>,
  navigate: NavigateFunction,
  pathname: string
) {
  return (
    <>
      <div className="drawer sm:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <Bars3Icon className="w-12 h-12" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="sm:hidden flex justify-center h-full p-4 w-80 min-h-full bg-base-200 text-base-content">
            {renderPaths(paths, navigate, pathname)}
          </div>
        </div>
      </div>
    </>
  );
}

function renderPaths(
  paths: Array<IPath>,
  navigate: NavigateFunction,
  pathname: string
) {
  return (
    <>
      <ul className="menu p-4 h-fit w-full">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center justify-center">
            <button
              onClick={() => {
                navigate(path.path);
              }}
              className="btn rounded-none border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 h-fit w-full md:w-20"
            >
              <div
                className={`flex flex-col gap-1 items-center p-2 ${pathname == path.path ? "text-blue-500" : ""}`}
              >
                {path.icon}
                <p className="text-xs">{path.name}</p>
              </div>
            </button>
          </li>
        ))}
        <div className="p-2">
          <ThemeButton />
        </div>
      </ul>
    </>
  );
}
