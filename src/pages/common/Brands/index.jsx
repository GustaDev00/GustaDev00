import React, { useEffect, useState } from "react";
import BrandsDesktop from "./components/BrandDesktop";
import BrandsMobile from "./components/BrandMobile";


const Brands = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    }
  }, []);

  return !isMobile ? <BrandsDesktop /> : <BrandsMobile />
};

export default Brands;
