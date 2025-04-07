// src/ethicalBrands.js
const ethicalBrands = [
  {
    id: 1,
    name: "FabIndia",
    description: "Leading sustainable fashion brand in India",
    logoUrl: "https://images.unsplash.com/photo-1583391733981-8498465efaa7",
    isOrganic: true,
    isVegan: true,
    isHandmade: true,
    isPetaCertified: true,
    category: "Clothing",
    products: [
      {
        id: 1,
        name: "Chanderi Silk Kurta",
        description: "Handwoven Chanderi silk kurta with traditional motifs",
        price: 3499,
        imageUrl: "https://www.fabindia.com/products/chanderi-silk-kurta",
      },
      {
        id: 2,
        name: "Block Print Cotton Saree",
        description: "Hand block printed cotton saree with traditional designs",
        price: 2999,
        imageUrl: "https://www.fabindia.com/products/block-print-cotton-saree",
      },
    ],
  },
  {
    id: 2,
    name: "No Nasties",
    description: "100% organic cotton clothing brand",
    logoUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    isOrganic: true,
    isVegan: true,
    isHandmade: false,
    isPetaCertified: true,
    category: "Clothing",
    products: [
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        description: "Soft, breathable organic cotton t-shirt",
        price: 1499,
        imageUrl: "https://www.nonasties.in/cdn/shop/products/t-shirt.jpg",
      },
    ],
  },
  // Add more brands and products as needed...
];

export default ethicalBrands;