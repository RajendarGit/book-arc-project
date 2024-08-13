import React, { FC, ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';

interface BreadcrumbItem {
  title: ReactNode;
  link: string;
}

interface HeaderProps {
  headerTitle: ReactNode;
  headerSubtitle: string;
  breadcrumbs: BreadcrumbItem[];
}

const Header: FC<HeaderProps> = ({ headerTitle, headerSubtitle, breadcrumbs }) => {
  return (
    <div className="card bg-footer-bg text-neutral-content mt-5 mb-14">
      <div className="card-body items-center text-center">
        <Breadcrumbs breadcrumbs={breadcrumbs} /> {/* Pass breadcrumbs here */}
        <h2 className="text-3xl text-black mb-2">
          {headerTitle}
        </h2>
        <p className='text-black'>{headerSubtitle}</p>
      </div>
    </div>
  );
}

export default Header;