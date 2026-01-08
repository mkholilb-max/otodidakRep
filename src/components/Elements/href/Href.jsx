const AHref = (props) => {
    const { href, children, className } = props;
    return (
        <a className={className} href={href}>{children}</a>
    );
}

export default AHref;