import React,{FC} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  path: string;
}

interface NavLinksProps {
  navClick?: () => void;
}

const NavLinks:FC<NavLinksProps> = ({ navClick }) => {
  const navlinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const pathname = usePathname();

  return (
    <ul className="menu menu-vertical lg:menu-horizontal pt-5 lg:pt-0 px-0 lg:px-5 gap-5">
      {navlinks.map((link, index) => (
        <li key={index}>
          <Link
            className={`btn btn-link no-underline font-normal text-nav-link hover:no-underline py-6 h-auto lg:py-2 ${
              pathname === link.path ? 'active-link' : ''
            }`}
            href={link.path}
            onClick={navClick}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;