import { useEffect, useRef } from "react";
import { DeepAR } from "deepar";

const DeepARTryOn = () => {
  const deepARRef = useRef(null);

  useEffect(() => {
    if (!deepARRef.current) return;

    const deepAR = new DeepAR({
      licenseKey: "564082d453d5e523457f63cded47657c04d4449047eb8a8458408f7dbc9b721247301b64c7f5ed3b",
      canvas: deepARRef.current,
      segmentationMode: "dynamic",
      onInitialize: () => {
        console.log("DeepAR Initialized ✅");

        // Load an AR effect (replace with your try-on effect)
        deepAR.switchEffect(0, "slot", "/path-to-your-effect.deepar");
      },
    });

    deepAR.start(); // Start DeepAR
    return () => deepAR.stop();
  }, []);

  return (
    <div>
      <h2>Virtual Try-On</h2>
      <canvas ref={deepARRef} width={640} height={480}></canvas>
    </div>
  );
};

export default DeepARTryOn;
