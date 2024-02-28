"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>MySQL</li>
          <li>Python</li>
          <li>Next.js</li>
          <li>Htmx(Learning)</li>
          <li>Bash</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>VMware</li>
          <li>Docker</li>
          <li>C++</li>
          <li>Optical Fiber</li>
          {/* Add additional skills here */}
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master Degree:<br /> Telecommunications engineering <br /> Alma Mater Studiorum - Università di Bologna</li>
        <li>Bachelor Degree:<br /> Ingegneria Elettronica e Telecomunicazioni <br /> Alma Mater Studiorum - Università di Bologna</li>
        <li>High School:<br /> Scientific High School <br /> Polo liceale statale Saffo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Higher Education School in Systems Engineering for Integrated Mobility 2022/2023 edition</li>
        <li>English: B2</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <div style={{ height: "500px" }}>
        <Image src="/images/AboutMe.jpg" width={500} height={500} alt="About Me"/>
        </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-white texxt-base md:text-lg">
            With a background in Electronics Engineering from the University of Bologna, followed by a master&apos;s degree in Telecommunications Engineering, 
            I am currently working as a Service Signaling Engineer. 
            In this role, my responsibilities involve the management, enhancement, filtering, and centralization of signaling data.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            <div className="mt-8">
              <div style={{ height: "300px" }}> {/* Set a fixed height for the content */}
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default AboutSection;