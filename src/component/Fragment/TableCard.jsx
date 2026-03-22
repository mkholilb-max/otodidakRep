import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/darkmode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCard = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const {isDarkMode} = useContext(DarkMode)
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();
  
  const productMap = Object.fromEntries(
    products.map((product) => [product.id, product])
  );

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = productMap[item.id];
        return acc + ((product?.price || 0) * item.qty);
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        }
      })

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setTotalPrice(0);
      localStorage.removeItem("cart");
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className={`text-sm text-left table-auto border-separate border-spacing-x-2 border-spacing-y-2 ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = productMap[item.id];
            if (!product) return null;

            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 8)}...</td>
                <td>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(product.price * item.qty).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}

        <tr ref={totalPriceRef}>
          <td colSpan={3} className="font-bold">
            Grand Total
          </td>
          <td className="font-bold">
            {total.toLocaleString("id-ID", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCard;