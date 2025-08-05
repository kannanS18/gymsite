import React, { useRef, useState, useEffect } from "react";
import "./Class.css";

const programs = [
  {
    title: "Cardio Craze",
    content: "High-energy cardio sessions to boost your stamina and burn calories fast.",
    video: require("../assets/cardio.mp4"),
  },
  {
    title: "Strength Zone",
    content: "Build muscle and strength with expert-led weight training classes.",
    video: require("../assets/strength.mp4"),
  },
  {
    title: "Core & Abs",
    content: "Target your core with focused workouts for abs, obliques, and lower back.",
    video: require("../assets/core.mp4"),
  },
  {
    title: "Stretch & Relax",
    content: "Improve flexibility and recover with guided stretching and relaxation.",
    video: require("../assets/Stretch.mp4"),
  },
  {
    title: "Full Body Fat Burn",
    content: "Intense full-body workouts designed to maximize fat loss and endurance.",
    video: require("../assets/running.mp4"),
  },
  {
    title: "Power Lifting",
    content: "Advanced lifting sessions for those looking to push their limits.",
    video: require("../assets/core.mp4"),
  },
];

export default function FitnessPrograms() {
  const [hovered, setHovered] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === hovered) {
          if (video.paused) video.play().catch(() => {});
        } else {
          if (!video.paused) {
            video.pause();
            video.currentTime = 0;
          }
        }
      }
    });
  }, [hovered]);



  return (
    <div className="fitness-section">
      <div className="fitness-grid">
        {programs.map((program, index) => (
          <div className="hex-card-wrapper" key={index}>
            <div className="hex-card-border">
              <div
                className="hex-card"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <video
                  className="hex-card-bg-video"
                  ref={el => (videoRefs.current[index] = el)}
                  src={program.video}
                  muted
                  loop
                  playsInline
                  style={{ pointerEvents: "none" }}
                  onEnded={() => videoRefs.current[index].classList.remove("active")}
                />
                <div className="hex-card-content">
                  <p>{program.content}</p>
                </div>
                <a href="/contact" className="hex-class-title">{program.title}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}