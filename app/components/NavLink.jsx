import Link from "next/link";

const NavLink = ({ href, title, external }) => {
  if (external) {
    return (
      <a
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white"
        aria-current="page"
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer" // Security best practices for external links
      >
        {title}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white"
        aria-current="page"
      >
        {title}
      </Link>
    );
  }
};

export default NavLink;
