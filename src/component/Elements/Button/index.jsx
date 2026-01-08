const Button = (props) => {
    const { children, className, onClick=() => {}, type="button"} = props;
    return (
        <button className={`px-6 h-10 text-white rounded-md ${className}`} 
        type={type}
        onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;