import React from "react";
import Header from "../ui/header";
import Sidebar from "../ui/sidebar";

const Layout = ({ children }: {children: any}) => {
  return (
    <React.Fragment>
      <Header />
      <div className="grid grid-cols-6 gap-4">
        <div className="min-h-screen p-2 bg-gray-800">
          <Sidebar />
        </div>
        <div className="col-span-5 min-h-screen p-2 ">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
