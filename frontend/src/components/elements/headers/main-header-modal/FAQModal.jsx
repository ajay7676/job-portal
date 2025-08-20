import React from 'react'
import { useState } from 'react';

const FAQModal = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-sky-600 text-white rounded-md shadow"
      >
        Open Modal
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-600 mb-4">
              This is a simple modal using Tailwind CSS.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default FAQModal