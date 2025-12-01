"use client";

import SideNav from "@/components/sidenav/SideNav";
import Cards from "@/components/cards/Cards";

export default function DashboardHomepage() {
  return (
    <div className="dashboard-home">
      <div className="dashboard-header">
        <h1>The Dashboard</h1>
      </div>
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="cards-div">
        <Cards />
      </div>
    </div>
  );
}
