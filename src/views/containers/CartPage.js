import React from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components
import { makeStyles } from "@material-ui/core/styles";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Card from "@material-ui/core/Card";
import { Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import ProductInCart from "components/ProductInCart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 20
  }
});

function renderProductInCart(products) {
  return products.map(x => {
    return <ProductInCart data={x} key={x.title} />;
  });
}

function CartPage() {
  const [count, setCounter] = React.useState(0);
  const productsInCart = useSelector(state => state.cart.products);
  const classes = useStyles();
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div
          className="section section-signup"
          style={{
            backgroundImage:
              "url(https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/7582840/910/607/m2/fpnw/wm1/aqvbdcmvfcxk8i5lssqyqii7wx0jcidsbyv4kgoc3ccxf9u1d3puz6nwubi4zaxz-.jpg?1578935250&s=d8214c07ee876ddc9ea5e20cb0887cd0)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            height: "100vh",
            padding: 50
          }}
        >
          <Card className={classes.root} style={{ height: "90vh" }}>
            <Card style={{ height: "60vh", margin: 50, overflowY: "scroll" }}>
              <div style={{ padding: 20, fontWeight: "bold" }}>
                <h3>Order</h3>
              </div>
              <Divider />
              {renderProductInCart(productsInCart)}
            </Card>
            <div
              style={{
                paddingLeft: 60,
                paddingRight: 60,
                width: "100%",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <h3>Total</h3>
              <h3>Rp 90.000</h3>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Button style={{ padding: 20 }} color="primary">
                Proceed To Checkout
              </Button>
            </div>
          </Card>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default CartPage;
