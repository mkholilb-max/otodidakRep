import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useDispatch } from "react-redux"


const CardProduct = (props) => {
    const { children } = props
    return (
        <div className="w-[75%] sm:w-full max-w-[220px] sm:max-w-sm bg-slate-600 border border-slate-800 rounded-lg shadow mx-auto my-3 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props) => {
    const { img, id } = props
    return (
        <Link to={`/product/${id}`} className="flex justify-center">
            <img 
                src={img} 
                alt="product" 
                className="p-2 sm:p-4 rounded-t-lg h-32 sm:h-52 w-full object-cover" 
            />
        </Link>
    )
}

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-2 sm:px-4 pb-2">
            <h3 className="text-sm sm:text-lg font-semibold text-white">
                {name.substring(0, 15)}...
            </h3>
            <p className="text-white text-[10px] sm:text-sm mt-1">
                {children.substring(0, 60)}
            </p>
        </div>
    )
}

const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center px-2 sm:px-4 pb-3">
            <span className="text-xs sm:text-sm font-bold text-white">
                {price.toLocaleString('id-ID', { 
                    style: 'currency', 
                    currency: 'USD' 
                })}
            </span>
            <Button 
                className="bg-blue-700 text-[10px] sm:text-sm px-2 py-1"
                onClick={() => dispatch(addToCart({ id, price }))}
            >
                +
            </Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;