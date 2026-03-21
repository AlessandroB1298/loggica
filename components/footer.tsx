"use client";
import { LoggicaIcon } from "@/lib/icons/loggica-icon";

function Footer2() {
  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Solution", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Help", href: "#" },
    { name: "About", href: "#" },
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      href: "#",
      svg: (
        <svg
          className="size-6 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Github",
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="size-6 transition-transform duration-200 hover:scale-110"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-10 border-t px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-6 gap-2 flex items-center justify-center">
          <LoggicaIcon />
          <span className="text-gray-900 dark:text-white text-3xl font-extrabold tracking-wide">
            LOGGICA
          </span>
        </div>

        <nav className="mb-6 w-full">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Loggica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer2;
