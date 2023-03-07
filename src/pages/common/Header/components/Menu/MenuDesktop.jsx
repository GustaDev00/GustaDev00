import React from "react";
import { UlMenu } from "../../style";
import { GiAmpleDress } from "react-icons/gi";

const MenuDesktop = () => {
  return (
    <UlMenu>
      <li>
        <GiAmpleDress />
        <p>Novidades</p>
      </li>
      <li>Vestidos</li>
      <li>Roupas</li>
      <li>Sapatos</li>
      <li>Lingerie</li>
      <li>Acessórios</li>
      <li>OUTLET</li>
    </UlMenu>
  );
};
export default MenuDesktop;
