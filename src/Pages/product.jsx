
import { Fragment } from "react/jsx-runtime";
import Button from "../component/Elements/Button";
import CardProduct from "../component/Fragment/CardProduct";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Tote Bag",
        price: 300000,
        img: "/img/totebag-1.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nisi porro. Dolorum ratione sequi excepturi, dolorem neque commodi, omnis perspiciatis fuga odio vero illo sit eius, pariatur esse. Quia, dignissimos.'
    },
    {
        id: 2,
        name: "Paper Bag",
        price: 200000,
        img: "/img/totebag-1.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        name: "Paper Bag limited",
        price: 2000000,
        img: "/img/totebag-1.jpg",
        desc: 'New limited edition paper bag with exclusive design and high-quality materials for durability and style. '
    }
    
]

    const email = localStorage.getItem('email');

const ProductPage = () => {

    const [cart, setCart] = useState ([
        {
            id: 1,
            qty: 1,
        },
    ]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href='/login';
    }

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

    return (
    <Fragment>
        <div className="flex justify-end items-center h-15 bg-cyan-700 text white px-10 ">
            {email}
            <Button className="bg-blue-500 ml-5" onclick={() => handleLogout}>Logout</Button>
        </div>
        <div className="grid grid-cols-4 gap-4 py-5 max-w-7xl mx-auto">
            <div className="col-span-3 flex flex-wrap ">
            {products.map ((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header img={product.img}/>
                    <CardProduct.Body name={product.name}>{product.desc}</CardProduct.Body>
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
                <table className="text-sm text-left table-auto mt-2 border-separate border-spacing-x-"> 
                    <thead>
                        <tr>
                            <th className="">Product</th>
                            <th className="">Price</th>
                            <th className="">Quantity</th>
                            <th className="">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item)=> {
                            const product = products.find(
                                products => products.id === item.id
                            );
                            return(
                                    <tr key={item.id}>
                                        <td className="">{product.name}</td>
                                        <td className="">{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                        <td className="">{item.qty}</td>
                                        <td className="">{(product.price * item.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    </Fragment>
    );
};

export default ProductPage;