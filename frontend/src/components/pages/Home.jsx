import React from 'react'
import MainHeader from '../elements/headers/MainHeader'

const Home = () => {
    const cards = [
    { title: "DK GLOBAL AI ASSIST", color: "bg-purple-700", icon: "🤖" },
    { title: "DK GLOBAL MANAGEMENT", color: "bg-teal-700", icon: "🧑‍💻" },
    { title: "DK GLOBAL OPERATIONS", color: "bg-sky-600", icon: "⚙️" },
    { title: "DK GLOBAL RECRUITMENT", color: "bg-sky-700", icon: "📋" },
    { title: "EMPLOYERS ACCOUNT", color: "bg-purple-800", icon: "🏢" },
    { title: "PARTNERS ACCOUNT", color: "bg-cyan-800", icon: "🤝" },
    { title: "JOBSEEKERS ACCOUNT", color: "bg-gray-700", icon: "👨‍👩‍👦" },
    { title: "RECRUITER MARKETPLACE", color: "bg-gray-800", icon: "👥" },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <MainHeader />
     <main className='w-full flex justify-center items-center h-[calc(100vh-65px)] scroll-auto'>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl">
           {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} text-white p-6 rounded-lg shadow-lg flex flex-col items-center`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <button className="border border-white px-2 py-2 rounded-md hover:bg-white hover:text-black transition">
              {card.title}
            </button>
          </div>
        ))}
       </div>
     </main>
    </div>
  )
}

export default Home