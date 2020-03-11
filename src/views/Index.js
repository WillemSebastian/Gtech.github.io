import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Product from "./index-sections/Product.js";
import SegmentTitle from "./index-sections/SegmentTitle.js";
import { getClothes } from "../redux/actions/shop";
import { useDispatch } from "react-redux";

function Index() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  dispatch(getClothes());
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <SegmentTitle text="Latest Product" />
          <Product text="Latest Product" />
          <SegmentTitle text="Favourite" />
          <Product text="Favourite" />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
