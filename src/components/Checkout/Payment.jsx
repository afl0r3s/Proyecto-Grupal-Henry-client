import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_Dt4ZBItXSZT1EzmOd8yCxonL');

const Payment = ({
  
  user,
  checkoutData,
  handleBackStep,
  handleNextStep,
  handleCheckout,
}) => {
  const Cart = useSelector((state) => state.cart);
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    // if (!stripe || !elements) return;

    // const cardElement = elements.getElement(CardElement);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // if (error) {
    //   console.log("Error ======>>>>", error);
    // } else {
    //   const orderData = {
    //     payment: {
    //       gateway: "stripe",
    //       stripe: {
    //         payment_method_id: paymentMethod.id,
    //       },
    //     },
    //     shipping: {
    //       name: "stander",
    //       street: user.address,
    //       town_city: user.city,
    //       county_state: user.shippingSubdivision,
    //       postal_zip_code: user.postcode,
    //       country: user.shippingCountry,
    //     },
    //     customer: {
    //       firstname: user.firstName,
    //       lastname: user.lastName,
    //       email: user.email,
    //     },
    //     line_items: checkoutData.live.line_items,
    //     fulfillment: { shipping_method: user.shippingOptions },
    //   };

    //   handleCheckout(checkoutData.id, orderData);
      handleNextStep(e, "confirmation");
    //}
  };

  return (
    <>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
        
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement></CardElement>
              <div className="actions payment-actions">
              
                <Button
                  variant="outlined"
                  onClick={(e) => handleBackStep(e, "order-details")}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  // disabled={!stripe}
                  color="primary"
                >
                    
                   Pay ${Cart.totalPrice}
                </Button>
                
                
               
              </div>
              
            </form>
           )
          }
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default Payment;
