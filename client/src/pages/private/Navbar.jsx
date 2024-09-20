import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { PiBooks } from "react-icons/pi";
import { BiLogInCircle } from "react-icons/bi";
import Button from "../../components/Button";

import { useLoader } from "../../contexts/LoaderContext";
import { useAuth } from "../../contexts/AuthContext";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const { logout, isAuthenticated } = useAuth();
  const { setLoader, loader } = useLoader()
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      setLoader({ ...loader, isLoading: true });
      await logout();
      navigate('/login', { replace: true });
    } catch (error) {

    } finally {
      setLoader({ ...loader, isLoading: false });
    }
  }
  return (
    <>
      <div className="sticky bg-white z-10 top-0 ">
        <div className="w-full mx-auto px-4 sm:px-6 border-b-2 border-gray-10">
          <div className="flex justify-between items-center 0 py-3 md:justify-start md:space-x-10 max-w-7xl mx-auto">
            <div className="flex justify-star items-center lg:w-0 lg:flex-1 gap-12">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
              {
                isAuthenticated && (
                  <nav className="hidden md:flex space-x-10 justify-start items-center">

                    <a
                      href="/topics"
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Topics
                    </a>

                  </nav>
                )
              }
            </div>
            {isAuthenticated && (
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            )}
            {isAuthenticated && (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Button
                  rightIcon={
                    <BiLogOutCircle
                      className='w-6 h-6 text-pink-100' />}
                  label="Logout"
                  onClick={() => handleLogout()}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-700"
                />
              </div>
            )}
            {!isAuthenticated && (
              <div className="hidden- md:flex items-center justify-end md:flex-1 lg:w-0">
                <Button
                  rightIcon={
                    <BiLogInCircle
                      className='w-6 h-6 text-pink-100' />}
                  label="login"
                  onClick={() => navigate('/login', { replace: true })}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-700"
                />
              </div>
            )}
          </div>
        </div>
        {/** Mobile Nav */}
        {isAuthenticated && (
          <div
            className={
              open
                ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="/topics"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <PiBooks className="w-6 h-6" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Topics
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="w-full">
                  <Button
                    rightIcon={
                      <BiLogOutCircle
                        className='w-6 h-6 text-pink-100' />}
                    label="Logout"
                    onClick={() => handleLogout()}
                    className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-pink-500 hover:bg-pink-700 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
