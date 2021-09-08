import React from "react";
// import Footer from '../Footer/Footer'
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";

const Home = () => {
  // eslint-disable-next-line
  const [order, setOrder] = React.useState("");
  console.log('order:',order)
  return (
    <div>
      <NavBar setOrder={setOrder} />
      <Products />
      {/* <Footer/>  */}
    </div>
  );
};

export default Home;
