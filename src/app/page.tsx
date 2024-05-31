import Image from "next/image";
import Header from "../components/Header";
import Corpo from "@/components/Corpo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
        <Header/>
        <Corpo/>
        <Footer/>
    </main>
  );
}
