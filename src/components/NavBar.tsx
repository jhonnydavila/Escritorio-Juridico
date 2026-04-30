import { useState } from 'react';
import { Icon } from '@iconify/react';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = ["inicio", "sobre nosotros", "servicios", "contacto"];

    return (
        <nav className="flex flex-col items-end">
            <ul className="hidden md:flex items-center gap-1.5 text-xs text-[#f9f9f9]/90 mb-1">
                <li>Tel: +58 556 1234</li>
                <li className='text-[#f9f9f9]/20'>|</li>
                <li>Email: info@escritoriojuridico.com</li>
                <li className='text-[#f9f9f9]/20'>|</li>
                <li className="cursor-pointer hover:text-yellow-400 font-bold transition-colors">LOGIN</li>
            </ul>

            <button 
                className="md:hidden text-3xl text-white transition-transform adsolute z-10 active:scale-90" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} />
            </button>

            <ul className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <li key={link}>
                        <a href={"#" + link} className="font-medium uppercase text-sm hover:text-yellow-400 transition-colors duration-300">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className={`md:hidden flex flex-col items-center justify-center gap-5 fixed top-0 left-0 -z-10 w-full h-screen bg-[#0a1936] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {links.map((link) => (
                    <li key={link}>
                        <a href={"#" + link} onClick={() => setIsOpen(false)} className="text-10 font-semibold uppercase hover:text-yellow-400">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;