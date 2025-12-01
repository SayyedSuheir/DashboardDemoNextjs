"use client";

import Link from "next/link";
import Image from "next/image";

export default function SideNav() {
  return (
    <nav className="menu" tabIndex="0">
      <header className="avatar">
        <div className="avatar-img">
          <Image src="/user-default.png" alt="profile" width={100} height={100} />
        </div>
        <div className="avatar-username">
          <h2>John D.</h2>
        </div>
      </header>

      <ul className="sidenav-container">
        <li className="icon-dashboard">
          <span>Home</span>
        </li>
        <li className="icon-process">
          <span>Process</span>
        </li>
        <li className="icon-inventory">
          <span>Inventory</span>
        </li>
      </ul>

      <div className="sidenav-footer">
        <Link href="/">
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
