import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import NavBar from './NavBar';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a1936] shadow-xl py-2" : "bg-transparent py-5"} text-[#f9f9f9]`}>
            
            <div className="flex items-center justify-between px-6 md:px-12 container mx-auto">

                <a className="font-medium flex gap-2 items-center">

                    <Icon icon="game-icons:injustice" className="text-[36px] md:text-[44px] text-yellow-400/80" />

                    <h2 className='text-[20px] md:text-[28px] flex flex-col leading-tight'>
                        Escritorio Jurídico
                        <span className='text-xs md:text-sm font-normal'>Familia Jimenez</span>
                    </h2>
                </a>
                
                <NavBar />
            </div>

        </header>
    );
};

export default Header;