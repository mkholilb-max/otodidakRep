import Button from "../Button/Button";

const CardNew = (props) => {
    const { level='Beginner', price, text, text1, text2, text3, image, border='primary' } = props;

    const borderClasses = {
        primary: 'border border-gray-400',
        secondary: 'border-2 border-blue-600',
    }

    return (
        /* Hapus div pembungkus paling luar biar grid-nya nggak keganggu */
        <div className={'flex flex-col justify-center items-start w-full h-full max-w-xs ' + borderClasses[border] + ' px-6 py-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 gap-6 bg-white'}>
            <h1 className="text-xl font-bold">{level}</h1>
            <h1 className="text-3xl font-bold">{price}Rb<span className="text-sm text-gray-400">/bulan</span></h1>
            <div className="bg-gray-400 w-full h-px"></div>
            <div className="flex flex-col gap-2">
                <Benefits benefits={text} image={image}/>
                <Benefits benefits={text1} image={image}/>
                <Benefits benefits={text2} image={image}/>
                <Benefits benefits={text3} image={image}/>
            </div>
            <Button variant={border === 'secondary' ? 'secondary' : 'outline'} className="mt-4 w-full">Pilih Paket</Button>
        </div>
    )
}

const Benefits = (props) => {
    const {benefits, image } = props
        return (
            <div className="flex gap-x-2">
                <img className="w-3" src={image} alt="" />
                <p className="text-xs">{benefits}</p>
            </div>
        )
}

CardNew.Benefits = Benefits;

export default CardNew;