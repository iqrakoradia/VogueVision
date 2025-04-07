import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase"; // Import Firebase instance
import { collection, query, where, getDocs } from "firebase/firestore";

const StyleTimeline = () => {
  const [styleData, setStyleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser; // Get logged-in user

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return; // Ensure user is logged in
      try {
        const q = query(collection(db, "outfits"), where("userId", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const userStyles = querySnapshot.docs.map((doc) => doc.data().likedImages).flat();

        setStyleData(userStyles || []);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  if (loading) return <p>Loading timeline...</p>;
  if (!styleData.length) return <p>No styles liked yet.</p>;

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Style Evolution Timeline</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-scroll">
          {styleData
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            .map((entry, index) => (
              <div
                className="timeline-dot"
                key={index}
                style={{ left: `${(index / styleData.length) * 90}%` }}
              >
                <div className="timeline-popup">
                  <img src={entry.imageURL} alt="style" className="popup-image" />
                  <p className="popup-date">{new Date(entry.timestamp).toDateString()}</p>
                  {entry.selectedOptions && (
                    <>
                      <p className="popup-category">{entry.selectedOptions.category}</p>
                      <p className="popup-season">Season: {entry.selectedOptions.season}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StyleTimeline;
