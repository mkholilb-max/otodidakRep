import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";
import Button from "../Elements/Button";

const TableCard = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
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
        payload: { total: sum },
      });

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart, products]);

  return (
    <div className="w-full flex flex-col h-full">
      
      {/* TABLE */}
      <table className={`hidden sm:block w-full sm:text-sm text-left border-separate border-spacing-y-2 ${isDarkMode && "text-white"}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th className="hidden sm:table-cell">Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => {
            const product = productMap[item.id];
            if (!product) return null;

            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 8)}...</td>

                <td className="hidden sm:table-cell">
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
        </tbody>
      </table>

      {/* 🔥 STICKY TOTAL */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-3 sm:hidden">
          
          <div className="max-w-xs sm:max-w-lg md:max-w-xl mx-auto bg-slate-800 border border-slate-700 rounded-xl shadow-lg flex justify-between items-center px-4 py-3">
            
            <div>
              <p className="text-xs text-gray-400">Grand Total</p>
              <p className="text-lg font-bold text-green-400">
                {total.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>

            <Button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Checkout
            </Button>

          </div>

        </div>
)}
    </div>
  );
};

export default TableCard;