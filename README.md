# 👗 VogueVision – Your AI-Powered Fashion Assistant

**VogueVision** is a smart, AI-driven web application designed to transform the way you explore, experience, and express fashion. With six interactive modules, VogueVision combines personalized style recommendations, real-time virtual try-ons, ethical fashion exploration, and visual inspiration—all in one seamless fashion tech platform.

---

## 🌟 Features & Modules

### 1. 🎨 Personalized Outfit Finder
- **How it works:** Users input preferences (e.g., "floral summer dress", "oversized hoodie aesthetic").
- **Tech Used:** Google Search Engine API
- **Function:** Retrieves curated outfit photos directly from the web based on user inputs, enabling discovery and style personalization.

---

### 2. 💄 Makeup Shade Matcher
- **How it works:** Uses your webcam with face mesh detection to overlay:
  - Foundation
  - Lipstick
  - Blush
- **Tech Used:** MediaPipe Face Mesh, WebCam JS
- **Bonus Feature:** Recommends exact shade matches with **purchase links from Nykaa** and other e-commerce platforms for a real-world beauty extension.

---

### 3. 🧍‍♀️ AI Image-Based Try-On
- **How it works:** Upload your photo + desired outfit image → view real-time virtual try-on.
- **Tech Used:** Hugging Face (custom Try-On API), Python backend integration
- **Function:** The model overlays the outfit onto the user’s image using deep learning fashion rendering.

---

### 4. 📈 Style Evolution Tracer
- **How it works:** Tracks outfit uploads and style changes over time.
- **Features:**
  - Fashion personality detection (e.g., minimal, streetwear, glam)
  - AI-generated **Flashcards** of predicted future fashion trends
- **Tech Used:** Firebase for storage, AI pattern recognition model

---

### 5. 🖼️ Fashion Mood Board
- **How it works:** Like Pinterest, but *only fashion-focused*.
- **Function:** Users get personalized, AI-generated fashion mood boards based on their style history and preferences.
- **Bonus:** Save, download, and share boards with the community.

---

### 6. 🌱 Ethical Brand Finder
- **How it works:** Explore verified ethical, vegan, and sustainable brands.
- **Tech Used:** Curated brand database + filters (vegan, eco-friendly, fair trade, etc.)
- **Features:**
  - Add items to cart
  - Redirects to purchase from original brand websites

---

## 🛠️ Tech Stack

- **Frontend:** React / React Native  
- **Backend:** Node.js / Express  
- **APIs & AI Integration:**
  - Google Search API (for fashion retrieval)
  - MediaPipe (Face Mesh for makeup try-on)
  - Hugging Face (Virtual Try-On)
  - Firebase (User authentication + fashion history)
- **Database:** Firebase / Firestore  
- **External Platforms:** Nykaa API, Pinterest-style moodboard layout

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/voguevision.git
cd voguevision
npm install
npm start
