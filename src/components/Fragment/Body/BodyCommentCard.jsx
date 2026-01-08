import Card from "../../Elements/Card/Card";

const BodyCard = () => {
   const card = [
    {
        id: 1,
        description: 'Belajar langsung dari para ahli bahasa dengan sertifikasi internasional dan pengalaman belajar bertahun-tahun.',
        image: '/images/profile.jpg',
        name: 'John Doe',
        role: 'Alumni'
    },
    {
        id: 2,
        description: 'Belajar dengan metode interaktif yang membuat proses belajar menjadi lebih menyenangkan dan efektif.',
        image: '/images/profile.jpg',
        name: 'John',
        role: 'Mahasiswa'
    },
    {
        id: 3,
        description: 'Materi terbaru dan relevan dengan kebutuhan dunia kerja.',
        image: '/images/profile.jpg',
        name: 'Doe',
        role: 'Professional'
    }
   ];

   return (
    /* mx-auto biar konten di tengah, py buat jarak atas bawah */
    <div className="max-w-7xl mx-auto py-20 px-40 bg-gray-100 mt-20">
        {/* Header Section: Teks dibuat rata tengah */}
        <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Apa kata mereka?
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Cerita sukses alumni English Pro
            </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {card.map((item) => (
                <Card 
                    key={item.id}  
                >
                    <Card.Star />
                    <Card.Description description={item.description} />
                    <Card.Profile profileImage={item.image} name={item.name} role={item.role} />
                </Card>
            ))}
        </div>
    </div>
   )
};

export default BodyCard;