import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Product from "../Product/Product";
import prodsStyle from "./Products.module.css";
import Footer from "../Footer/Footer";
import Notfound from "../Detail/Nofound";

const Products = () => {
  var showData = [];
  var productsArr = useSelector((state) => state.products.all);
  var searchArr = useSelector((state) => state.products.searchResults);
  var filtered = useSelector((state) => state.products.filtered);
  var dataState = useSelector((state) => state.dataState);
  console.log(dataState)

  if (dataState === "all") showData = productsArr;
  else if (dataState === "search") showData = searchArr;
  else if (dataState === "filter") showData = filtered;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className={prodsStyle.title1}>Products List Catalog</div>

      {showData.length === 0 ? (
        <div>
          <Notfound />
        </div>
      ) : (
        <div className={prodsStyle.contenedor}>
          {showData.map((e) => (
            <Product
              key={e._id}
              id={e._id}
              image={e.image_url}
              name={e.name}
              price={e.price}
              catArr={e.categories}
            />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Products;
