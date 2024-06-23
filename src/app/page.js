"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
import MyPhoto from "../../public/my-photo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <main className="bg-gray-900 h-full">
      <div className="container mx-auto text-white flex flex-col md:flex-row gap-10 items-center h-full overflow-hidden px-8">
        <div>
          <h3 data-aos-duration="1000" data-aos="fade-up" className="text-2xl">It&apos;s Me</h3>
          <h1 data-aos-duration="1000" data-aos="fade-up" className="text-5xl font-semibold pt-2 pb-3">MD RIEAD MIA</h1>
          <h3 data-aos-duration="1000" data-aos="fade-up" className="text-3xl font-semibold">I&apos;m a
            <span className="text-blue-300">
              <Typewriter
                words={[' Frontend Web Developer', ' MERN Stack Developer', ' Graphic Designer']}
                loop={true}
                cursor={1}
                cursorBlinking={0}
                cursorStyle='_'
                cursorColor="#2196F3"
              />
            </span>
          </h3>
          <p data-aos-duration="1000" data-aos="fade-up" className="max-w-[560px] font-light pt-3">Highly skilled Frontend Web Developer with solid knowledge about HTML, CSS, Tailwind, JavaScript
            & React JS, I am also familiar with Node JS, Express JS & Mongo DB.</p>
          <div className="pt-10">
            <Button data-aos-duration="1000" data-aos="fade-up"  className="normal-case bg-blue-300 rounded-full hover:scale-105 duration-300">Hire Me</Button>
          </div>
        </div>
        <div className="h-full flex items-end">
          <Image data-aos-duration="1000" data-aos="fade-up"  width="400" alt="My Photo" height="auto" className="w-full object-cover mt-20" src={MyPhoto}></Image>
        </div>
      </div>
    </main>
  );
}
