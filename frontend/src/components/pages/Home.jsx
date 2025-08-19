import React from 'react'
import MainHeader from '../elements/headers/MainHeader'
import { Link } from 'react-router-dom'
import Management from "../../assets/images/management.png";
import Operations from "../../assets/images/operations.png";
import Recruitment from "../../assets/images/recruitment.png";
import Workspace from "../../assets/images/workspace.png";
import Employers from "../../assets/images/employers.png";
import Partners from "../../assets/images/partners.png";
import Jobseeker from "../../assets/images/jobseekers.png";
import Admin from "../../assets/images/admin.png";
const Home = () => {
    const cards = [
    { title: "DK GLOBAL MANAGEMENT", color: "bg-[#9d265c]", icon: Management , url: "#/management/login" },
    { title: "DK GLOBAL OPERATIONS", color: "bg-[#066]", icon: Operations, url: "#/operations/login" },
    { title: "DK GLOBAL RECRUITMENT", color: "bg-[#2b8faf]", icon: Recruitment, url: "/recruitment/login" },
    { title: "DK GLOBAL WORKSPACE", color: "bg-[linear-gradient(135deg,#667eea,#764ba2)]", icon: Workspace , url: "#/workspace/login"},
    { title: "EMPLOYERS ACCOUNT", color: "bg-[#523e5b]", icon: Employers , url: "#/emp-account/login" },
    { title: "PARTNERS ACCOUNT", color: "bg-[#00506e]", icon: Partners, url: "#/partners-acc/login" },
    { title: "JOBSEEKERS ACCOUNT", color: "bg-[#3b4a51]", icon: Jobseeker, url: "#/jobseeker-acc/login" },
    { title: "ADMINISTRATION", color: "bg-[#2c3e50]", icon: Admin, url: "#/administration/login" },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <MainHeader />
     <main className='w-full flex justify-center items-center h-[calc(100vh-65px)] scroll-auto'>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4">
        {cards.map((card, index) => (
          <Link
          to={`${card.url}`}
            key={index}
            className={`${card.color} text-white p-8 rounded-lg shadow-lg flex flex-col items-center transition hover:scale-105 duration-500`}
          >
            {/* Circle Icon */}
            <div className="bg-white/20 w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow">
              <img src={card.icon} alt="icon" className="w-12 h-12" />
            </div>

            {/* Button */}
            <button className="border border-white/70 px-2 py-2 rounded-md hover:bg-white hover:text-black transition">
              {card.title}
            </button>
          </Link>
        ))}
      </main>
     </main>
    </div>
  )
}

export default Home