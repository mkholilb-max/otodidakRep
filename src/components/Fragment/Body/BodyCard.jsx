import Card from "../../Elements/Card/Card";

const BodyCard = () => {
   const card = [
    {
        id: 1,
        title: 'Pengajar Native & Lokal',
        description: 'Belajar langsung dari para ahli bahasa dengan sertifikasi internasional dan pengalaman belajar bertahun-tahun.',
        image: '/images/icon-1.png'
    },
    {
        id: 2,
        title: 'Kelas Interaktif',
        description: 'Belajar dengan metode interaktif yang membuat proses belajar menjadi lebih menyenangkan dan efektif.',
        image: '/images/icon-2.png'
    },
    {
        id: 3,
        title: 'Materi Terbaru',
        description: 'Materi terbaru dan relevan dengan kebutuhan dunia kerja.',
        image: '/images/icon-2.png'
    }
   ];

   return (
    /* mx-auto biar konten di tengah, py buat jarak atas bawah */
    <div className="max-w-7xl mx-auto py-20 px-40 bg-gray-100 mt-20">
        {/* Header Section: Teks dibuat rata tengah */}
        <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Mengapa Memilih Kami
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Kami menyediakan kurikulum terbaik yang disesuaikan dengan kebutuhan dunia kerja, 
                dirancang untuk hasil maksimal.
            </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {card.map((item) => (
                <Card 
                    key={item.id}  
                >
                    <Card.Icon image={item.image} />
                    <Card.Title title={item.title} />
                    <Card.Description description={item.description} />
                </Card>
            ))}
        </div>
    </div>
   )
};

export default BodyCard;