import { Fragment } from "react/jsx-runtime";
import Button from "../component/Elements/Button";
import CardProduct from "../component/Fragment/CardProduct";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {

    const [cart, setCart] = useState ([]);
    const [totalPrice, setTotalPrice] = useState (0);
    const [products, setProducts] = useState ([]);
    const username = useLogin();

    useEffect (() => {
        setCart (JSON.parse (localStorage.getItem ('cart')) || []);
    }, [])

    useEffect (() => {
        if (cart.length > 0) {
            const sum = cart.reduce ((acc, item) => {
            const product = products.find(product => product.id === item.id);
            return acc + (product.price * item.qty);
        }, 0)
        setTotalPrice (sum);
        localStorage.setItem('cart', JSON.stringify(cart));
        } if (cart.length === 0) {
            setTotalPrice (0);
            localStorage.removeItem('cart');
        }
    }), [cart, products];

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
        window.location.href = '/login';
    };

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)){
            setCart (
                cart.map (item => 
                    item.id === id ? {...item, qty: item.qty +1} : item
                )
            )
        } else {
            setCart ([...cart, {id: id, qty: 1}])
        }
    }

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display='table-row';
        } else {
            totalPriceRef.current.style.display='none';
        }
    }, [cart]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        });
    }), [];

    return (
    <Fragment>
        <div className="flex justify-end items-center h-15 bg-cyan-700 text white px-10 ">
            {username}
            <Button className="bg-blue-500 ml-5" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="grid grid-cols-4 gap-4 py-5 max-w-7xl mx-auto">
            <div className="col-span-3 flex flex-wrap ">
            {products.length > 0 &&
             products.map ((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header img={product.image} id={product.id}/>
                    <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer 
                    price={product.price} 
                    handleAddToCart={handleAddToCart}
                    id={product.id}
                    />
                </CardProduct>
            ))}
            </div>
            <div className="col-span-1 overflow-x-auto">
                <h2 className="text-3xl font-bold text-blue-600 ml-2.5">Shopping Cart</h2>
                <table className="text-sm text-left table-auto border-separate border-spacing-x-2 border-spacing-y-2"> 
                    <thead>
                        <tr>
                            <th className="">Product</th>
                            <th className="">Price</th>
                            <th className="">Quantity</th>
                            <th className="">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.length > 0 &&
                        cart.map((item)=> {
                            const product = products.find(
                                products => products.id === item.id
                            );
                            return(
                                    <tr key={item.id}>
                                        <td className="">{product.title.substring(0,8)}...</td>
                                        <td className="">{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}</td>
                                        <td className="">{item.qty}</td>
                                        <td className="">{(product.price * item.qty).toLocaleString
                                        ('id-ID', {style: 'currency', currency: 'USD'})}</td>
                                    </tr>
                                )
                            })}
                        <tr ref={totalPriceRef}>
                            <td colSpan={3} className="font-bold">Grand Total</td>
                            <td className="font-bold">
                                {totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Fragment>
    );
};

export default ProductPage;