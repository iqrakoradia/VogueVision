import { Client, FileData } from "@gradio/client";

export const tryOnApiCall = async (backgroundImageUrl, garmentImageUrl, garmentDescription) => {
  const client = new Client("yisol/IDM-VTON");

  const backgroundFile = new FileData({ name: "background.png", data: backgroundImageUrl });
  const garmentFile = new FileData({ name: "garment.png", data: garmentImageUrl });

  const result = await client.predict(
    {
      dict: {
        background: backgroundFile,
        layers: [],
        composite: null,
      },
      garm_img: garmentFile,
      garment_des: garmentDescription,
      is_checked: true,
      is_checked_crop: false,
      denoise_steps: 30,
      seed: 42,
    },
    "/tryon"
  );

  return result;
};
