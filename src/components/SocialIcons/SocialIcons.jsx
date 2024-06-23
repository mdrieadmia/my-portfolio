import Link from "next/link";
import { FaDribbble, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div >
            <div className="text-white flex gap-10 text-xl">
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link href={''}>
                        <FaEnvelope />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link href={''}>
                        <FaGithub />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link href={''}>
                        <FaLinkedinIn />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link href={''}>
                        <FaFacebookF />
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <Link href={''}>
                        <FaDribbble />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SocialIcons;