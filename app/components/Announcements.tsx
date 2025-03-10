import React from 'react'

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="bg-blue-200 rounded-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">📢 Attention Team!</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                  2025-01-01
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
              
              We are excited to announce that RockSalt has achieved 6+ years with Jio 🎉 Thank you for your hard work and dedication. Stay tuned for more details. Keep up the great work!
              </p>
            </div>
            <div className="bg-purple-200 rounded-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">⚠️ Urgent Notice</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                  2025-01-01
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
              Dear Team, due to Floor maintenance, Rocksalt will be temporarily closed on 07-03-2025. Please make necessary arrangements and reach out to HR for any concerns.
              </p>
            </div>
            <div className="bg-yellow-200 rounded-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">🙌 A Big Thank You!</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                  2025-01-01
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
              Shoutout to everyone for their hard work on MSB! Your efforts are truly appreciated, and we couldn't have done it without you. Keep up the great work! 💪
              </p>
            </div>
          </div>
        </div>
      );
    };

export default Announcements