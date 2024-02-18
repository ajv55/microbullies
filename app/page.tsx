import Image from "next/image";
import pup from '../public/pup.jpeg';

//components
import Nav from "./components/nav";
import Header from "./components/header";
import Pup from "./components/pup";
import Pups from "./components/pups";

export default function Home() {
  return (
    <div>
        <div style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.3)), url("/pup2.jpeg")'
      }} className="bg-center bg-repeat min-h-screen max-h-screen md:bg-no-repeat md:bg-cover lg:max-w-full lg:max-h-screen lg:bg-cover lg:bg-no-repeat border border-red-300 flex flex-col justify-center items-start p-2">
        <Header />
      </div>
      <Pup />
    </div>
    
  );
}
