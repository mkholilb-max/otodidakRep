import Button from "../../Elements/Button/Button";

const Body = () => {
    return (
        /* Menambahkan 'mx-auto' untuk mengetengahkan container dan 'items-center' untuk vertikal */
        <div className="mt-24 mx-auto flex flex-col md:flex-row justify-center items-center gap-12 px-4 py-4 w-full max-w-6xl">
            
            {/* Sisi Kiri: Teks dan Tombol */}
            <div className="flex flex-col gap-8 md:w-1/2">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Kuasai Bahasa Inggris Dengan <span className="text-blue-600">Percaya Diri</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Metode belajar interaktif bersama pengajar berpengalaman. Siap hadapi karir global dan studi luar negeri hanya dalam 3 bulan.
                    </p>
                    <div className="flex gap-4">
                        <Button>Coba Kelas Gratis</Button>
                        <Button variant="outline">Lihat Silabus</Button>
                    </div>
                </div>

                {/* Info Alumni */}
                <div className="flex items-center gap-4">
                    <img className="w-24 h-10 object-cover rounded-full shadow-sm" src="images/profil.png" alt="Alumni" />
                    <p className="text-sm font-medium">
                        Dipercaya oleh <span className="text-blue-600 font-bold">2.000+</span> alumni
                    </p>
                </div>
            </div>

            {/* Sisi Kanan: Gambar Hero */}
            <div className="flex justify-center md:w-1/2">
                <img className="w-full max-w-md rounded-2xl shadow-2xl" src="images/background.jpg" alt="Hero Background" />
            </div>
            
        </div>
    );
}

export default Body;