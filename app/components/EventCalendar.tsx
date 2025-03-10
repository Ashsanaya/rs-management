"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { CgMore } from "react-icons/cg";
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "🎉 Office Celebration Announcement",
    time: "12:00 PM - 2:00 PM",
    description: "We are hosting a Rocksalt Annivesary on 06-03-2025 at Paradise! 🎊 Join us for an amazing time filled with [Food, Fun Activities, Music, etc.]. Don’t miss out! See you all there!",
  },
  {
    id: 2,
    title: "🍽️ Team Lunch/Dinner Invitation",
    time: "12:00 PM - 2:00 PM",
    description: "Hey Team! 🎉 We’re organizing a Lunch Get-Together on 08-03-2025 at chutney's! 🍕🥗 Let’s take a break, enjoy good food, and have some fun together",
  },
  {
    id: 3,
    title: "🏆 Employee Recognition Event",
    time: "12:00 PM - 2:00 PM",
    description: "We’re hosting our Quarterly Employee Appreciation Event on 31-03-2025 at Crown Convention Center. Let’s celebrate the hard work and achievements of our amazing team members! 🌟 Be there to cheer them on!",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
         <CgMore className="text-black w-6 h-6" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-300 even:border-t-purple-300"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
