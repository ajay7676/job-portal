import React from "react";
import DKGCRM from '../../../assets/images/dkgcrm.png'


const MainHeader = () => {
  return (
    <header className="w-full flex justify-between items-center shadow-sm px-4 py-2.5 border-none">
     {/* <header  className="fixed top-0 left-0 w-full z-[999] bg-white border-b border-gray-300 shadow-sm px-4" > */}
      <div className="w-40">
      <img src={DKGCRM} className="w-full" alt="DKG CRM LOGO" />
      </div>   
      <h1 className="text-xl font-bold">DK GLOBAL CRM</h1>
      <button className="px-4 py-2 bg-sky-600 text-white rounded-md shadow">
        LOGINS FAQ
      </button>
    </header>
  );
};

export default MainHeader;
