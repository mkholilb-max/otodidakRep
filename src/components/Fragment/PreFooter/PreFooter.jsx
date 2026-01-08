import Button from "../../Elements/Button/Button";

const PreFooter = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center bg-blue-600 text-white py-16 px-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Siap memulai perjalanan belajar bahasa Inggris Anda?</h2>
            <p className="mb-6">Daftar sekarang dan dapatkan harga 20& untuk pendaftaran <br /> bulan ini. Slot terbatas!</p>
            <div className="flex gap-4">
                <Button variant="outline" size="" className="mt-4 border border-blue-500 bg-white text-blue-500">Daftar Sekarang</Button>
                <Button variant="outline" size="" className="mt-4 border border-white text-white">Konsultasi Gratis</Button>
            </div>
        </div>
    );
}

export default PreFooter;