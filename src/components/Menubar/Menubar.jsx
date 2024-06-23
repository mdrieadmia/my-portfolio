'use client'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/logo.png"

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href="/" className="flex items-center text-white font-medium transition-colors">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href="/about" className="flex items-center text-white font-medium transition-colors">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href="/skills" className="flex items-center text-white font-medium transition-colors">
                    Skills
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href="/portfolio" className="flex items-center text-white font-medium transition-colors">
                    Portfolio
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link href="/contact" className="flex items-center text-white font-medium transition-colors">
                    Contact
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
               <Link target="_blank" href="https://drive.google.com/file/d/164hc2tk_jXJU9zkvei80oc3MyzQZ1jNX/view"> 
                    <Button className="normal-case bg-blue-300 py-2 rounded-full hover:scale-105 duration-300 flex justify-center gap-2 items-center">
                        <span>Resume</span>
                        <MdDownload className="text-xl"/>
                    </Button> 
               </Link>
            </Typography>
        </ul>
    );
}
const Menubar = () => {


    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="shadow-none bg-transparent  container mx-auto fixed top-0 left-[50%] -translate-x-1/2 bg-Transparent border-none rounded-none">
            <div className="flex items-center justify-between bg-transparent text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    <Link href={'/'}>
                        <Image width={140} height={90} alt="Logo" className="h-10" src={logo} />
                    </Link>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
};

export default Menubar;