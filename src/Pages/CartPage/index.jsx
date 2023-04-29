import Navbar from "../../Components/Navbar";
import CartItems from "./CartItems";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CartItems />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
