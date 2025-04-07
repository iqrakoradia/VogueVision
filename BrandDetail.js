import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Re-import or fetch from a global store
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
          { id: 201, name: "Chanderi Silk Kurta", price: 3499, image: "https://wforwoman.com/cdn/shop/files/21JUF11303-910119_1.jpg?v=1722240823&width=1100", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 202, name: "Handblock Print Saree", price: 4999, image: "https://wforwoman.com/cdn/shop/files/22AUW18360-119969_1_1.webp?v=1721992912&width=1100", stockCount: 10, sizes: ["Free Size"] },
          { id: 203, name: "Organic Cotton Dress", price: 2999, image: "https://wforwoman.com/cdn/shop/files/23FEW19432-121139_1.jpg?v=1721321629&width=1100", stockCount: 15, sizes: ["S", "M", "L"] },
          { id: 204, name: "Anarkali Suit", price: 3999, image: "https://wforwoman.com/cdn/shop/files/23AUSP11463-122668_2.jpg?v=1721921264&width=1100", stockCount: 20, sizes: ["M", "L", "XL"] },
          { id: 205, name: "Heavy Work Suit", price: 2499, image: "https://wforwoman.com/cdn/shop/files/24AUSP11987-400734_1.jpg?v=1736242077&width=1100", stockCount: 18, sizes: ["Free Size"] },
          { id: 206, name: "Casual Cotton Tunic", price: 1999, image: "https://wforwoman.com/cdn/shop/files/24FEWS11382-313456_1.jpg?v=1721926698&width=1100", stockCount: 30, sizes: ["S", "M", "L"] },
          { id: 207, name: "Embroided Kurta Set", price: 5999, image: "https://wforwoman.com/cdn/shop/files/23AUWS19870-122325.jpg?v=1726652899&width=1100", stockCount: 12, sizes: ["Free Size"] },
          { id: 208, name: "Palazzo Pants", price: 1799, image: "https://wforwoman.com/cdn/shop/files/22CRE60189-603103_1.jpg?v=1731069030&width=1100", stockCount: 40, sizes: ["S", "M", "L"] },
          { id: 209, name: "Cotton Embroidered Kurti", price: 2699, image: "https://wforwoman.com/cdn/shop/files/24FEW11359-400547_1_272f07ca-14c2-4437-959c-d97cf722a851.jpg?v=1726123416&width=1100", stockCount: 22, sizes: ["S", "M", "L"] },
          { id: 210, name: "Black printed Shara Set", price: 3199, image: "https://wforwoman.com/cdn/shop/files/24FEWS10619-123035_1.jpg?v=1721914224&width=1100", stockCount: 25, sizes: ["M", "L"] }
        ]
      },
      {
        id: 3,
        name: "Manyavar",
        logo: "/assets/logo/manyavar.jpeg",
        tagline: "Timeless Indian ethnic wear",
        rating: 4.6,
        category: "Fashion",
        certifications: ["Fair Trade"],
        priceRange: 3000,
        productTypes: ["Organic"],
        products: [
          { id: 301, name: "Royal Blue Sherwani", price: 9999, image: "https://manyavar.scene7.com/is/image/manyavar/IWD0747-306-Dark+Blue.13201_21-03-2024-12-50:650x900?&dpr=on,2", stockCount: 12, sizes: ["M", "L", "XL"] },
          { id: 302, name: "Gold Embroidered Kurta", price: 4499, image: "https://manyavar.scene7.com/is/image/manyavar/I03_0R5A3047+copy_16-09-2021-12-01:650x900?&dpr=on,2", stockCount: 20, sizes: ["M", "L", "XL"] },
          { id: 303, name: "Maroon Velvet Jodhpuri Bridal Lehenga", price: 11999, image: "https://manyavar.scene7.com/is/image/manyavar/ULB4692V-407-MAROON.15671_26-03-2024-18-28:650x900?&dpr=on,2", stockCount: 10, sizes: ["M", "L", "XL"] },
          { id: 304, name: "Classic Beige Nehru Jacket", price: 2999, image: "https://manyavar.scene7.com/is/image/manyavar/WC00111A_303_Beige.0573_22-04-2024-16-10:650x900?&dpr=on,2", stockCount: 25, sizes: ["M", "L"] },
          { id: 305, name: "Embroidered Sherwani Set", price: 1999, image: "https://manyavar.scene7.com/is/image/manyavar/SHOS390_303-Beige_101.2305_26-11-2024-17-51:650x900?&dpr=on,2", stockCount: 30, sizes: ["7", "8", "9", "10"] },
          { id: 306, name: "Blue Sequinced Loafer jutis", price: 1499, image: "https://manyavar.scene7.com/is/image/manyavar/SHOD061V-306-Dark+Blue.27402_06-06-2024-15-28:650x900?&dpr=on,2", stockCount: 40, sizes: ["Free Size"] },
          { id: 307, name: "Groom's Safa", price: 999, image: "https://manyavar.scene7.com/is/image/manyavar/MSFA198-302-CREAME.3049_20-03-2024-20-06:650x900?&dpr=on,2", stockCount: 35, sizes: ["Free Size"] },
          { id: 308, name: "Floral Patterned Shawl", price: 1599, image: "https://manyavar.scene7.com/is/image/manyavar/SHAWL019_306-Dark+Blue_101.2535_26-11-2024-18-52:650x900?&dpr=on,2", stockCount: 22, sizes: ["S", "M", "L"] },
          { id: 309, name: "Zari Bordered South Indian Attire", price: 5999, image: "https://manyavar.scene7.com/is/image/manyavar/SOSK714-302-Cream.36725_17-11-2023-14-12:650x900?&dpr=on,2", stockCount: 18, sizes: ["M", "L", "XL"] },
          { id: 310, name: "Embroided Sequin work Saree", price: 1299, image: "https://manyavar.scene7.com/is/image/manyavar/SB17529_403-DARK+CREAM_101.24385_16-09-2024-15-51:650x900?&dpr=on,2", stockCount: 27, sizes: ["Free Size"] }
        ]
      },
      {
        id: 4,
        name: "Biba",
        logo: "/assets/logo/biba.png",
        tagline: "Graceful and trendy ethnic wear",
        rating: 4.5,
        category: "Fashion",
        certifications: ["PETA Certified"],
        priceRange: 2500,
        productTypes: [],
        products: [
          { id: 401, name: "Floral Anarkali Kurta", price: 3499, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwfbd8123c/images/ss24/skdsmerbloom9596ss24owht_4.jpg?sw=502&sh=753", stockCount: 20, sizes: ["S", "M", "L"] },
          { id: 402, name: "Cotton Printed Suit Set", price: 4299, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwc3125f65/images/ss25/skdwbi10437ss25whtblk_3.jpg?sw=502&sh=753", stockCount: 15, sizes: ["S", "M", "L"] },
          { id: 403, name: "Straight Cut Palazzo Set", price: 2999, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwfbec29c0/images/aw21/skdassorted7208eaw21pnk_1.jpg?sw=502&sh=753", stockCount: 18, sizes: ["S", "M", "L"] },
          { id: 404, name: "Hand Embroidered Kurta Set", price: 1599, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw4e99be76/images/aw24/tptuns20798aw24bry_1.jpg?sw=502&sh=753", stockCount: 30, sizes: ["Free Size"] },
          { id: 405, name: "Printed Cotton Kurti", price: 1999, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw90cbf479/images/aw21/assorted17961eaw21wne_1.jpg?sw=502&sh=753", stockCount: 22, sizes: ["S", "M", "L"] },
          { id: 406, name: "Geourgette Anarkali Set", price: 999, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw6b1f9c71/images/aw24/skdbold10476aw24grn_1.jpg?sw=502&sh=753", stockCount: 35, sizes: ["S", "M", "L"] },
          { id: 407, name: "Party Wear Silk Suit", price: 5199, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwdb179be7/images/aw24/asrt2003eaw24ind_1.jpg?sw=502&sh=753", stockCount: 10, sizes: ["M", "L"] },
          { id: 408, name: "Festive Ghagra Choli", price: 6899, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwdcc5ea62/images/aw24/skdtgw10130aw24rust_2.jpg?sw=502&sh=753", stockCount: 8, sizes: ["M", "L"] },
          { id: 409, name: "Cotton Printed Fusion Set", price: 899, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw5d31a24a/images/aw24/skdbold9785aw24multi_1.jpg?sw=502&sh=753", stockCount: 25, sizes: ["Free Size"] },
          { id: 410, name: "Elegant Rayon Maxi Dress", price: 3199, image: "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwee249761/images/ss23/csld1971ss23org_1.jpg?sw=502&sh=753", stockCount: 18, sizes: ["S", "M", "L"] }
        ]
      },
      {
        id: 5,
        name: "Global Desi",
        logo: "/assets/logo/globaldesi.png",
        tagline: "Fusion fashion for the modern woman",
        rating: 4.3,
        category: "Fashion",
        certifications: [],
        priceRange: 2800,
        productTypes: ["Vegan"],
        products: [
          { id: 501, name: "Boho Printed Maxi Dress", price: 3799, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw3baafca6/images/hires/SS22/GD-FW23GA211MXRY--TEAL-New(3).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 15, sizes: ["S", "M", "L"] },
          { id: 502, name: "Indie Fusion Jumpsuit", price: 3499, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dwf33ec5b1/images/hires/SS22/FW22GA812JSRY-INDIGO%20(2)%20-%20Copy.jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 12, sizes: ["M", "L"] },
          { id: 503, name: "Handwoven Palazzo Pants", price: 2599, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw3f4d4cbe/images/hires/SS22/GD-F24S173SH-BEIGE-(4).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 20, sizes: ["S", "M", "L"] },
          { id: 504, name: "Block Print Kurta Set", price: 4299, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dwe0378a97/images/hires/SS22/GD-FW23GA1372PRY-BLACK-(5).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 18, sizes: ["S", "M", "L"] },
          { id: 505, name: "Embroidered Shrug", price: 1999, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw61f19f9d/images/hires/SS22/GD-F24M129JK_NAVY-Lot-3%20(1).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 22, sizes: ["Free Size"] },
          { id: 506, name: "Cotton Midi Dress", price: 2899, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw1feed87b/images/hires/S23/GD-SS24GA043DRCAM-GREEN-(4).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 30, sizes: ["S", "M", "L"] },
          { id: 507, name: "Festive Kaftan", price: 3999, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw5eb034ac/images/hires/SS22/F24H95KF_MUSTARD%20(7).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 10, sizes: ["M", "L"] },
          { id: 508, name: "Printed Dhoti Pants", price: 2499, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw80c80cb7/images/hires/SS22/GD-FW22GM1952PPKH-YELLOW.jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 25, sizes: ["S", "M", "L"] },
          { id: 509, name: "Bohemian Tassel Bangels", price: 899, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dw24c77178/images/hires/SS22/GD-F24GRBR39-SILVER%20(1).jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 40, sizes: ["Free Size"] },
          { id: 510, name: "Indie Chic Phool Potli Bag", price: 1599, image: "https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dwd961f284/images/hires/SS22/GD-F24GOMP05%20(3)%20copy.jpg?sw=1300&sh=1950&sm=fit&strip=false", stockCount: 28, sizes: ["Free Size"] }
        ]
      },
      
      {
        id: 7,
        name: "FabIndia",
        logo: "/assets/logo/Fabindia.png",
        tagline: "Handcrafted sustainable fashion and home décor",
        rating: 4.6,
        category: "Fashion & Home",
        certifications: ["Fair Trade"],
        priceRange: 2000,
        productTypes: ["Handmade", "Organic"],
        products: [
          { id: 701, name: "Khadi Cotton Kurta", price: 2499, image: "https://apisap.fabindia.com/medias/10715999-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTkyODl8aW1hZ2UvanBlZ3xhRGRpTDJobE1DODRPVEkxTmpFM05qVXhOelF5THpFd056RTFPVGs1WHpFdWFuQm58ZDVkMDRjNjA5ODQwNWNmYmQyNmE2NzNlNDZiNWQ1YTllNmIyYzM3MzQyNzU2NTQ5NzFlZWVjZGFlY2QzZjg5Ng", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 702, name: "Handwoven Cotton Saree", price: 5999, image: "https://apisap.fabindia.com/medias/20154778-01.jpg?context=bWFzdGVyfGltYWdlc3wxMTkyNDB8aW1hZ2UvanBlZ3xhRGd6TDJoaVl5OHlPVGt6T1RnME9UQXpOVGd3Tmk4eU1ERTFORGMzT0Y4d01TNXFjR2N8ZWRkZWZkMjczMDNlN2FmODhkMDYwYzA1NGRhNzZjNDYyYjM0OTQ4ODY3YjdkNWJmM2U3OTI1Y2RjMTVlZjdmNQ", stockCount: 15, sizes: ["Free Size"] },
          { id: 703, name: "Block Print Bedspread", price: 3499, image: "https://apisap.fabindia.com/medias/20089082-1.jpg?context=bWFzdGVyfGltYWdlc3wyNzY3Nzd8aW1hZ2UvanBlZ3xhRFk0TDJobFlTODBPRFV5TmpNMU9UYzRPVFU1T0M4eU1EQTRPVEE0TWw4eExtcHdad3xhMDdmM2FiN2ZkNWY1MjAzMDhjNTJkMDRjODYyYmVkM2Y0NWNhYjE1MTc2NmQzNTNjYTQwMjdjNzk2ZDU5ZTg2", stockCount: 30, sizes: ["Queen", "King"] },
          { id: 704, name: "Organic Cotton Shirt", price: 1799, image: "https://apisap.fabindia.com/medias/20168406-03.jpg?context=bWFzdGVyfGltYWdlc3w4MjAwOHxpbWFnZS9qcGVnfGFETTVMMmcxTUM4Mk9EQXpPRGM0TXpVNU9EWXlNaTh5TURFMk9EUXdObDh3TXk1cWNHY3xkNTNlOWZmYzYxMTliOTE2ZTM3YWQ3N2ZhZTdmMTA2MmZmNDk3Yjc3ZDBjM2YyNTI5YjRkMzc2YzAxNmJjMTYx", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 705, name: "Wooden Handcrafted Lamp", price: 4199, image: "https://apisap.fabindia.com/medias/20105040-02.jpg?context=bWFzdGVyfGltYWdlc3wyNzc3MjB8aW1hZ2UvanBlZ3xhRFl5TDJneE55ODJNamsxTmpZMU16RTFNREl6T0M4eU1ERXdOVEEwTUY4d01pNXFjR2N8OWRlZWU0NjYzODFhM2NkOGRlOGJkOGY5ZmFkZjE2ZTgyMGUwZTQzYjc0YmNkZWJhOTE4MDcwZjhlNTg1NThhYw", stockCount: 12, sizes: ["One Size"] },
          { id: 706, name: "Natural Dyed Dupatta", price: 1999, image: "https://apisap.fabindia.com/medias/20213267-01.jpg?context=bWFzdGVyfGltYWdlc3wyMTA4OTF8aW1hZ2UvanBlZ3xhRGsxTDJnMU55ODRNekkyTXpRME5EVTRNalF6TUM4eU1ESXhNekkyTjE4d01TNXFjR2N8Y2QxMjhiMzE2MWYyOWEyNjdiZDg3NTMwZDAzNzQ4NDAzMzNiN2EzZTE5OTA0Mzg1NzBhNzJlOGUxOWViM2U2Yw", stockCount: 28, sizes: ["One Size"] },
          { id: 707, name: "Handloom Cotton Pants", price: 2299, image: "https://apisap.fabindia.com/medias/10720999-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTY3MTd8aW1hZ2UvanBlZ3xhR1kzTDJnNFpTODRPVEkzTURjeU56RTBOemd5THpFd056SXdPVGs1WHpFdWFuQm58MzczMDFmOTFiMTRjMjQzZDU4ZTBlYjcwZTc2ZTc4NzVhNjk4NTM0NjkxODQ3Njc2NmJiNDE3ZjhjNGVlNWYwMw", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 708, name: "Block Print Tolitery Bag", price: 1299, image: "https://apisap.fabindia.com/medias/20227953-01.jpg?context=bWFzdGVyfGltYWdlc3wyMDEzNjN8aW1hZ2UvanBlZ3xhRFE0TDJoa1lpODROVEF5TXpBd05UVTBNRE00TWk4eU1ESXlOemsxTTE4d01TNXFjR2N8ZmJmMmI0N2M4NzNkNmIzMmMyYjdlYzA1ZGRlYjFiZThkZjhmNDVhYjU1MWJjMTA3MTE0OTdmNzlkYmQ0MmY4OA", stockCount: 35, sizes: ["One Size"] },
          { id: 709, name: "Herbal Skincare Set", price: 2999, image: "https://apisap.fabindia.com/medias/8907833006815-01.jpg?context=bWFzdGVyfGltYWdlc3wxMzMwMTZ8aW1hZ2UvanBlZ3xhRFEwTDJoaE15ODFNRFU1TURZeU56UTJNekU1T0M4NE9UQTNPRE16TURBMk9ERTFYekF4TG1wd1p3fGVmNzNjNWEwMGNjY2FlMzU4YTFlYjkyNWZlYjg1YjBmZWMyOWU5MjRiZjUzMzAxYWUwOTVjNTFhYTczZTJjNDY", stockCount: 18, sizes: ["One Size"] },
          { id: 710, name: "Terracotta Dinner Set", price: 4999, image: "https://apisap.fabindia.com/medias/20184880-01.jpg?context=bWFzdGVyfGltYWdlc3wyMDUzNDF8aW1hZ2UvanBlZ3xhRFl4TDJoa01DODJOVEF4TlRBNU9USTJNRGsxT0M4eU1ERTRORGc0TUY4d01TNXFjR2N8ZWI2Mjc1ZTEyZGZjN2VkMTRlYzU5NTAwYjI5NTJmZjA0M2RhNjliMTQ1ZDI3YzI4ZWQ5OGU5ZTk3NjcxNjFlYw", stockCount: 10, sizes: ["One Size"] }
        ]
      },
      {
        id: 8,
        name: "H&M Conscious",
        logo: "/assets/logo/H&M.png",
        tagline: "Sustainable fashion from H&M",
        rating: 4.4,
        category: "Fashion",
        certifications: ["PETA Certified"],
        priceRange: 1800,
        productTypes: ["Organic", "Vegan"],
        products: [
          { id: 801, name: "Recycled Cotton T-Shirt", price: 1299, image: "https://image.hm.com/assets/hm/36/a2/36a2cdbe47b9ccccde648c943ada9e1d6bff28f7.jpg?imwidth=657", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 802, name: "Organic Denim Jeans", price: 3499, image: "https://image.hm.com/assets/hm/3b/64/3b64a9d9222ab534312a041e749f87dacb84d54d.jpg?imwidth=657", stockCount: 30, sizes: ["28", "30", "32", "34"] },
          { id: 803, name: "Sustainable Linen Blazer", price: 5999, image: "https://image.hm.com/assets/hm/5e/96/5e96bc27780b7002c2d97993b4f94bbfde01d610.jpg?imwidth=657", stockCount: 18, sizes: ["S", "M", "L"] },
          { id: 804, name: "Recycled Polyester Dress", price: 2899, image: "https://image.hm.com/assets/hm/31/aa/31aad23f6fc8c70a17ccb4e3e82cbb6a681b0ea9.jpg?imwidth=657", stockCount: 25, sizes: ["S", "M", "L"] },
          { id: 805, name: "Eco-Friendly Sneakers", price: 4499, image: "https://image.hm.com/assets/hm/1e/f0/1ef042f3c47c306c24a09e3b75e4b0082ffd1b30.jpg?imwidth=657", stockCount: 15, sizes: ["38", "39", "40", "41"] },
          { id: 806, name: "Organic Cotton Hoodie", price: 2799, image: "https://image.hm.com/assets/hm/3a/35/3a3522af273a45d5139f303b5bc1c181bde8f8f3.jpg?imwidth=657", stockCount: 22, sizes: ["S", "M", "L", "XL"] },
          { id: 807, name: "Sustainable Activewear Leggings", price: 1999, image: "https://image.hm.com/assets/hm/8c/ec/8ceceea21741ed7f74de8becde6cf6090f350cf9.jpg?imwidth=657", stockCount: 35, sizes: ["S", "M", "L"] },
          { id: 808, name: "Recycled Wool Scarf", price: 1599, image: "https://image.hm.com/assets/hm/0e/12/0e1257efd528dbcaaf4b62adf33a4746c41b1657.jpg?imwidth=657", stockCount: 28, sizes: ["One Size"] },
          { id: 809, name: "Eco-Friendly Tote Bag", price: 999, image: "https://image.hm.com/assets/hm/c7/d2/c7d2138ae8966889e75b5bf8f0a16d7238b6884b.jpg?imwidth=657", stockCount: 45, sizes: ["One Size"] },
          { id: 810, name: "Sustainable Sunglasses", price: 2299, image: "https://image.hm.com/assets/hm/fc/8d/fc8dc3f3876a7320b75e37a845fcc6c5ce686256.jpg?imwidth=657", stockCount: 20, sizes: ["One Size"] }
        ]
      },
      {
        id: 9,
        name: "Zara Join Life",
        logo: "/assets/logo/Zara.png",
        tagline: "Eco-conscious fashion from Zara",
        rating: 4.5,
        category: "Fashion",
        certifications: ["Fair Trade"],
        priceRange: 2500,
        productTypes: ["Handmade"],
        products: [
          { id: 901, name: "Organic Cotton Shirt", price: 2999, image: "https://static.zara.net/assets/public/145e/b183/c18c44b29d19/40e8e47d7eb0/02732311250-p/02732311250-p.jpg?ts=1740672794601&w=1024", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 902, name: "Recycled Wool Sweater", price: 3999, image: "https://static.zara.net/assets/public/39d7/a410/e8134c9dbd5c/7044d7ca8840/05070154803-p/05070154803-p.jpg?ts=1737476361375&w=1024", stockCount: 20, sizes: ["S", "M", "L"] },
          { id: 903, name: "Eco-Friendly Denim Jeans", price: 4999, image: "https://static.zara.net/assets/public/1970/b8f8/2b134e88a29f/b463c821816b/09863044400-000-p/09863044400-000-p.jpg?ts=1741767940520&w=1024", stockCount: 25, sizes: ["28", "30", "32", "34"] },
          { id: 904, name: "Sustainable Trench Coat", price: 6999, image: "https://static.zara.net/assets/public/3402/2c05/7e1747de96ad/8a6c099f26ba/08372059834-p/08372059834-p.jpg?ts=1741352783393&w=1024", stockCount: 15, sizes: ["S", "M", "L"] },
          { id: 905, name: "Recycled Polyester Dress", price: 3499, image: "https://static.zara.net/assets/public/e814/bcd2/60904ed0acd7/22bd738a221a/05039327671-p/05039327671-p.jpg?ts=1741348305155&w=1024", stockCount: 18, sizes: ["S", "M", "L"] },
          { id: 906, name: "Organic Cotton Hoodie", price: 2799, image: "https://static.zara.net/assets/public/c56d/0a83/327d4b48b6d6/0c3a449ef881/03199933803-p/03199933803-p.jpg?ts=1734948484092&w=1024", stockCount: 22, sizes: ["S", "M", "L", "XL"] },
          { id: 907, name: "Sustainable Activewear Leggings", price: 1999, image: "https://static.zara.net/assets/public/9a30/014a/ae8a473e81b9/c41f7dd69035/01529301407-p/01529301407-p.jpg?ts=1738863448921&w=1024", stockCount: 35, sizes: ["S", "M", "L"] },
          { id: 908, name: "Recycled Wool Beanie", price: 1599, image: "https://static.zara.net/assets/public/e83b/ab6d/3e224a7e80d9/f3d0df40c578/03739251800-p/03739251800-p.jpg?ts=1729787574628&w=1024", stockCount: 28, sizes: ["One Size"] },
          { id: 909, name: "Eco-Friendly Tote Bag", price: 999, image: "https://static.zara.net/assets/public/953e/6a7c/2c6d41758b4f/d25d5305829a/04751003330-e1/04751003330-e1.jpg?ts=1741341808831&w=1024", stockCount: 45, sizes: ["One Size"] },
          { id: 910, name: "Sustainable Sunglasses", price: 2299, image: "https://static.zara.net/assets/public/03ea/6c19/06f5408cae6b/cde33bab7d1f/08073252716-p/08073252716-p.jpg?ts=1736858375416&w=1024", stockCount: 20, sizes: ["One Size"] }
        ]
      },
      {
        id: 10,
        name: "Ajio",
        logo: "/assets/logo/Ajio.png",
        tagline: "Trendy fashion with a sustainable touch",
        rating: 4.4,
        category: "Fashion",
        certifications: [],
        priceRange: 1800,
        productTypes: ["Vegan", "Organic"],
        products: [
          { id: 1001, name: "Handwoven Cotton Kurta", price: 2299, image: "https://assets.ajio.com/medias/sys_master/root/20250120/aUdZ/678e447a0431850e0daad657/-473Wx593H-469710618-blue-MODEL4.jpg", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 1002, name: "Recycled Fabric T-Shirt", price: 1199, image: "https://assets.ajio.com/medias/sys_master/root/20241230/9w1K/67729702c148fa1b306913f4/-473Wx593H-443065278-mauve-MODEL.jpg", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 1003, name: "Organic Cotton Pants", price: 2799, image: "https://assets.ajio.com/medias/sys_master/root/20241228/4zUz/676f28eec148fa1b3065cf87/-473Wx593H-700985750-black-MODEL.jpg", stockCount: 20, sizes: ["28", "30", "32", "34"] },
          { id: 1004, name: "Eco-Friendly Sneakers", price: 3499, image: "https://assets.ajio.com/medias/sys_master/root/20241112/sn5Z/6733941ff9b8ef490b19ae17/-473Wx593H-700740126-beige-MODEL2.jpg", stockCount: 15, sizes: ["38", "39", "40", "41"] },
          { id: 1005, name: "Handmade Block Print Saree", price: 4999, image: "https://assets.ajio.com/medias/sys_master/root/20230823/9rQS/64e5b4a9ddf779151964110c/-473Wx593H-465662378-blue-MODEL.jpg", stockCount: 18, sizes: ["Free Size"] },
          { id: 1006, name: "Sustainable Denim Jacket", price: 3999, image: "https://assets.ajio.com/medias/sys_master/root/20240514/9r7E/6643400d05ac7d77bb59237f/-473Wx593H-466724757-olive-MODEL5.jpg", stockCount: 22, sizes: ["S", "M", "L"] },
          { id: 1007, name: "Recycled Leather Wallet", price: 1499, image: "https://assets.ajio.com/medias/sys_master/root/20241103/DyrS/6727a4dc260f9c41e8b94172/-473Wx593H-700689240-brown-MODEL.jpg", stockCount: 35, sizes: ["One Size"] },
          { id: 1008, name: "Bamboo Fiber Socks", price: 799, image: "https://assets.ajio.com/medias/sys_master/root/20240701/9Aec/668286341d763220fa90efed/-473Wx593H-466605693-pink-MODEL.jpg", stockCount: 28, sizes: ["One Size"] },
          { id: 1009, name: "Handwoven Jute Bag", price: 1799, image: "https://assets.ajio.com/medias/sys_master/root/20230215/8YVg/63eceee8aeb26924e373ac6a/-473Wx593H-469306935-pink-MODEL.jpg", stockCount: 45, sizes: ["One Size"] },
          { id: 1010, name: "Sustainable Sunglasses", price: 2199, image: "https://assets.ajio.com/medias/sys_master/root/20240123/5SOn/65af9a4e16fd2c6e6ab6d8ae/-473Wx593H-467004156-black-MODEL3.jpg", stockCount: 20, sizes: ["One Size"] }
        ]
      },
      {
        id: 11,
        name: "Tata Cliq",
        logo: "/assets/logo/TataCliq.png",
        tagline: "Luxury and sustainability combined",
        rating: 4.6,
        category: "Fashion & Lifestyle",
        certifications: ["PETA Certified"],
        priceRange: 2500,
        productTypes: ["Handmade"],
        products: [
          { id: 1101, name: "Organic Linen Blazer", price: 6499, image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021533182_437Wx649H_202403131228011.jpeg", stockCount: 25, sizes: ["S", "M", "L"] },
          { id: 1102, name: "Recycled Wool Coat", price: 7999, image: "https://img.tatacliq.com/images/i21//437Wx649H/MP000000024669911_437Wx649H_202412081915421.jpeg", stockCount: 18, sizes: ["S", "M", "L"] },
          { id: 1103, name: "Sustainable Leather Shoes", price: 5999, image: "https://img.tatacliq.com/images/i21//437Wx649H/MP000000024775192_437Wx649H_202412210323431.jpeg", stockCount: 20, sizes: ["38", "39", "40", "41"] },
          { id: 1104, name: "Eco-Friendly Handbag", price: 3999, image: "https://img.tatacliq.com/images/i21//97Wx144H/MP000000024938523_97Wx144H_202501041156352.jpeg", stockCount: 30, sizes: ["One Size"] },
          { id: 1105, name: "Luxury Organic Silk Saree", price: 9999, image: "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018992105_437Wx649H_202308310317212.jpeg", stockCount: 12, sizes: ["Free Size"] },
          { id: 1106, name: "Recycled Fabric Joggers", price: 2499, image: "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017503968_437Wx649H_202305110308311.jpeg", stockCount: 28, sizes: ["S", "M", "L"] },
          { id: 1107, name: "Bamboo Fiber Shirt", price: 3299, image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025545695_437Wx649H_202503012053271.jpeg", stockCount: 22, sizes: ["S", "M", "L"] },
          { id: 1108, name: "Organic Cotton Scarf", price: 1599, image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022479487_437Wx649H_202406041926101.jpeg", stockCount: 35, sizes: ["One Size"] },
          { id: 1109, name: "Handcrafted Wooden Watch", price: 7999, image: "https://img.tatacliq.com/images/i22//97Wx144H/MP000000025487545_97Wx144H_202502231837321.jpeg", stockCount: 10, sizes: ["One Size"] },
          { id: 1110, name: "Eco-Friendly Perfume Set", price: 5499, image: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000007907114_437Wx649H_202205180759521.jpeg", stockCount: 20, sizes: ["One Size"] }
        ]
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
          { id: 1201, name: "Eco-friendly Midi Dress", price: 2299, image: "https://images.bestsellerclothing.in/data/vero-moda/20-jan-2025/901376004_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 20, size: ["S", "M", "L"] },
          { id: 1202, name: "Sustainable Denim Jacket", price: 2799, image: "https://images.bestsellerclothing.in/data/vero-moda/4-aug-2023/263864702_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 15, size: ["S", "M", "L"] },
          { id: 1203, name: "Recycled Cotton Blouse", price: 1899, image: "https://images.bestsellerclothing.in/data/vero-moda/20-jan-2025/900767801_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 25, size: ["M", "L", "XL"] },
          { id: 1204, name: "Upcycled Wool Sweater", price: 2399, image: "https://images.bestsellerclothing.in/data/vero-moda/31-aug-2023/246270701_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 30, size: ["S", "M", "L", "XL"] },
          { id: 1205, name: "Organic Cotton Skirt", price: 1799, image: "https://images.bestsellerclothing.in/data/vero-moda/02-aug-2024/900900101_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 40, size: ["S", "M", "L"] },
          { id: 1206, name: "Eco Wool Coat", price: 3499, image: "https://images.bestsellerclothing.in/data/vero-moda/01-nov-2024/141922301_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 18, size: ["M", "L", "XL"] },
          { id: 1207, name: "Recycled Polyester T-shirt", price: 1499, image: "https://images.bestsellerclothing.in/data/vero-moda/11-march-2025/901376501_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 50, size: ["S", "M", "L", "XL"] },
          { id: 1208, name: "Organic Cotton Pants", price: 1899, image: "https://images.bestsellerclothing.in/data/vero-moda/20-jan-2025/900720001_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 35, size: ["S", "M", "L", "XL"] },
          { id: 1209, name: "Vegan Leather Bag", price: 2599, image: "https://images.bestsellerclothing.in/data/vero-moda/fab-20-2023/120562301_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 20, size: ["One size"] },
          { id: 1210, name: "Recycled Denim Shorts", price: 1799, image: "https://images.bestsellerclothing.in/data/vero-moda/15-mar-2024/264411101_g1.jpg?width=300&height=400&mode=fill&fill=blur&format=auto&dpr=1.2", stockCount: 30, size: ["S", "M", "L"] }
        ]
      },
      {
        id: 13,
        name: "Bohobi Apparel",
        logo: "/assets/logo/bohobi.png",
        tagline: "Sustainable fashion with a touch of elegance.",
        rating: 4.7,
        category: "Fashion",
        certifications: ["Fair Trade", ],
        priceRange: 1500,
        productTypes: [ "Vegan", "Organic"],
        products: [
          { id: 1301, name: "GLowup Dress", price: 1499, image: "https://bohobi.com/cdn/shop/files/32_9ac85593-8d55-4315-a714-e0c69e138d90.png?v=1695796005&width=800", stockCount: 50, size: ["S", "M", "L"] },
          { id: 1302, name: "Athena Corset", price: 2499, image: "https://bohobi.com/cdn/shop/files/21.png?v=1689947824&width=1000", stockCount: 30, size: ["M", "L", "XL"] },
          { id: 1303, name: "Sunowner Dress", price: 999, image: "https://bohobi.com/cdn/shop/files/51.png?v=1690117774&width=1000", stockCount: 40, size: ["S", "M", "L", "XL"] },
          { id: 1304, name: "Cutwork Embroidery Dress", price: 2199, image: "https://bohobi.com/cdn/shop/files/134.png?v=1691753102&width=1000", stockCount: 25, size: ["One size"] },
          { id: 1305, name: "Classic Lilac Dress", price: 1799, image: "https://bohobi.com/cdn/shop/products/D1098_A-2.jpg?v=1664792644&width=1000", stockCount: 30, size: ["One size"] },
          { id: 1306, name: "Beige Printed Nightsuit", price: 1999, image: "https://bohobi.com/cdn/shop/products/1_f5eed697-7bd7-4f62-a521-373491ac0d7e.jpg?v=1639746956&width=1000", stockCount: 45, size: ["M", "L", "XL"] },
          { id: 1307, name: "Flamingo Loungewear", price: 2299, image: "https://bohobi.com/cdn/shop/products/2_5e29cbfb-d040-409c-aaa3-41aef874cc0d.jpg?v=1609860547&width=1000", stockCount: 40, size: ["S", "M", "L", "XL"] },
          { id: 1308, name: "Bow Sparkling", price: 499, image: "https://bohobi.com/cdn/shop/products/HC077_C.jpg?v=1609231129&width=1000", stockCount: 100, size: ["One size"] },
          { id: 1309, name: "Makeup Bag", price: 2599, image: "https://bohobi.com/cdn/shop/products/MB009_B.jpg?v=1610225808&width=1000", stockCount: 15, size: ["M", "L", "XL"] },
          { id: 1310, name: "Printed SHort Dress", price: 1499, image: "https://bohobi.com/cdn/shop/products/1_b5b74e7e-6c49-4c16-a92c-da5448373216.jpg?v=1583576854&width=1000", stockCount: 60, size: ["S", "M", "L"] }
        ]
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
          { id: 1401, name: "Eco Running Shoes", price: 2999, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/379438/15/mod01/fnd/IND/fmt/png/Conduct-Pro-Unisex-Running-Shoes", stockCount: 25, size: ["7", "8", "9", "10"] },
          { id: 1402, name: "Recycled Polyester Track Pants", price: 1999, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/631472/01/mod01/fnd/IND/fmt/png/T7-ICONIC-Men's-Relaxed-Fit-Track-Pants", stockCount: 30, size: ["S", "M", "L"] },
          { id: 1403, name: "Vegan Sport Shoes", price: 3499, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311767/03/sv02/fnd/IND/fmt/png/Galaxis-Pro-Men's-Performance-Boost-Running-Shoes", stockCount: 20, size: ["7", "8", "9", "10"] },
          { id: 1404, name: "Recycled Material Hoodie", price: 2799, image: "https://www.puma.com/media/recycled_hoodie.jpg", stockCount: 40, size: ["S", "M", "L", "XL"] },
          { id: 1405, name: "Sustainable Joggers", price: 2299, image: "https://www.puma.com/media/sustainable_joggers.jpg", stockCount: 35, size: ["M", "L", "XL"] },
          { id: 1406, name: "Eco-friendly Hoodie", price: 1499, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/675437/01/mod01/fnd/IND/fmt/png/Camo-Graphic-Women's-Regular-Fit-Hoodie", stockCount: 50, size: ["S", "M", "L", "XL"] },
          { id: 1407, name: "Vegan Sports Bag", price: 1899, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092271/01/mod01/fnd/IND/fmt/png/PUMA-PHASE-PATCH-Unisex-Backpack", stockCount: 45, size: ["One size"] },
          { id: 1408, name: "Organic Cotton Socks", price: 699, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/687127/02/fnd/IND/fmt/png/Heritage-Striped-Unisex-Short-Crew-Socks-Pack-of-3", stockCount: 100, size: ["One size"] },
          { id: 1409, name: "Recycled Plastic Water Bottle", price: 899, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/054277/01/fnd/IND/fmt/png/PUMA-Sportstyle-Training-Water-Bottle-600ml", stockCount: 60, size: ["One size"] },
          { id: 1410, name: "Eco-friendly Cap", price: 999, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/052919/01/fnd/IND/fmt/png/Embroidered-Logo-Unisex-Cap", stockCount: 30, size: ["One size"] }
        ]
      },
      {
        id: 15,
        name: "Reebok Green",
        logo: "/assets/logo/ReebokGreen.png",
        tagline: "Sustainable performance with every step",
        rating: 4.7,
        category: "Sportswear & Footwear",
        certifications: ["Fair Trade"],
        priceRange: 3500,
        productTypes: ["Organic"],
        products: [
          { id: 1501, name: "Recycled Fabric Sneakers", price: 4999, image: "https://www.reebokindia.co.in/images/large/60692448463878/Green__Black__White_Reebok_Classic_Legac_146_2_ZOOM.jpg", stockCount: 25, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1502, name: "Eco-Friendly Running Shoes", price: 6499, image: "https://www.reebokindia.co.in/images/large/60692448463878/Black__Black__Black_Reebok_Kanghyuk_Prem_1212_2_ZOOM.jpg", stockCount: 20, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1503, name: "Sustainable Workout Shorts", price: 2499, image: "https://www.reebokindia.co.in/images/large/60692448463878/Black_Reebok_United_By_Fitness_Training__911_ZOOM.jpg", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 1504, name: "Red Workout Plus Shoes", price: 2999, image: "https://www.reebokindia.co.in/images/large/60692448463878/Red_Reebok_Workout_Plus__NIF562091_1282_2_ZOOM.jpg", stockCount: 15, sizes: ["One Size"] },
          { id: 1505, name: "Recycled Polyester T-Shirt", price: 1799, image: "https://www.reebokindia.co.in/images/large/60692448463878/Black_Reebok_by_Pyer_Moss_Hoodie__ACJ730_4_ZOOM.jpg", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 1506, name: "Eco-Friendly Sports Bra", price: 1599, image: "https://www.reebokindia.co.in/images/large/60692448463878/Black_Reebok_Identity_Sports_Bra__FXQ203_550_ZOOM.jpg", stockCount: 50, sizes: ["S", "M", "L"] },
          { id: 1507, name: "Sustainable Socks", price: 799, image: "https://www.reebokindia.co.in/images/large/60692448463878/White_Reebok_Classics_FoldOver_Crew_Sock_697_ZOOM.jpg", stockCount: 35, sizes: ["S", "M", "L"] },
          { id: 1508, name: "Organic Blue Cardigan Set", price: 2499, image: "https://www.reebokindia.co.in/images/large/60692448463878/Blue_Reebok_Classics_Cardigan__FDS572083_472_ZOOM.jpg", stockCount: 25, sizes: ["One Size"] },
          { id: 1509, name: "Eco-Conscious Nylon Shoes", price: 999, image: "https://www.reebokindia.co.in/images/large/60692448463878/Black__Black__White_Reebok_Classic_Nylon_1977_2_ZOOM.jpg", stockCount: 40, sizes: ["One Size"] },
          { id: 1510, name: "Recycled Polyester Hoodie", price: 4999, image: "https://www.reebokindia.co.in/images/large/60692448463878/Black__Black_Reebok_Cardi_B_Knit_Hoodie__291_ZOOM.jpg", stockCount: 18, sizes: ["S", "M", "L", "XL"] }
        ]
      },
      {
        id: 16,
        name: "Toms",
        logo: "/assets/logo/Toms.png",
        tagline: "Giving, one step at a time",
        rating: 4.5,
        category: "Footwear & Accessories",
        certifications: ["Fair Trade"],
        priceRange: 2000,
        productTypes: ["Vegan"],
        products: [
          { id: 1601, name: "Vegan Slip-Ons", price: 2499, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/SS25_L_W_10021859_VeronaSlipOn_SunsetCoralHeritageCanvas_0956.jpg?v=1740686942&width=850&crop=center", stockCount: 30, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1602, name: "Recycled Canvas Sneakers", price: 3499, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/10021397-f.jpg?v=1721397940&width=850&crop=center", stockCount: 25, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1603, name: "Sustainable Ankle Boots", price: 4499, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/FW24_L_W_10021296_BENNET_WaterResistantBlackberryNubuckLeather_0849.jpg?v=1725051001&width=850&crop=center", stockCount: 20, sizes: ["6", "7", "8", "9", "10"] },
          { id: 1604, name: "Carolina Lace-Up Shoes", price: 1499, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/SS25_P_W_10021851_CarolinaLaceUp_WhiteOnyxTexturedDenimFray1.jpg?v=1738349042&width=850&crop=center", stockCount: 40, sizes: ["One Size"] },
          { id: 1605, name: "Vegan Sandals", price: 1999, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/10020749-f.jpg?v=1721405954&width=850&crop=center", stockCount: 35, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1606, name: "Eco-Conscious Sock", price: 2999, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/10020492-b.jpg?v=1721406086&width=850&crop=center", stockCount: 30, sizes: ["One Size"] },
          { id: 1607, name: "Hand Woven Sandals", price: 799, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/10021990-f.jpg?v=1740686954&width=850&crop=center", stockCount: 50, sizes: ["One Size"] },
          { id: 1608, name: "Vegan Sneakers", price: 3499, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/SS24_L_W_10020739_Claudine_NaturalYarnDye_2276.png?v=1721405997&width=850&crop=center", stockCount: 28, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1609, name: "Sustainable TShirt", price: 2499, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/10018278-f.jpg?v=1721406001&width=850&crop=center", stockCount: 22, sizes: ["S", "M", "L", "XL"] },
          { id: 1610, name: "Traveler Sunglasses", price: 1999, image: "https://cdn.shopify.com/s/files/1/0741/0529/1043/files/FW24_Beyond_L_W_10021681_ADELAIDE_TRAVELER-ADELAIDEMATTESHINYMIDNIGHTPLUMCRYSTALFADEDARKGREY_0012.jpg?v=1723437609&width=850&crop=center", stockCount: 30, sizes: ["7", "8", "9", "10", "11"] }
        ]
      },
      {
        id: 17,
        name: "Nike Move to Zero",
        logo: "/assets/logo/NikeMoveToZero.png",
        tagline: "Move to Zero is Nike’s journey toward zero carbon and zero waste.",
        rating: 4.9,
        category: "Sportswear & Footwear",
        certifications: ["PETA Certified"],
        priceRange: 4000,
        productTypes: ["Vegan", "Handmade"],
        products: [
          { id: 1701, name: "Recycled Fabric Running Shoes", price: 5999, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2394824-f1c2-4f45-beed-3f13c21b70c4/NIKE+JOURNEY+RUN+PRM.png", stockCount: 30, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1702, name: "Sustainable T-Shirt", price: 2499, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30dfbf4a-adf5-45be-9579-be0515c2a4e4/AS+M+NSW+PREM+ESSNTL+SUST+TEE.png", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 1703, name: "Nike Flyknit Sneakers", price: 7499, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99e724a3-be71-4337-a480-0598c73839e7/W+AIR+VAPORMAX+2023+FK.png", stockCount: 25, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1704, name: "Recycled Polyester Hoodie", price: 3999, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7beec88f-187d-4e07-b792-a783bb005dc3/AS+M+NK+REPEL+APS+PO+JACKET.png", stockCount: 35, sizes: ["S", "M", "L", "XL"] },
          { id: 1705, name: "Eco-Conscious Sports Bra", price: 1799, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a0e3418-ee0c-476c-b828-282c8ca30529/AS+W+NK+SWSH+MED+SPT+BRA.png", stockCount: 45, sizes: ["S", "M", "L"] },
          { id: 1706, name: "Sustainable Jogging Pants", price: 2999, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b90da753-e672-41eb-8e30-d25301525348/AS+W+NSW+TREND+WVN+MR+PANT.png", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 1707, name: "Recycled Bag", price: 799, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/686c81b8-8a7f-42de-b6ac-910c9641f6ed/NK+HERITAGE+DRAWSTRING.png", stockCount: 50, sizes: ["One Size"] },
          { id: 1708, name: "Organic Cotton Hat", price: 1299, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b89fc520-616e-46df-a45d-e603d8225cce/U+NK+CLUB+CAP+U+CB+FUT+WSH+L.png", stockCount: 40, sizes: ["One Size"] },
          { id: 1709, name: "Eco-Friendly Training Socks", price: 1999, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e8198e04-c83a-4d63-9609-45dd9b9d8a48/U+NK+MLTPLIER+ANKLE+2PR+-+144.png", stockCount: 30, sizes: ["S", "M", "L"] },
          { id: 1710, name: "Sustainable Gym Bag", price: 2299, image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/efc5a39b-90ec-4f91-907d-278dd6e17dd0/Y+NK+GYM+CLUB+-+SP23.png", stockCount: 35, sizes: ["One Size"] }
        ]
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
          { id: 1801, name: "Ocean Plastic Running Shoes", price: 3999, image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7cfbc1a5546c482f809db46ad8f575eb_9366/Ultraboost_5_Shoes_Pink_JH9051_HM1.jpg", stockCount: 20, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1802, name: "Recycled Swim Trunks", price: 1599, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7c04f4a6a64a63abd6ff325f3d3c9f_9366/3-Stripes_Swim_Shorts_8-Inch_Black_JG1030_21_model.jpg", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 1803, name: "Recycled Polyester Jacket", price: 4999, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcf69b59e67e4a21b5e23f449ac2dc26_9366/adidas_by_Stella_McCartney_TrueNature_Pull-on_Jacket_Yellow_JG1067_HM1.jpg", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 1804, name: "Ocean Plastic Sneakers", price: 2999, image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a3849796b5fe4d9d884b9c303f5ab9ef_9366/Everyset_versatile_training_shoes_Black_IF3199_HM4.jpg", stockCount: 22, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1805, name: "Recycled Cotton T-Shirt", price: 1599, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fccdb1685d8a4ccaa63f0dd4bbb91175_9366/Ultimate_Running_Engineered_CLIMACOOL_Tee_Green_JD7808_21_model.jpg", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 1806, name: "Ocean Plastic Hat", price: 999, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dadcbe81da1e47458df318415a8c4da6_9366/Y-3_Stripes_Cap_Grey_JM9041_01_00_standard.jpg", stockCount: 50, sizes: ["S", "M", "L"] },
          { id: 1807, name: "Recycled Polyester Shorts", price: 1799, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/21ebf78313ac46a1a2bc4b5bdaed7f95_9366/Ultimate_HEAT.RDY_Shorts_Black_IT3449_HM5_hover.jpg", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 1808, name: "Eco-friendly Running Socks", price: 899, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d448bfc56ef4fd2babb5fac04223d5e_9366/Ribbed_Socks_3_Pairs_Kids_White_JG3693_03_standard_hover.jpg", stockCount: 45, sizes: ["S", "M", "L"] },
          { id: 1809, name: "Ocean Plastic Backpack", price: 2499, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb501a1f7029419a912e6e5222dbce89_9366/Logo_Backpack_Kids_Black_JD1303_04_standard.jpg", stockCount: 15, sizes: ["One Size"] },
          { id: 1810, name: "Recycled Gym Bag", price: 1499, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/03fd68376bbe4821aba334eb9b09bb2a_9366/Yoga_Duffel_Bag_Pink_JE3222_04_standard.jpg", stockCount: 25, sizes: ["One Size"] }
        ]
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
          { id: 1901, name: "Organic Polo Tee", price: 2999, image: "https://www.lacoste.in/media/catalog/product/p/f/pf8603_ev0_20.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 1902, name: "Eco-friendly Sneakers", price: 3999, image: "https://www.lacoste.in/media/catalog/product/4/8/48sfa0066_1y5_04.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 10, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1903, name: "Recycled Cotton Sweatshirt", price: 3499, image: "https://www.lacoste.in/media/catalog/product/s/h/sh1281_132_20.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 1904, name: "Organic Cotton Shorts", price: 1799, image: "https://www.lacoste.in/media/catalog/product/g/f/gf7278_k86_20.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 1905, name: "Sustainable Leather Bag", price: 4999, image: "https://www.lacoste.in/media/catalog/product/n/h/nh4783gy_021_24.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 12, sizes: ["One Size"] },
          { id: 1906, name: "Eco-friendly Hat", price: 1499, image: "https://www.lacoste.in/media/catalog/product/r/k/rk9207_hia_34.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 40, sizes: ["M", "L"] },
          { id: 1907, name: "Recycled Sports Bra", price: 2299, image: "https://www.lacoste.in/media/catalog/product/i/f/if8139_8vm_20.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 15, sizes: ["One Size"] },
          { id: 1908, name: "Organic Cotton Socks", price: 799, image: "https://www.lacoste.in/media/catalog/product/r/a/ra9304_fwy_24.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 50, sizes: ["S", "M", "L"] },
          { id: 1909, name: "Sustainable Sneakers", price: 4299, image: "https://www.lacoste.in/media/catalog/product/4/5/45sfa0087_147_04.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 18, sizes: ["7", "8", "9", "10", "11"] },
          { id: 1910, name: "Organic Cotton Hoodie", price: 2999, image: "https://www.lacoste.in/media/catalog/product/s/h/sh6404_six_20.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=900&width=900&canvas=900:900", stockCount: 22, sizes: ["S", "M", "L", "XL"] }
        ]
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
          { id: 2001, name: "Recycled Wool Sweater", price: 4999, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710946145002_alternate10?$rl_4x5_pdp$", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 2002, name: "Organic Denim Jacket", price: 3999, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710963177001_alternate10?$rl_4x5_pdp$", stockCount: 15, sizes: ["S", "M", "L", "XL"] },
          { id: 2003, name: "Organic Cotton Shirt", price: 2999, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710854497043_alternate10?$rl_4x5_pdp$", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 2004, name: "Recycled Wool Coat", price: 7999, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710968281001_alternate10?$rl_4x5_pdp$", stockCount: 10, sizes: ["M", "L", "XL"] },
          { id: 2005, name: "Organic Cotton T-Shirt", price: 1799, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710964993001_alternate10?$rl_4x5_pdp$", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 2006, name: "Recycled Wool Scarf", price: 2499, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI455961990001_lifestyle?$rl_1x1_pdp$", stockCount: 30, sizes: ["One Size"] },
          { id: 2007, name: "Sustainable Leather Belt", price: 1999, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1287952_lifestyle?$rl_4x5_pdp$", stockCount: 40, sizes: ["S", "M", "L"] },
          { id: 2008, name: "Eco-friendly Sneakers", price: 4299, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI809965086001_lifestyle?$rl_1x1_pdp$", stockCount: 18, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2009, name: "Recycled Polyester Shorts", price: 1599, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1472295_alternate10?$rl_4x5_pdp$", stockCount: 22, sizes: ["S", "M", "L", "XL"] },
          { id: 2010, name: "Sustainable Jacket", price: 6999, image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1497084_alternate10?$rl_4x5_pdp$", stockCount: 12, sizes: ["One Size"] }
        ]
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
          { id: 2101, name: "Water<Less 501 Jeans", price: 2999, image: "https://www.levi.com/media/501_jeans.jpg", stockCount: 30, sizes: ["28", "30", "32", "34", "36"] },
          { id: 2102, name: "Sustainable Denim Shirt", price: 1999, image: "https://www.levi.com/media/denim_shirt.jpg", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 2103, name: "Water<Less 511 Slim Fit Jeans", price: 3199, image: "https://www.levi.com/media/511_jeans.jpg", stockCount: 25, sizes: ["28", "30", "32", "34", "36"] },
          { id: 2104, name: "Organic Cotton Hoodie", price: 2499, image: "https://www.levi.com/media/hoodie.jpg", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 2105, name: "Sustainable Denim Jacket", price: 3999, image: "https://www.levi.com/media/denim_jacket.jpg", stockCount: 18, sizes: ["S", "M", "L", "XL"] },
          { id: 2106, name: "Water<Less 505 Regular Fit Jeans", price: 2799, image: "https://www.levi.com/media/505_jeans.jpg", stockCount: 30, sizes: ["28", "30", "32", "34", "36"] },
          { id: 2107, name: "Sustainable T-Shirt", price: 999, image: "https://www.levi.com/media/sustainable_tee.jpg", stockCount: 45, sizes: ["S", "M", "L", "XL"] },
          { id: 2108, name: "Recycled Cotton Sweatshirt", price: 2299, image: "https://www.levi.com/media/recycled_sweatshirt.jpg", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 2109, name: "Water<Less 512 Slim Fit Jeans", price: 3199, image: "https://www.levi.com/media/512_jeans.jpg", stockCount: 22, sizes: ["28", "30", "32", "34", "36"] },
          { id: 2110, name: "Recycled Polyester Jacket", price: 4499, image: "https://www.levi.com/media/recycled_jacket.jpg", stockCount: 15, sizes: ["S", "M", "L", "XL"] }
        ]
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
          { id: 2201, name: "Eco Slip-On", price: 2499, image: "https://www.vans.com/media/eco_slipon.jpg", stockCount: 25, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2202, name: "Recycled Cotton Tee", price: 999, image: "https://www.vans.com/media/cotton_tee.jpg", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 2203, name: "Eco Old Skool Sneakers", price: 3999, image: "https://www.vans.com/media/old_skool_sneakers.jpg", stockCount: 15, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2204, name: "Recycled Skate Shoes", price: 3499, image: "https://www.vans.com/media/skate_shoes.jpg", stockCount: 20, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2205, name: "Organic Cotton Hoodie", price: 2599, image: "https://www.vans.com/media/organic_hoodie.jpg", stockCount: 30, sizes: ["S", "M", "L", "XL"] },
          { id: 2206, name: "Vegan Sneakers", price: 2999, image: "https://www.vans.com/media/vegan_sneakers.jpg", stockCount: 22, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2207, name: "Recycled Skateboard Deck", price: 1799, image: "https://www.vans.com/media/skateboard_deck.jpg", stockCount: 18, sizes: ["One Size"] },
          { id: 2208, name: "Eco-Friendly Socks", price: 799, image: "https://www.vans.com/media/eco_socks.jpg", stockCount: 50, sizes: ["S", "M", "L"] },
          { id: 2209, name: "Vegan Slip-On Shoes", price: 2499, image: "https://www.vans.com/media/vegan_slipon.jpg", stockCount: 30, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2210, name: "Recycled Cotton Shorts", price: 1799, image: "https://www.vans.com/media/cotton_shorts.jpg", stockCount: 25, sizes: ["S", "M", "L", "XL"] }
        ]
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
          { id: 2301, name: "Wool Runners", price: 2999, image: "https://www.allbirds.com/media/wool_runners.jpg", stockCount: 25, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2302, name: "Tree Runners", price: 3499, image: "https://www.allbirds.com/media/tree_runners.jpg", stockCount: 15, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2303, name: "Sugar Sole Sneakers", price: 3599, image: "https://www.allbirds.com/media/sugar_sole_sneakers.jpg", stockCount: 20, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2304, name: "Wool Loungers", price: 2799, image: "https://www.allbirds.com/media/wool_loungers.jpg", stockCount: 18, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2305, name: "Trino Sneakers", price: 3199, image: "https://www.allbirds.com/media/trino_sneakers.jpg", stockCount: 30, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2306, name: "Tree Dashers", price: 3899, image: "https://www.allbirds.com/media/tree_dashers.jpg", stockCount: 25, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2307, name: "Alpaca Wool Sneakers", price: 3599, image: "https://www.allbirds.com/media/alpaca_wool_sneakers.jpg", stockCount: 15, sizes: ["7", "8", "9", "10", "11"] },
          { id: 2308, name: "Eco Wool Coat", price: 4999, image: "https://www.allbirds.com/media/eco_wool_coat.jpg", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 2309, name: "Trino Socks", price: 799, image: "https://www.allbirds.com/media/trino_socks.jpg", stockCount: 50, sizes: ["S", "M", "L"] },
          { id: 2310, name: "Wool Slip-On Shoes", price: 2899, image: "https://www.allbirds.com/media/wool_slipon.jpg", stockCount: 30, sizes: ["7", "8", "9", "10", "11"] }
        ]
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
          { id: 2401, name: "Organic Cotton T-Shirt", price: 1299, image: "https://www.patagonia.com/media/cotton_tshirt.jpg", stockCount: 35, sizes: ["S", "M", "L", "XL"] },
          { id: 2402, name: "Recycled Nylon Jacket", price: 4999, image: "https://www.patagonia.com/media/nylon_jacket.jpg", stockCount: 20, sizes: ["S", "M", "L", "XL"] },
          { id: 2403, name: "Organic Cotton Hoodie", price: 2999, image: "https://www.patagonia.com/media/cotton_hoodie.jpg", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 2404, name: "Recycled Wool Sweater", price: 3599, image: "https://www.patagonia.com/media/wool_sweater.jpg", stockCount: 15, sizes: ["S", "M", "L", "XL"] },
          { id: 2405, name: "Recycled Polyester Shorts", price: 1799, image: "https://www.patagonia.com/media/recycled_shorts.jpg", stockCount: 40, sizes: ["S", "M", "L", "XL"] },
          { id: 2406, name: "Recycled Wool Hat", price: 1299, image: "https://www.patagonia.com/media/recycled_hat.jpg", stockCount: 30, sizes: ["S", "M", "L"] },
          { id: 2407, name: "Sustainable Tote Bag", price: 1999, image: "https://www.patagonia.com/media/sustainable_bag.jpg", stockCount: 20, sizes: ["One Size"] },
          { id: 2408, name: "Organic Cotton Socks", price: 799, image: "https://www.patagonia.com/media/cotton_socks.jpg", stockCount: 50, sizes: ["S", "M", "L"] },
          { id: 2409, name: "Sustainable Swimwear", price: 2499, image: "https://www.patagonia.com/media/swimwear.jpg", stockCount: 25, sizes: ["S", "M", "L", "XL"] },
          { id: 2410, name: "Recycled Down Jacket", price: 7999, image: "https://www.patagonia.com/media/down_jacket.jpg", stockCount: 18, sizes: ["S", "M", "L", "XL"] }
        ]
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
          { id: 2501, name: "Shea Body Butter", price: 1395, image: "https://www.thebodyshop.in/media/sheabodybutter.jpg", stockCount: 30 },
          { id: 2502, name: "Tea Tree Face Wash", price: 695, image: "https://www.thebodyshop.in/media/teatreefacewash.jpg", stockCount: 25 },
          { id: 2503, name: "Vitamin E Moisture Cream", price: 995, image: "https://www.thebodyshop.in/media/vitamine_moisture_cream.jpg", stockCount: 20 },
          { id: 2504, name: "Almond Milk & Honey Shower Gel", price: 695, image: "https://www.thebodyshop.in/media/almond_honey_showergel.jpg", stockCount: 35 },
          { id: 2505, name: "Hemp Hand Protector", price: 695, image: "https://www.thebodyshop.in/media/hemp_handprotector.jpg", stockCount: 40 },
          { id: 2506, name: "Chamomile Cleanser", price: 799, image: "https://www.thebodyshop.in/media/chamomile_cleanser.jpg", stockCount: 25 },
          { id: 2507, name: "British Rose Shower Gel", price: 895, image: "https://www.thebodyshop.in/media/british_rose_showergel.jpg", stockCount: 30 },
          { id: 2508, name: "Drops of Youth Concentrate", price: 2495, image: "https://www.thebodyshop.in/media/dropsofyouth.jpg", stockCount: 15 },
          { id: 2509, name: "Coconut Body Scrub", price: 1295, image: "https://www.thebodyshop.in/media/coconut_scrub.jpg", stockCount: 20 },
          { id: 2510, name: "Moringa Body Butter", price: 1295, image: "https://www.thebodyshop.in/media/moringa_bodybutter.jpg", stockCount: 25 }
        ]
      }
      // 
  // ...the rest of your brand data
];

const BrandDetail = () => {
  const { brandId } = useParams();
  const brand = allBrands.find((b) => b.id === Number(brandId));

  if (!brand) {
    return <div>Brand not found.</div>;
  }

  return (
    <div className="brand-detail-container">
      <div className="brand-header">
        <img src={brand.logo} alt={brand.name} className="brand-detail-logo" />
        <div>
          <h2>{brand.name}</h2>
          <p>{brand.tagline}</p>
          <span>
            {brand.rating} ★ &nbsp;•&nbsp; {brand.category} 
          </span>
        </div>
      </div>

      <h3>Products</h3>
      <div className="product-grid">
        {brand.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetail;
