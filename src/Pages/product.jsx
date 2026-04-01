import { Fragment } from "react/jsx-runtime";
import CardProduct from "../component/Fragment/CardProduct";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../component/Fragment/TableCard";
import Navbar from "../component/Layout/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductPage = () => {
    const [products, setProducts] = useState ([]);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    useLogin();

useEffect(() => {
    getProducts((data) => {
        setProducts(data);
    });
}, []);

    return (
    <Fragment>
        <Navbar/>
        <div className={`flex justify-center sm:flex flex-col gap-4 py-5 max-w-7xl mx-auto ${isDarkMode && "bg-slate-900"}`}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 col-span-3">
            {products.length > 0 &&
             products.map ((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header img={product.image} id={product.id}/>
                    <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer 
                    price={product.price} 
                    id={product.id}
                    />
                </CardProduct>
            ))}
            </div>
            <div className="flex flex-col justify-center items-centerh-screen overflow-x-auto">
                <h2 className="hidden sm:block text-3xl font-bold text-blue-600 ml-2.5">Shopping Cart</h2>
                <TableCard products={products}/>
            </div>
        </div>
    </Fragment>
    );
};

export default ProductPage;