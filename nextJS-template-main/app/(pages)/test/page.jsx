"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/img/logo.png" width={300} height={300} className="mx-auto"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a web developer who's passionate about building interactive and
            responsive web applications. I've worked with various front-end
            technologies like JavaScript, React, Redux, Bootstrap, Tailwind, and
            CSS. On the back-end, I have experience with PHP, Node.js, Next.js,
            and Django. I'm continuously learning and eager to expand my skills,
            and I'm looking forward to collaborating with others to create great
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
