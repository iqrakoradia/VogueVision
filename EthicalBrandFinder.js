import React, { useState } from "react";
import "./EthicalBrandFinder.css";
import FilterSidebar from "../components/FilterSidebar";
import BrandList from "../components/BrandList";

function EthicalBrandFinder() {
  // Filter states
  const [selectedCertifications, setSelectedCertifications] = useState([]);
  const [priceRange, setPriceRange] = useState(10000);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(""); // State for selected size

  // Filter data
  const certifications = ["PETA Certified", "Fair Trade",];
  const productTypes = ["Organic", "Vegan", "Handmade"];
  const sizes = ["S", "M", "L", "XL", "XXL"]; 
  // Brand data with sample products
  const allBrands = [
    
    {
      id: 2,
      name: "W",
      logo: "/assets/logo/wforwomen.jpeg",
      tagline: "Modern Indian womenswear brand",
      rating: 4.4,
      category: "Fashion",
      certifications: [],
      priceRange: 1500,
      productTypes: ["Handmade"],
      products: [
        {
          id: 201,
          name: "Chanderi Silk Kurta",
          price: 2499,
          image: "https://wforwoman.com/wp-content/uploads/silk_kurta.jpg",
          stockCount: 30,
          sizes: ["S", "M", "L", "XL"],
        },
        {
          id: 202,
          name: "Handblock Print Suit",
          price: 2999,
          image: "https://wforwoman.com/wp-content/uploads/handblock_suit.jpg",
          stockCount: 25,
          sizes: [ "M", "L", "XL"],
        },
      ],
    },
    {
      id: 3,
      name: "Manyavar",
      logo: "/assets/logo/manyavar.jpeg",
      tagline: "Modern Indian menswear brand",
      rating: 4.6,
      category: "Fashion",
      certifications: ["Fair Trade"],
      priceRange: 3000,
      productTypes: ["Organic"],
      products: [
        {
          id: 301,
          name: "Embroidered Sherwani",
          price: 4999,
          image: "https://images.manyavar.com/live/image/catalog/sherwani.jpg",
          stockCount: 15,
          sizes: ["M", "L", "XL"],
        },
        {
          id: 302,
          name: "Silk Kurta Pajama Set",
          price: 2999,
          image: "https://images.manyavar.com/live/image/catalog/kurta.jpg",
          stockCount: 20,
          sizes: ["L", "XL", "XXL"],
        },
      ],
    },
    {
      id: 4,
      name: "Biba",
      logo: "/assets/logo/biba.png",
      tagline: "Contemporary Indian ethnic wear",
      rating: 4.3,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 2500,
      productTypes: [],
      products: [
        {
          id: 401,
          name: "Anarkali Suit",
          price: 3499,
          image: "https://www.biba.in/media/catalog/product/anarkali.jpg",
          stockCount: 25,
          sizes: ["M", "L", "XL"],
        },
        {
          id: 402,
          name: "Cotton Palazzo",
          price: 999,
          image: "https://www.biba.in/media/catalog/product/palazzo.jpg",
          stockCount: 50,
          sizes: ["S","M", "L", "XL"],
        },
      ],
    },
    {
      id: 5,
      name: "Global Desi",
      logo: "/assets/logo/globaldesi.png",
      tagline: "Fusion of Indian and Western fashion",
      rating: 4.5,
      category: "Fashion",
      certifications: [],
      priceRange: 2000,
      productTypes: ["Vegan"],
      products: [
        {
          id: 501,
          name: "Boho Maxi Dress",
          price: 1899,
          image: "https://www.globaldesi.in/media/maxi_dress.jpg",
          stockCount: 30,
          sizes: ["S", "M", "L"],
        },
        {
          id: 502,
          name: "Printed Tunic",
          price: 1299,
          image: "https://www.globaldesi.in/media/printed_tunic.jpg",
          stockCount: 40,
          sizes: ["M", "L", "XL"],
        },
      ],
    },
    
    {
      id: 7,
      name: "FabIndia",
      logo: "/assets/logo/Fabindia.png",
      tagline: "Handcrafted, ethical clothing and accessories.",
      rating: 4.6,
      category: "Fashion",
      certifications: ["Fair Trade"],
      priceRange: 3500,
      productTypes: ["Handmade", "Organic"],
      products: [
        {
          id: 701,
          name: "Handwoven Dupatta",
          price: 1299,
          image: "https://www.fabindia.com/media/handwoven_dupatta.jpg",
          stockCount: 35,
          size:[],
        },
        {
          id: 702,
          name: "Organic Cotton Shirt",
          price: 1499,
          image: "https://www.fabindia.com/media/cotton_shirt.jpg",
          stockCount: 20,
          size:["S", "M", "L"],
        },
      ],
    },
    {
      id: 8,
      name: "H&M Conscious",
      logo: "/assets/logo/H&M.png",
      tagline: "Sustainable fashion collection from H&M.",
      rating: 4.3,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 2500,
      productTypes: ["Organic", "Vegan"],
      products: [
        {
          id: 801,
          name: "Organic Cotton Tee",
          price: 799,
          image: "https://www.hm.com/media/cotton_tee.jpg",
          stockCount: 50,
          size:["S", "M", "L"],
        },
        {
          id: 802,
          name: "Recycled Denim Jeans",
          price: 1999,
          image: "https://www.hm.com/media/denim_jeans.jpg",
          stockCount: 25,
          size:["S", "M", "L","XL"],
        },
      ],
    },
    {
      id: 9,
      name: "Zara Join Life",
      logo: "/assets/logo/Zara.png",
      tagline: "Sustainable line by Zara.",
      rating: 4.2,
      category: "Fashion",
      certifications: ["Fair Trade"],
      priceRange: 2000,
      productTypes: ["Handmade"],
      products: [
        {
          id: 901,
          name: "Organic Linen Shirt",
          price: 1799,
          image: "https://www.zara.com/media/linen_shirt.jpg",
          stockCount: 30,
          size:["S", "M", "L"],
        },
        {
          id: 902,
          name: "Sustainable Chinos",
          price: 2499,
          image: "https://www.zara.com/media/chinos.jpg",
          stockCount: 20,
          size:["L","XL","XXL"],
        },
      ],
    },
    {
      id: 10,
      name: "Ajio",
      logo: "/assets/logo/Ajio.png",
      tagline: "Sustainable fashion options for men and women.",
      rating: 4.5,
      category: "Fashion",
      certifications: [],
      priceRange: 1200,
      productTypes: ["Vegan", "Organic"],
      products: [
        {
          id: 1001,
          name: "Vegan Leather Jacket",
          price: 2499,
          image: "https://www.ajio.com/media/vegan_leather_jacket.jpg",
          stockCount: 15,
          size:["L","XL","XXL"],
          
        },
        {
          id: 1002,
          name: "Handcrafted Juttis",
          price: 999,
          image: "https://www.ajio.com/media/handcrafted_juttis.jpg",
          stockCount: 30,
          size:["S","M","L"],

        },
      ],
    },
    {
      id: 11,
      name: "Tata CLiQ",
      logo: "/assets/logo/TataCliq.png",
      tagline: "Ethical and sustainable fashion options.",
      rating: 4.4,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 3000,
      productTypes: ["Handmade"],
      products: [
        {
          id: 1101,
          name: "Khadi Kurta",
          price: 1499,
          image: "https://www.tatacliq.com/media/khadi_kurta.jpg",
          stockCount: 25,
          size:["S","M","L"],
        },
        {
          id: 1102,
          name: "Handloom Saree",
          price: 2999,
          image: "https://www.tatacliq.com/media/handloom_saree.jpg",
          stockCount: 15,
          size:["S","M","L"],
        },
      ],
    },
    {
      id: 12,
      name: "Vera Moda",
      logo: "/assets/logo/veramoda.png",
      tagline: "Women’s fashion with eco-friendly collections.",
      rating: 4.6,
      category: "Fashion",
      certifications: [],
      priceRange: 3500,
      productTypes: ["Organic"],
      products: [
        {
          id: 1201,
          name: "Eco-friendly Midi Dress",
          price: 2299,
          image: "https://www.veromoda.in/media/midi_dress.jpg",
          stockCount: 20,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 1202,
          name: "Sustainable Denim Jacket",
          price: 2799,
          image: "https://www.veromoda.in/media/denim_jacket.jpg",
          stockCount: 15,
          size:["S","M","L"],
        },
      ],
    },
    {
      id: 13,
      name: "Bohobi Apparel",
      logo: "/assets/logo/bohobi.png",  // Add your local logo image here
      tagline: "Sustainable fashion with a touch of elegance.",
      rating: 4.7,
      category: "Fashion",
      certifications: ["Fair Trade", "GOTS Certified", "Vegan"],
      priceRange: 1500,
      productTypes: ["Eco-Friendly", "Vegan", "Sustainable"],
      products: [
        {
          id: 1301,
          name: "Handwoven Cotton Kurta",
          price: 1499,
          image: "/assets/images/handwoven-kurta.jpg", // Local image for the product
          stockCount: 50,
          size:["S","M","L"],
        },
        {
          id: 1302,
          name: "Upcycled Denim Jacket",
          price: 2499,
          image: "/assets/images/upcycled-denim-jacket.jpg", // Local image for the product
          stockCount: 30,
          size:["S","M","L"],
        },
        {
          id: 1303,
          name: "Organic Cotton T-shirt",
          price: 999,
          image: "/assets/images/organic-cotton-tee.jpg", // Local image for the product
          stockCount: 40,
          size:["M","L"],
        },
      ],
    },
    
    {
      id: 14,
      name: "Puma Sustainable",
      logo: "/assets/logo/puma.png",
      tagline: "Sports and athleisure with eco-friendly focus.",
      rating: 4.5,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 4000,
      productTypes: ["Vegan"],
      products: [
        {
          id: 1401,
          name: "Eco Running Shoes",
          price: 2999,
          image: "https://www.puma.com/media/running_shoes.jpg",
          stockCount: 25,
          size:["S","M","L"],
        },
      
        {
          id: 1402,
          name: "Recycled Polyester Track Pants",
          price: 1999,
          image: "https://www.puma.com/media/track_pants.jpg",
          stockCount: 30,
          size:["S","M","L"],
        },
      ],
    },
    {
      id: 15,
      name: "Reebok Green",
      logo: "/assets/logo/reebok.png",
      tagline: "Sustainable activewear by Reebok.",
      rating: 4.4,
      category: "Fashion",
      certifications: ["Fair Trade"],
      priceRange: 3500,
      productTypes: ["Organic"],
      products: [
        {
          id: 1501,
          name: "Plant-based Running Shoes",
          price: 3499,
          image: "https://www.reebok.com/media/running_shoes.jpg",
          stockCount: 20,
          size:[],
        },
        {
          id: 1502,
          name: "Recycled Fabric Sports Tee",
          price: 1299,
          image: "https://www.reebok.com/media/sports_tee.jpg",
          stockCount: 35,
          size:["S","M","L"],
        },
      ],
    },
    {
      id: 16,
      name: "Toms",
      logo: "/assets/logo/toms.png",
      tagline: "Ethical footwear with a focus on giving back.",
      rating: 4.7,
      category: "Footwear",
      certifications: ["PETA Certified"],
      priceRange: 2000,
      productTypes: ["Vegan"],
      products: [
        {
          id: 1601,
          name: "Canvas Slip-ons",
          price: 1999,
          image: "https://www.toms.com/media/canvas_slipons.jpg",
          stockCount: 25,
          size:[],
        },
        {
          id: 1602,
          name: "Eco-friendly Backpack",
          price: 2499,
          image: "https://www.toms.com/media/backpack.jpg",
          stockCount: 10,
          size:[],
        },
      ],
    },
    {
      id: 17,
      name: "Nike Move to Zero",
      logo: "/assets/logo/nike.png",
      tagline: "Nike’s initiative towards zero carbon and waste.",
      rating: 4.3,
      category: "Fashion",
      certifications: [],
      priceRange: 4000,
      productTypes: ["Vegan", "Handmade"],
      products: [
        {
          id: 1701,
          name: "Sustainable Sneakers",
          price: 3499,
          image: "https://www.nike.com/media/sustainable_sneakers.jpg",
          stockCount: 25,
          size:["L"],
        },
        {
          id: 1702,
          name: "Organic Cotton Hoodie",
          price: 2999,
          image: "https://www.nike.com/media/cotton_hoodie.jpg",
          stockCount: 15,
          size:["L"],
        },
      ],
    },
    {
      id: 18,
      name: "Adidas Parley",
      logo: "/assets/logo/adidas.png",
      tagline: "Footwear and apparel made from ocean plastic.",
      rating: 4.5,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 3500,
      productTypes: ["Vegan"],
      products: [
        {
          id: 1801,
          name: "Ocean Plastic Running Shoes",
          price: 3999,
          image: "https://www.adidas.com/media/ocean_plastic_shoes.jpg",
          stockCount: 20,
          size:["S","M","L"],
        },
        {
          id: 1802,
          name: "Recycled Swim Trunks",
          price: 1599,
          image: "https://www.adidas.com/media/swim_trunks.jpg",
          stockCount: 30,
          size:["S","M","L","XL","XXL"],
        },
      ],
    },
    {
      id: 19,
      name: "Lacoste Green",
      logo: "/assets/logo/lactose.png",
      tagline: "Sustainable fashion collection by Lacoste.",
      rating: 4.4,
      category: "Fashion",
      certifications: ["Fair Trade"],
      priceRange: 4500,
      productTypes: ["Handmade"],
      products: [
        {
          id: 1901,
          name: "Organic Polo Tee",
          price: 2999,
          image: "https://www.lacoste.com/media/polo_tee.jpg",
          stockCount: 25,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 1902,
          name: "Eco-friendly Sneakers",
          price: 3999,
          image: "https://www.lacoste.com/media/sneakers.jpg",
          stockCount: 10,
          size:["XL","XXL"],
        },
      ],
    },
    {
      id: 20,
      name: "Ralph Lauren Earth",
      logo: "/assets/logo/ralphlauren.png",
      tagline: "The Earth collection focusing on sustainability.",
      rating: 4.6,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 6000,
      productTypes: ["Organic"],
      products: [
        {
          id: 2001,
          name: "Recycled Wool Sweater",
          price: 4999,
          image: "https://www.ralphlauren.com/media/wool_sweater.jpg",
          stockCount: 20,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 2002,
          name: "Organic Denim Jacket",
          price: 3999,
          image: "https://www.ralphlauren.com/media/denim_jacket.jpg",
          stockCount: 15,
          size:["XXL"],
        },
      ],
    },
    {
      id: 21,
      name: "Levi’s Water<Less",
      logo: "/assets/logo/levis.png",
      tagline: "Sustainable denim line by Levi’s.",
      rating: 4.5,
      category: "Fashion",
      certifications: [],
      priceRange: 2500,
      productTypes: ["Handmade"],
      products: [
        {
          id: 2101,
          name: "Water<Less 501 Jeans",
          price: 2999,
          image: "https://www.levi.com/media/501_jeans.jpg",
          stockCount: 30,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 2102,
          name: "Sustainable Denim Shirt",
          price: 1999,
          image: "https://www.levi.com/media/denim_shirt.jpg",
          stockCount: 20,
          size:["S","M","L","XL","XXL"],
        },
      ],
    },
    {
      id: 22,
      name: "Vans Eco",
      logo: "/assets/logo/vans.png",
      tagline: "Footwear made with sustainable materials.",
      rating: 4.3,
      category: "Footwear",
      certifications: ["PETA Certified"],
      priceRange: 3000,
      productTypes: ["Vegan"],
      products: [
        {
          id: 2201,
          name: "Eco Slip-On",
          price: 2499,
          image: "https://www.vans.com/media/eco_slipon.jpg",
          stockCount: 25,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 2202,
          name: "Recycled Cotton Tee",
          price: 999,
          image: "https://www.vans.com/media/cotton_tee.jpg",
          stockCount: 40,
          size:["S","M","L","XL","XXL"],
        },
      ],
    },
    {
      id: 23,
      name: "Allbirds",
      logo: "/assets/logo/allbirds.png",
      tagline: "Footwear brand known for eco-conscious shoes.",
      rating: 4.7,
      category: "Footwear",
      certifications: ["Fair Trade"],
      priceRange: 3500,
      productTypes: ["Vegan"],
      products: [
        {
          id: 2301,
          name: "Wool Runners",
          price: 2999,
          image: "https://www.allbirds.com/media/wool_runners.jpg",
          stockCount: 25,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 2302,
          name: "Tree Runners",
          price: 3499,
          image: "https://www.allbirds.com/media/tree_runners.jpg",
          stockCount: 15,
          size:["S","M","L","XL","XXL"],
        },
      ],
    },
    {
      id: 24,
      name: "Patagonia",
      logo: "/assets/logo/patagonia.png",
      tagline: "Clothing brand with a commitment to the planet.",
      rating: 4.8,
      category: "Fashion",
      certifications: ["PETA Certified"],
      priceRange: 5000,
      productTypes: ["Handmade"],
      products: [
        {
          id: 2401,
          name: "Organic Cotton T-Shirt",
          price: 1299,
          image: "https://www.patagonia.com/media/cotton_tshirt.jpg",
          stockCount: 35,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 2402,
          name: "Recycled Nylon Jacket",
          price: 4999,
          image: "https://www.patagonia.com/media/nylon_jacket.jpg",
          stockCount: 20,
          size:["S","M","L","XL","XXL"],
        },
      ],
    },
    {
      id: 25,
      name: "The Body Shop",
      logo: "/assets/logo/body.png",
      tagline: "Ethical beauty products with sustainable practices.",
      rating: 4.6,
      category: "Beauty",
      certifications: ["Fair Trade"],
      priceRange: 1500,
      productTypes: ["Organic", "Vegan"],
      products: [
        {
          id: 2501,
          name: "Shea Body Butter",
          price: 1395,
          image: "https://www.thebodyshop.in/media/sheabodybutter.jpg",
          stockCount: 30,
          size:["S","M","L","XL","XXL"],
        },
        {
          id: 2502,
          name: "Tea Tree Face Wash",
          price: 695,
          image: "https://www.thebodyshop.in/media/teatreefacewash.jpg",
          stockCount: 25,
          size:["S","M","L","XL","XXL"],
        },
      ],
    },
  ];

 // Filter Handlers
 const handleCertificationChange = (cert) => {
  setSelectedCertifications((prev) =>
    prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
  );
};

const handlePriceRangeChange = (value) => {
  setPriceRange(value);
};

const handleProductTypeChange = (type) => {
  setSelectedProductTypes((prev) =>
    prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
  );
};

const handleSizeChange = (size) => {
  setSelectedSize(size); // Update the selected size
};

// Filter Logic
const filteredBrands = allBrands.filter((brand) => {
  // Check certifications (AND logic)
  if (selectedCertifications.length > 0) {
    for (let cert of selectedCertifications) {
      if (!brand.certifications.includes(cert)) {
        return false;
      }
    }
  }
  // Check price range
  if (brand.priceRange > priceRange) {
    return false;
  }
  // Check product types (AND logic)
  if (selectedProductTypes.length > 0) {
    for (let type of selectedProductTypes) {
      if (!brand.productTypes.includes(type)) {
        return false;
      }
    }
  }
  // Check selected size (if any)
  if (selectedSize) {
    const sizeMatches = brand.products.some((product) =>
      product.sizes.includes(selectedSize)
    );
    if (!sizeMatches) {
      return false;
    }
  }
  return true;
});

return (


    <div className="main-content">
      <FilterSidebar
        certifications={certifications}
        selectedCertifications={selectedCertifications}
        onCertificationChange={handleCertificationChange}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
        productTypes={productTypes}
        selectedProductTypes={selectedProductTypes}
        onProductTypeChange={handleProductTypeChange}
        sizes={sizes} // Pass sizes for filter
        selectedSize={selectedSize} // Selected size state
        onSizeChange={handleSizeChange} // Handle size changes
      />

      <BrandList brands={filteredBrands} />
    </div>

);
}

export default EthicalBrandFinder;