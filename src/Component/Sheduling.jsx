import React, { useState } from "react";
import "./Sheduling.css";

const classes = [
  "Cardio Craze",
  "Strength Zone",
  "Core & Abs",
  "Stretch & Relax",
  "Full Body Fat Burn",
  "Power Lifting"
];

const times = [
  "6:00am - 7:00am",
  "8:00am - 9:00am",
  "10:00am - 11:00am",
  "5:00pm - 6:00pm",
  "6:30pm - 7:30pm",
  "8:00pm - 9:00pm"
];

// Example: schedule[day][classIdx][timeIdx]
const schedule = [
  // Day 1
  [
    [true,  true,  false, true,  false, false], 
    [false, true,  true,  false, true,  false],
    [true,  false, false, true,  false, true ], 
    [false, false, true,  false, true,  false], 
    [false, true,  false, false, true,  true ], 
    [true,  false, true,  false, false, true ]  
  ],
  // Day 2
  [
    [false, true,  false, true,  false, false],
    [true,  false, true,  false, true,  false],
    [false, false, true,  true,  false, true ],
    [true,  false, false,  false, true,  false],
    [false, true,  false, true, false,  true ],
    [true,  false, false,  false, true, true ]
  ],
  // Day 3
  [
    [true,  false, false, true,  true, false],
    [false, true,  true,  false, false,  true],
    [true,  false, true,  false, false, true ],
    [false, true, false,  false, true,  false],
    [true,  false, false, true, true,  false ],
    [false,  true, true,  false, false, true ]
  ],
  // Day 4
  [
    [true,  true,  false, false,  false, true],
    [false, false,  true,  true, true,  false],
    [true,  false, true,  false, true, false ],
    [false, true, false,  true, false,  true],
    [true,  false, true, false, true,  false ],
    [false,  true, false,  true, false, true ]
  ],
  // Day 5
  [
    [false,  true,  true, false,  true, false],
    [true,  false,  false,  true, false,  true],
    [false,  true, true,  false, true, false ],
    [true,  false, false,  true, false,  true],
    [false,  true, true, false, true,  false ],
    [true,  false, true,  false, true, false ]
  ],
  // Day 6
  [
    [true,  false,  true, false,  true, false],
    [false,  true,  false,  true, false,  true],
    [true,  false, true,  false, true, false ],
    [false,  true, false,  true, false,  true],
    [true,  false, true, false, true,  false ],
    [false,  true, false,  true, false, true ]
  ],
  // Day 7
  [
    [false,  true,  false, true,  false, true],
    [true,  false,  true,  false, true,  false],
    [false,  true, false,  true, false,  true ],
    [true,  false, true,  false, true,  false],
    [false,  true, false,  true, false,  true ],
    [true,  false, true,  false, true,  false ]
  ]
];

export default function Scheduling() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="scheduling-container">
      <h2 className="schedule-title">Class Schedule</h2>
      <div className="week-buttons">
        {[...Array(7)].map((_, i) => (
          <button
            key={i}
            className={`week-btn${selectedDay === i ? " active" : ""}`}
            onClick={() => setSelectedDay(i)}
          >
            day {i + 1}
          </button>
        ))}
      </div>
      <div className="schedule-table-wrapper">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Class</th>
              {times.map((time, idx) => (
                <th key={idx}>{time}</th>
              ))}
            </tr>
          </thead>
          <tbody key={selectedDay}>
            {classes.map((className, rowIdx) => (
              <tr key={rowIdx}>
                <td
                  style={{
                    animationDelay: `${0.1 * rowIdx}s`
                  }}
                >
                  {className}
                </td>
                {times.map((_, colIdx) => (
                  <td
                    key={colIdx}
                    style={{
                      animationDelay: `${0.1 * rowIdx + 0.05 * colIdx}s`
                    }}
                  >
                    {schedule[selectedDay][rowIdx][colIdx] ? (
                      <span className="slot-dot present"></span>
                    ) : (
                      <span className="slot-dot absent"></span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}