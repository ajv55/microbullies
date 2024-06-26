import Image from "next/image";
import pup from '../public/pup.jpeg';

//components
import Nav from "./components/nav";
import Header from "./components/header";
import Pup from "./components/pup";
import Info from "./components/info";
import Why from "./components/why";
import Ready from "./components/ready";
import Form from "./components/form";
import Micro from "./components/micro";
import What from "./components/what";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
        <div style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.3)), url("/pup2.jpeg")'
      }} className="bg-center w-full bg-repeat min-h-screen max-h-screen md:bg-no-repeat md:bg-cover lg:max-w-full lg:max-h-screen lg:bg-cover lg:bg-no-repeat flex flex-col justify-center items-start p-2">
        <Header />
      </div>
      <What />
      <Micro />
      <Pup />
      <Ready />
      <Form />
    </div>
    
  );
}
