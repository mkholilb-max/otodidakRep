import AHref from "../../Elements/href/Href"

const Footer = () => {
    return (
        <div className="flex flex-col w-full mt-20">
            <div className="flex items-stretch px-30 py-10 justify-between gap-8">
                <div className="">
                    <div className="flex ">
                        <img className="w-4 h-4 object-cover" src="./images/logo.png" alt="" />
                        <h1 className="text-md">English Pro</h1>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Platform belajar bahasa <br /> inggris #1 di indonesia</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <AHref href="#" className="font-bold text-sm">Program</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Begginner</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Intermediate</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Advanced</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Corporate</AHref>
                </div>
                <div className="flex flex-col gap-y-2">
                    <AHref href="#" className="font-bold text-sm">Perusahaan</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Tentang Kami</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Karir</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Blog</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Kontak</AHref>
                </div>
                <div className="flex flex-col gap-y-2">
                    <AHref href="#" className="font-bold text-sm">Bantuan</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">FAQ</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Syarat & Ketentuan</AHref>
                    <AHref href="#" className="text-gray-500 text-sm">Kebijakan Privasi</AHref>
                </div>
                
            </div>
            <div className="px-30 py-15">
                <h2 className="text-xs text-gray-500">2023 English Pro Inc. All right reserved</h2>
            </div>
        </div>
    )
}

export default Footer