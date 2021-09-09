import React, { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getProductsById } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import BeatLoader from "react-spinners/BeatLoader";
import detStyle from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const location = useLocation();
  var productDetail = useSelector((state) => state.productDetails);
  var productId = location.pathname.split("/").pop();

  const [cart, setCart] = useLocalStorage("cart", {
    productsList: [],
    totalPrice: 0,
  });

  useEffect(() => {
    dispatch(getProductsById(productId));
  }, [dispatch, productId]);

  const handleAddProduct = () => {
    if (
      productDetail &&
      !cart.productsList.find((elem) => elem._id === productDetail._id)
    ) {
      productDetail.quantity = 1;
      setCart({
        ...cart,
        productsList: [...cart.productsList, productDetail],
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div className={detStyle.padre}>
        {Object.keys(productDetail).length &&
        productDetail._id === productId ? (
          <div className={detStyle.content}>
            <div className={detStyle.info1}>
              <img src={productDetail.image_url} alt="product" />
            </div>
            <div className={detStyle.info2}>
              <div className={detStyle.data1}>{productDetail.name}</div>
              <div className={detStyle.data2}>⭐️⭐️⭐️⭐️</div>
              <div className={detStyle.data3}>$ {productDetail.price}</div>
              <div className={detStyle.data4}>
                <b>Descripción del producto: </b>
                <br />
                {productDetail.description}
              </div>
              <div className={detStyle.data5}>
                <button
                  className={detStyle.button1}
                  onClick={() => handleAddProduct()}
                >
                  {" "}
                  Agregar al carrito 🛒{" "}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <BeatLoader />
        )}
      </div>
    </div>
  );
}
