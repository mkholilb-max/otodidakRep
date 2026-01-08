import CardNew from "../../Elements/Card/CardNew"

const BodyCardNew = () => {
    const data = [
        {
            id: 1,
            level: 'Beginner',
            price: '499',
            text: 'Dasar Grammar Dan Vocab',
            text1: '2x pertemuan setiap minggu.',
            text2: 'akses materi belajar 24/7.',
            text3: '',
            image: '/images/check-mark.png'
        },
        {
            id: 2,
            level: 'Intermediate',
            price: '799',
            text: 'akses materi belajar 24/7.',
            text1: '2x pertemuan setiap minggu..',
            text2: '2x pertemuan setiap minggu.',
            text3: 'setelah menyelesaikan kelas.',
            image: '/images/check-mark.png'
        },
        {
            id: 3,
            level: 'Advanced',
            price: '999',
            text: 'akses materi belajar 24/7.',
            text1: '2x pertemuan setiap minggu..',
            text2: '2x pertemuan setiap minggu.',
            text3: 'setelah menyelesaikan kelas.',
            image: '/images/check-mark.png'
        }
    ]
    return (
        <div className="max-w-7xl mx-auto py-20 px-40 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item) => (
                    <CardNew
                        key={item.id}
                        image={item.image}
                        level={item.level}
                        price={item.price}
                        text={item.text}
                        text1={item.text1}
                        text2={item.text2}
                        text3={item.text3}
                        border={item.id === 2 ? 'secondary' : 'primary'}  
                    />
                ))}
            </div>
        </div>
    )
}

export default BodyCardNew;