import React from "react";

// reactstrap components
import { makeStyles } from "@material-ui/core/styles";
// core components

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 240
  }
});

function calculatePrice(props) {
  var price = props.data.count * 10000;
  return "Rp. " + price + ",00";
}

function ProductInCart(props) {
  const [count, setCounter] = React.useState(0);
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <div style={{ width: 100, height: 100 }}>
          <img style={{ flex: 1 }} src={props.data.image}></img>
        </div>
        <div>
          <h3>{props.data.title}</h3>
          <p>{props.data.detail}</p>
        </div>
        <div
          style={{
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: 100
          }}
        >
          <div style={{ fontSize: 20 }}>{props.data.count} Pcs</div>
        </div>
        <div>{calculatePrice(props)}</div>
      </div>
    </>
  );
}

export default ProductInCart;
