import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { BsHouse } from "react-icons/bs";

interface BreadcrumbItem {
  title: ReactNode;
  link: string;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs text-sm my-5 hidden md:inline-flex px-8 xl:px-0">
      <ul>
        <li>
          <Link href="/" className="text-grey flex gap-1">
            <BsHouse />
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <Link href={breadcrumb.link} className="text-black">
              {breadcrumb.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
