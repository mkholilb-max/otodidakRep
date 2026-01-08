import Button from "../Elements/Button"

const CardProduct = (props) => {
    const {children} = props
    return (
        <div className="w-full max-w-xs max-h-xs bg-slate-600 border-2 border-slate-800 rounded-lg shadow mx-1 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {img} = props
    return (
            <a href="#" className="flex justify-center">
                <img src={img} alt="product" className="p-6 rounded-t-lg max-h-48" />
            </a>
    )
}

const Body = (props) => {
    const {children, name} = props
    return (
        <div className="h-full px-5 pb-5">
            <a href="#">
                <h3 className="text-xl font-semibold tracking-tight text-white">{name}</h3>
                <p className="text-white text-sm">{children}</p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props
    return (
            <div className="flex justify-between items-center px-5 pb-5">
                <span className="text-xl font-bold text-white">
                    {price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                </span>
                <Button className="bg-blue-700" onClick={() =>handleAddToCart(id)}>Add to Cart</Button>
            </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;