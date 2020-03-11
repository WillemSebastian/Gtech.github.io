/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, FormGroup, Input } from "reactstrap";
// core components
import { useDispatch, useSelector } from "react-redux";

function IndexHeader() {
  const dispatch = useDispatch();
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/photos/theres-always-more-shopping-to-do-picture-id888019344?s=2048x2048)"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Wear clothes that matter</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
