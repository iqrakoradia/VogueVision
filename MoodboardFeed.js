import React from "react";
import MoodboardCard from "../components/MoodboardCard";

const mockMoodboards = [
  { id: 1, title: "Summer Vibes", images: ["/images/summer1.jpg", "/images/summer2.jpg"] },
  { id: 2, title: "Minimal Aesthetic", images: ["/images/minimal1.jpg", "/images/minimal2.jpg"] },
];

const MoodboardFeed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockMoodboards.map((moodboard) => (
        <MoodboardCard key={moodboard.id} moodboard={moodboard} />
      ))}
    </div>
  );
};

export default MoodboardFeed;
