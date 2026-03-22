import Button from "../Elements/Button/index.jsx"
import { useLogin } from "../../hooks/useLogin.jsx"
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode.jsx";
import { useTotalPrice } from "../../context/TotalPriceContext.jsx";

const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const { total } = useTotalPrice();
    

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('cart');
            window.location.href = '/login';
        };
    return (
        <div className="flex justify-end items-center h-15 bg-cyan-700 text-white px-10 ">
            {username}
            <Button className="bg-blue-500 ml-5" onClick={handleLogout}>
                Logout
            </Button>
             <Button className={`m-5 ${isDarkMode ? "bg-slate-700 text-white" : "bg-slate-300 text-black"}`} onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                Item: {totalCart} | price: {total.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                })}
            </div>
        </div>
    )
}

export default Navbar