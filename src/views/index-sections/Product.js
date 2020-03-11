import React from "react";
import ProductCard from "../../components/ProductCard";

// reactstrap components
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
// core components

function renderProductCard(products) {
  return products.map(x => {
    return <ProductCard data={x} key={x.title} />;
  });
}

function Product(props) {
  const newProducts = useSelector(state => state.shop.newProducts);
  const favouriteProduct = useSelector(state => state.shop.favourites);
  return (
    <>
      <div
        className="section section-product"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "100%"
        }}
      >
        <Container>
          <Row>
            {props.text === "Latest Product"
              ? renderProductCard(newProducts)
              : renderProductCard(favouriteProduct)}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Product;
