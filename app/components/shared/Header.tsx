import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { BsHouse } from 'react-icons/bs';

interface BreadcrumbItem {
  title: ReactNode;
  link: string;
}

interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  headerTitle: ReactNode;
  headerSubtitle: string;
}

const Header: FC<HeaderProps> = ({ breadcrumbs, headerTitle, headerSubtitle }) => {
  return (
    <div className="card bg-footer-bg text-neutral-content mt-5 mb-14">
      <div className="card-body items-center text-center">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href='/' className='text-grey flex gap-1'>
                <BsHouse />
                Home
              </Link>
            </li>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                <Link href={breadcrumb.link} className='text-black'>
                  {breadcrumb.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-3xl text-black mb-2">
          {headerTitle}
        </h2>
        <p className='text-black'>{headerSubtitle}</p>
      </div>
    </div>
  );
}

export default Header;