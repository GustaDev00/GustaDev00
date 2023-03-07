import React, { useState, useEffect } from "react";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import MenuDesktop from "./components/Menu/MenuDesktop";

const Header = () => {
  const [url] = useState(window.location.href);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    }
  }, []);

  return !isMobile ? (
    <>
      <HeaderDesktop url={url} />
      <MenuDesktop />
    </>
  ) : (
    <>
      <HeaderMobile url={url} />
      {/* <MenuDesktop /> */}
    </>
  );
};
export default Header;
