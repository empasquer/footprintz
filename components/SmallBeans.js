import React from "react";
import Image from "next/image";
import svgsmallbeans from "../svg/small-beans.svg";
const SmallBeans = (props) => {
  return (
    <Image
      src={svgsmallbeans}
      alt="small pile of beans"
      width="100px"
      height="100px"
    />
  );
};
export default SmallBeans;
