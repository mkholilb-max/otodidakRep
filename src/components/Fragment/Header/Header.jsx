import React from 'react';
import Button from '../../Elements/Button/Button';
import AHref from '../../Elements/href/Href';

const Header = (props) => {
    const {image} = props;
    return (
        /* Menambahkan 'fixed top-0 left-0 z-50' agar menempel di atas */
        <header className='sticky flex justify-between items-center w-full px-6 py-1 bg-white shadow-md shadow-neutral-600 top-0 left-0 z-50'>
            <div className='flex items-center'>
                <img src={image} alt={image} className='w-full max-w-10/100 gap-4'/>
                <h1 className='font-extrabold text-2xl text-blue-600'>EnglishPro</h1>
            </div>
            <nav className='flex justify-center items-center gap-8'>
                <div className='flex justify-center gap-6'>
                    <AHref href='#'>Program</AHref>
                    <AHref href='#'>About</AHref>
                    <AHref href='#'>Testimoni</AHref>
                </div>
                <div>
                    <Button variant="primary" size="large">Daftar Sekarang</Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;