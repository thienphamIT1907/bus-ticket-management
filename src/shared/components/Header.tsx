import { Logo } from '@/shared/components/core/Logo';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-50 w-full bg-[#c35959] px-60 text-white">
      <div className="container mx-auto flex max-w-4xl items-center justify-between py-4">
        <Flex className="text-2xl font-medium" align="center" gap={10}>
          <Logo className="size-7 text-white" />
          <Link to="/">CS447Bus</Link>
        </Flex>

        {/* Hamburger Menu (Mobile) */}
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block text-white focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </Button>

        {/* Navigation Menu */}
        {/*<nav*/}
        {/*  className={`${*/}
        {/*    isMenuOpen ? 'block' : 'hidden'*/}
        {/*  } items-center space-x-6 md:flex`}*/}
        {/*>*/}
        {/*  <ul className="flex flex-col text-center md:flex-row md:space-x-6">*/}
        {/*    <li>*/}
        {/*      <a*/}
        {/*        href="#home"*/}
        {/*        className="block py-2 transition duration-200 hover:text-yellow-300"*/}
        {/*      >*/}
        {/*        Home*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a*/}
        {/*        href="#routes"*/}
        {/*        className="block py-2 transition duration-200 hover:text-yellow-300"*/}
        {/*      >*/}
        {/*        Routes*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a*/}
        {/*        href="#bookings"*/}
        {/*        className="block py-2 transition duration-200 hover:text-yellow-300"*/}
        {/*      >*/}
        {/*        Book Tickets*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a*/}
        {/*        href="#contact"*/}
        {/*        className="block py-2 transition duration-200 hover:text-yellow-300"*/}
        {/*      >*/}
        {/*        Contact Us*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</nav>*/}

        {/* User Options */}
        {/*<div*/}
        {/*  className={`${*/}
        {/*    isMenuOpen ? 'block' : 'hidden'*/}
        {/*  } items-center space-y-4 md:flex md:space-x-4 md:space-y-0`}*/}
        {/*>*/}
        {/*  <a*/}
        {/*    href="#login"*/}
        {/*    className="block rounded-md bg-white px-4 py-2 text-center text-blue-600 transition duration-200 hover:bg-gray-200"*/}
        {/*  >*/}
        {/*    Login*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="#signup"*/}
        {/*    className="block rounded-md bg-yellow-500 px-4 py-2 text-center text-white transition duration-200 hover:bg-yellow-400"*/}
        {/*  >*/}
        {/*    Sign Up*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};
