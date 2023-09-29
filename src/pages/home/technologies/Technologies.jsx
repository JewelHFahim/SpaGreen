import javascript from "../../../assets/javascript.svg";
import tailwind from "../../../assets/tailwindcss.svg";
import react from "../../../assets/react.svg";
import vue from "../../../assets/vue.svg";
import angular from "../../../assets/angular.svg";
import bootstrap from "../../../assets/Bootstrap.svg";

import php from "../../../assets/PHP.svg";
import python from "../../../assets/Python.svg";
import dotNet from "../../../assets/dotNet.svg";
import nodejs from "../../../assets/Node.js.svg";
import laravel from "../../../assets/Laravel.png";
import codeIgniter from "../../../assets/CodeIgniter.svg";

import java from "../../../assets/Java.svg";
import flutter from "../../../assets/Flutter.svg";
import swift from "../../../assets/_Swift.svg";
import kotilin from "../../../assets/_Kotlin.svg";
import iconic from "../../../assets/_ionic.svg";

import AdobeXD from "../../../assets/xd 1.svg";
import Figma from "../../../assets/figma.svg";
import Photoshop from "../../../assets/photoshop-100x100.png";
import Illustrator from "../../../assets/illustrator-100x100.png";
import Sketch from "../../../assets/Sketch.svg";
import InDesign from "../../../assets/indesign (1).svg";

import firebase from "../../../assets/firebase.png";
import cloudeFlare from "../../../assets/cloudflare svgrepo com.svg";
import git from "../../../assets/git icon svgrepo com 1.svg";
import docker from "../../../assets/docker.svg";
import azure from "../../../assets/azure 01.svg";
import aws from "../../../assets/aws.svg";

const technologyCategories = [
  {
    category: "Frontend",
    technologies: [
      { title: "JavaScript", img: javascript },
      { title: "React", img: react },
      { title: "Vue", img: vue },
      { title: "Angular", img: angular },
      { title: "Bootstrap", img: bootstrap },
      { title: "Tailwind", img: tailwind },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { title: "PHP", img: php },
      { title: "Python", img: python },
      { title: "dotNet", img: dotNet },
      { title: "Node JS", img: nodejs },
      { title: "Laravel", img: laravel },
      { title: "CodeIgniter", img: codeIgniter },
    ],
  },
  {
    category: "Mobile Dev",
    technologies: [
      { title: "Java", img: java },
      { title: "Flutter", img: flutter },
      { title: "Swift", img: swift },
      { title: "React Native", img: react },
      { title: "Kotlin", img: kotilin },
      { title: "ionic", img: iconic },
    ],
  },
  {
    category: "Graphics",
    technologies: [
      { title: "AdobeXD", img: AdobeXD },
      { title: "Figma", img: Figma },
      { title: "Photoshop", img: Photoshop },
      { title: "Illustrator", img: Illustrator },
      { title: "Sketch", img: Sketch },
      { title: "InDesign", img: InDesign },
    ],
  },
  {
    category: "Others",
    technologies: [
      { title: "Firebase", img: firebase },
      { title: "Cloudeflare", img: cloudeFlare },
      { title: "Git", img: git },
      { title: "Docker", img: docker },
      { title: "Azure", img: azure },
      { title: "AWS", img: aws },
    ],
  },
];

const renderTechnologySection = (category, technologies) => (
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 border-b py-5 font-semibold">
    <h1 className=" text-[24px] min-w-[150px]">{category}</h1>

    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-between w-full gap-5 lg:gap-0">
      {technologies.map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <img src={item.img} width={50} height={50} alt="" />
          <p className="hover:text-[#61CE70]">{item.title}</p>
        </div>
      ))}
    </section>
  </div>
);

const Technologies = () => (
  <div className="xl:h-screen bg-white px-5 md:px-[40px] lg:px-[120px] py-[70px]">
    <h1 className="text-[24px] md:text-[30px] lg:text-[42px] font-semibold text-primary text-center mb-8">
      Our Technologies
    </h1>

    <div>
      {technologyCategories.map((category, i) => (
        <div key={i}>
          {renderTechnologySection(category.category, category.technologies)}
        </div>
      ))}
    </div>
  </div>
);

export default Technologies;
