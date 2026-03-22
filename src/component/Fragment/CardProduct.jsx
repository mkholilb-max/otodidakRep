import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slice/cartSlice"

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-xs bg-slate-600 border-2 border-slate-800 rounded-lg shadow mx-3 my-4 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {img, id} = props
    return (
            <Link to={`/product/${id}`} className="flex justify-center">
                <img src={img} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
            </Link>
    )
}

const Body = (props) => {
    const {children, name} = props;
    return (
        <div className="h-full px-3 pb-3">
            <a href="#">
                <h3 className="text-xl font-semibold tracking-tight text-white">{name.substring(0,20)}...</h3>
                <p className="text-white text-sm">{children.substring(0, 100)}</p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price, id} = props;
    const dispatch = useDispatch();
    return (
            <div className="flex justify-between items-center px-3 pb-3">
                <span className="text-md font-bold text-white">
                    {price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}
                </span>
                <Button className="bg-blue-700" onClick={() => dispatch(addToCart({id, price}))}>
                    Add to Cart
                </Button>
            </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;