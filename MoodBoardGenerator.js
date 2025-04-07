import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import "./MoodBoardGenerator.css";
import { FaPlus, FaHeart, FaRegHeart, FaUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const MoodBoardGenerator = () => {
  const [theme, setTheme] = useState("");
  const [images, setImages] = useState([]);
  const [savedBoards, setSavedBoards] = useState([]);
  const [viewMode, setViewMode] = useState("create");
  const [userEmail, setUserEmail] = useState("");
  const [page, setPage] = useState(1);
  const [commentText, setCommentText] = useState("");
  
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    fetchMoodBoards();
    return () => unsubscribe();
  }, []);

  const fetchMoodBoards = async () => {
    const querySnapshot = await getDocs(collection(db, "moodBoards"));
    setSavedBoards(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const fetchImages = async () => {
    if (!theme) return;
    const API_KEY = "Q0H_eCQ75USS1zTfJNxWucCoUIMZPC_Bjqe44X10YwA";
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${theme} fashion&client_id=${API_KEY}&per_page=15&page=${page}`);
    const data = await response.json();
    setImages((prevImages) => [...prevImages, ...data.results]);
    setPage(page + 1);
  };

  const saveMoodBoard = async () => {
    if (!auth.currentUser || images.length === 0) return;
    const newBoard = {
      userId: auth.currentUser.uid,
      username: userEmail,
      avatar: auth.currentUser.photoURL || "default-avatar.png",
      theme,
      images,
      likes: [],
      comments: []
    };
    await addDoc(collection(db, "moodBoards"), newBoard);
    fetchMoodBoards();
    setTheme("");
    setImages([]);
  };

  const likeBoard = async (id) => {
    if (!auth.currentUser) return;
    const boardRef = doc(db, "moodBoards", id);
    await updateDoc(boardRef, { likes: arrayUnion(auth.currentUser.uid) });
    fetchMoodBoards();
  };

  const addComment = async (id) => {
    if (!auth.currentUser || !commentText.trim()) return;
    const boardRef = doc(db, "moodBoards", id);
    await updateDoc(boardRef, { comments: arrayUnion({ user: userEmail, text: commentText }) });
    setCommentText("");
    fetchMoodBoards();
  };

  return (
    <div className="container moodboard-generator">
      <header className="navbar moodboard-navbar">
        <div className="search-bar moodboard-search">
          <AiOutlineSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Enter a fashion theme..." 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)} 
          />
          <button onClick={fetchImages}>Generate</button>
        </div>
      </header>

      <div className="sidebar">
        <div className="user-info navbar-user">
          <FaUser className="user-icon" title={userEmail} />
        </div>
        <div className="nav-item" onClick={() => setViewMode("create")}>
          <FaPlus />
        </div>
        <div className="nav-item" onClick={() => setViewMode("view")}>
          <FaHeart />
        </div>
      </div>
      
      <div className="main-content">
        {viewMode === "create" ? (
          <div className="create-board">
            <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-column">
              {images.map((image) => (
                <img key={image.id} src={image.urls.small} alt={image.alt_description} className="mood-image" />
              ))}
            </Masonry>
            <button onClick={fetchImages}>Load More</button>
            <button onClick={saveMoodBoard} disabled={images.length === 0}>Save Mood Board</button>
          </div>
        ) : (
          <div className="view-board">
            {savedBoards.length === 0 ? (
              <p>No mood boards saved yet.</p>
            ) : (
              savedBoards.map((board) => (
                <div key={board.id} className="moodboard">
                  <div className="board-header">
                    <img src={board.avatar} alt={board.username} className="avatar" />
                    <h3>{board.theme} by {board.username}</h3>
                  </div>
                  <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-column">
                    {board.images.map((image) => (
                      <div key={image.id} className="image-container">
                        <img src={image.urls.small} alt={image.alt_description} className="mood-image" />
                        <button onClick={() => likeBoard(board.id)} className="like-button">
                          {board.likes.includes(auth.currentUser?.uid) ? <FaHeart color="red" /> : <FaRegHeart />} {board.likes.length}
                        </button>
                      </div>
                    ))}
                  </Masonry>
                  <div className="comments-section">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      value={commentText} 
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button onClick={() => addComment(board.id)}>Comment</button>
                    <ul>
                      {board.comments.map((comment, index) => (
                        <li key={index}><strong>{comment.user}:</strong> {comment.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MoodBoardGenerator;
