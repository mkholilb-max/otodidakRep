const Card = (props) => {
    const { children } = props;
  
    return (
        /* Hapus div pembungkus paling luar biar grid-nya nggak keganggu */
        <div className='flex flex-col justify-between items-start w-full h-full max-w-sm border border-gray-400 px-6 py-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 gap-4 bg-white'>
            {children}
        </div>
    );
}

const Icon = (props) => {
    const {image} = props;
    return (
        <img src={image} alt="icon" className="w-12 h-12 object-contain"/>
    )
}

const Title = (props) => {
    const {title} = props;
    return (
        <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
    )
}

const Description = (props) => {
    const {description} = props;
    return (
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    )
}

const Profile = (props) => {
    const {profileImage, name, role} = props;
    return (
        <div className="flex items-center gap-4 mt-4">
            <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover"/>
            <div>
                <h2 className="text-sm font-semibold text-gray-800">{name}</h2>
                <p className="text-xs text-gray-500">{role}</p>
            </div>
        </div>
    )
}

const Star = () => {
    return (
        <img src="/images/star.png" alt="Star" className="w-5 h-5 object-contain"/>
    )
}

Card.Icon = Icon;
Card.Title = Title;
Card.Description = Description;
Card.Profile = Profile;
Card.Star = Star;
export default Card;