import Link from "next/link";
import { useState, useEffect } from "react";
import { Transition, Disclosure } from "@headlessui/react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Service", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  const handelScroll = () => {
    console.log("asdfsadfsadfsadfsadfsadf");
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <Disclosure
      as="nav"
      className={classNames(
        navbar ? "fixed top-0 bg-white transition-all" : "",
        "w-full fixed bg-white md:bg-transparent"
      )}
    >
      <div className="w-full">
        <div className="flex items-center h-20">
          <div className="flex items items-center justify-around w-full">
            <div>
              <h1 className="color-white">
                <span className="text-[#ffc209] text-[20px] sm:text-[28px] font-extrabold">
                  Zubaid
                </span>
                <span className="text-[#ffc209] text-[20px] sm:text-[28px] font-extrabold">
                  {" "}
                  Rasool
                </span>
              </h1>
            </div>
            <div className="flex items-basline space-x-4">
              {navigation.map((item) => (
                <a href={item.href}>
                  <div
                    className={
                      navbar
                        ? " hidden md:block tracking-wide cursor-pointer font-semibold text-1.3xl text-[#333]"
                        : "hidden md:block tracking-wide cursor-pointer font-semibold text-1.3xl text-[#fff]"
                    }
                  >
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mx-4  md:hidden "
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12 "
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Disclosure.Panel className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  "text-[#333] hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};
