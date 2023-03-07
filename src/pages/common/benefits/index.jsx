import React, { useEffect, useState } from "react";
import BenefitsDesktop from "./components/BenefitsDesktop";
import BenefitsMobile from "./components/BenefitsMobile";


const Benefits = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    }
  }, []);

  return !isMobile ? <BenefitsDesktop /> : <BenefitsMobile />
};

export default Benefits;
