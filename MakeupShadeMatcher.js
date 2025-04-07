import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import { ChromePicker } from "react-color";
import "./MakeupShadeMatcher.css";
import shadesData from "../data/shadesData";

const MakeupShadeMatcher = () => {
  const [makeupSelection, setMakeupSelection] = useState({
    foundation: true,
    lipstick: true,
    blush: true,
  });
  const [skinTone, setSkinTone] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState(null);

  // Colors stored as RGBA strings
  const [lipstickColor, setLipstickColor] = useState("rgba(166,65,65,1)");
  const [blushColor, setBlushColor] = useState("rgba(255,105,180,1)");
  const [foundationColor, setFoundationColor] = useState("rgba(255,224,189,0.5)");

  // Refs for current color values
  const lipstickColorRef = useRef(lipstickColor);
  const blushColorRef = useRef(blushColor);
  const foundationColorRef = useRef(foundationColor);

  useEffect(() => {
    lipstickColorRef.current = lipstickColor;
  }, [lipstickColor]);

  useEffect(() => {
    blushColorRef.current = blushColor;
  }, [blushColor]);

  useEffect(() => {
    foundationColorRef.current = foundationColor;
  }, [foundationColor]);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const faceMeshRef = useRef(null);
  const cameraRef = useRef(null);
  // Save last detected landmarks to allow redraw when colors change
  const lastLandmarksRef = useRef(null);

  // Adjust this to move blush up or down (negative moves up, positive moves down)
  const BLUSH_OFFSET_Y = -20;

  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });
    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    faceMesh.onResults(onResults);
    faceMeshRef.current = faceMesh;

    const setupCamera = () => {
      if (
        webcamRef.current &&
        webcamRef.current.video &&
        webcamRef.current.video.readyState === 4
      ) {
        cameraRef.current = new Camera(webcamRef.current.video, {
          onFrame: async () => {
            await faceMesh.send({ image: webcamRef.current.video });
          },
          width: 640,
          height: 480,
        });
        cameraRef.current.start();
      }
    };

    const interval = setInterval(() => {
      if (
        webcamRef.current &&
        webcamRef.current.video &&
        webcamRef.current.video.readyState === 4
      ) {
        setupCamera();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      if (cameraRef.current) cameraRef.current.stop();
    };
  }, []);

  const onResults = (results) => {
    if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0)
      return;
    const landmarks = results.multiFaceLandmarks[0];
    lastLandmarksRef.current = landmarks;

    const video = webcamRef.current.video;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (makeupSelection.foundation) drawFoundation(ctx, landmarks);
    if (makeupSelection.lipstick) drawLipstick(ctx, landmarks);
    if (makeupSelection.blush) drawBlush(ctx, landmarks);

    if (!skinTone) detectSkinTone();
  };

  // Redraw the overlay when any makeup color or selection changes
  useEffect(() => {
    if (
      !webcamRef.current ||
      !webcamRef.current.video ||
      !lastLandmarksRef.current
    )
      return;
    const video = webcamRef.current.video;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (makeupSelection.foundation) drawFoundation(ctx, lastLandmarksRef.current);
    if (makeupSelection.lipstick) drawLipstick(ctx, lastLandmarksRef.current);
    if (makeupSelection.blush) drawBlush(ctx, lastLandmarksRef.current);
  }, [lipstickColor, blushColor, foundationColor, makeupSelection]);

  // --- Drawing Functions ---

  const drawFoundation = (ctx, landmarks) => {
    const canvas = canvasRef.current;
    const faceOutline = [
      10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378,
      400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21,
      54, 103, 67, 109,
    ];

    ctx.fillStyle = foundationColorRef.current;
    ctx.globalCompositeOperation = "multiply";
    ctx.beginPath();
    faceOutline.forEach((index, i) => {
      const pt = landmarks[index];
      const x = pt.x * canvas.width;
      const y = pt.y * canvas.height;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();

    ctx.filter = "blur(10px)";
    ctx.fill();
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
  };

  const drawLipstick = (ctx, landmarks) => {
    const canvas = canvasRef.current;
    const lowerLipIndices = [
      61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291,
    ];
    const upperLipIndices = [
      61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291,
    ];

    ctx.fillStyle = lipstickColorRef.current;
    ctx.globalCompositeOperation = "multiply";

    // Draw lower lip
    ctx.beginPath();
    lowerLipIndices.forEach((index, i) => {
      const pt = landmarks[index];
      const x = pt.x * canvas.width;
      const y = pt.y * canvas.height;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();

    // Draw upper lip
    ctx.beginPath();
    upperLipIndices.forEach((index, i) => {
      const pt = landmarks[index];
      const x = pt.x * canvas.width;
      const y = pt.y * canvas.height;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();

    // Optional subtle highlight on the lips
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.beginPath();
    ctx.ellipse(
      ((landmarks[13].x + landmarks[14].x) / 2) * canvas.width,
      ((landmarks[13].y + landmarks[14].y) / 2) * canvas.height,
      20,
      10,
      0,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  };

  const drawBlush = (ctx, landmarks) => {
    const canvas = canvasRef.current;
    ctx.globalCompositeOperation = "multiply";
    ctx.save();
    ctx.filter = "blur(6px)";
    ctx.fillStyle = blushColorRef.current;

    const leftCheek = landmarks[50];
    const rightCheek = landmarks[280];
    const leftX = leftCheek.x * canvas.width;
    const leftY = leftCheek.y * canvas.height + BLUSH_OFFSET_Y;
    const rightX = rightCheek.x * canvas.width;
    const rightY = rightCheek.y * canvas.height + BLUSH_OFFSET_Y;

    // Draw left blush
    ctx.beginPath();
    ctx.moveTo(leftX, leftY);
    ctx.lineTo(leftX - 30, leftY + 20);
    ctx.lineTo(leftX - 10, leftY + 40);
    ctx.lineTo(leftX + 10, leftY + 35);
    ctx.lineTo(leftX + 20, leftY + 15);
    ctx.closePath();
    ctx.fill();

    // Draw right blush
    ctx.beginPath();
    ctx.moveTo(rightX, rightY);
    ctx.lineTo(rightX + 30, rightY + 20);
    ctx.lineTo(rightX + 10, rightY + 40);
    ctx.lineTo(rightX - 10, rightY + 35);
    ctx.lineTo(rightX - 20, rightY + 15);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
  };

  const detectSkinTone = () => {
    if (!webcamRef.current || !webcamRef.current.video) return;
    const video = webcamRef.current.video;
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    offscreenCanvas.width = video.videoWidth;
    offscreenCanvas.height = video.videoHeight;
    offscreenCtx.drawImage(video, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
    const centerX = Math.floor(offscreenCanvas.width / 2);
    const centerY = Math.floor(offscreenCanvas.height / 2);
    const pixelData = offscreenCtx.getImageData(centerX, centerY, 1, 1).data;
    const [r, g, b] = pixelData;
    let detectedSkinTone = "Medium";
    if (r > 200 && g > 180 && b > 160) detectedSkinTone = "Fair";
    else if (r > 180 && g > 150 && b > 130) detectedSkinTone = "Light";
    else if (r > 160 && g > 120 && b > 100) detectedSkinTone = "Medium";
    else if (r > 130 && g > 100 && b > 80) detectedSkinTone = "Tan";
    else if (r > 100 && g > 80 && b > 60) detectedSkinTone = "Deep";
    setSkinTone(detectedSkinTone);

    const matchedProducts =
      shadesData.find((shade) => shade.skinTone === detectedSkinTone) || {
        foundation: [],
        lipstick: [],
        blush: [],
      };
    setRecommendedProducts(matchedProducts);
  };

  return (
    <div className="makeup-shade-matcher">
      <div className="webcam-container" style={{ position: "relative" }}>
        <Webcam
          ref={webcamRef}
          style={{ width: "640px", height: "480px" }}
        />
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>

      <div className="makeup-selection">
        <h3>Select Makeup:</h3>
        {Object.keys(makeupSelection).map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              name={item}
              checked={makeupSelection[item]}
              onChange={(e) =>
                setMakeupSelection({
                  ...makeupSelection,
                  [e.target.name]: e.target.checked,
                })
              }
            />
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
        ))}
      </div>

      <div className="color-pickers">
        <div className="color-picker">
          <h4>Lipstick Color</h4>
          <ChromePicker
            color={lipstickColor}
            onChange={(color) =>
              setLipstickColor(
                `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
              )
            }
          />
        </div>
        <div className="color-picker">
          <h4>Blush Color</h4>
          <ChromePicker
            color={blushColor}
            onChange={(color) =>
              setBlushColor(
                `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
              )
            }
          />
        </div>
        <div className="color-picker">
          <h4>Foundation Color</h4>
          <ChromePicker
            color={foundationColor}
            onChange={(color) =>
              setFoundationColor(
                `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
              )
            }
          />
        </div>
      </div>

      {skinTone && recommendedProducts && (
        <div className="recommended-products">
          <h3>Recommended Products for {skinTone} Skin Tone</h3>
          <div className="product-grid">
            {["foundation", "lipstick", "blush"].map((category) =>
              recommendedProducts[category]?.map((item, index) => (
                <div key={index} className="product-card">
                  <h4>{item.product}</h4>
                  <p>
                    <strong>{item.brand}</strong> - {item.shade}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeupShadeMatcher;
