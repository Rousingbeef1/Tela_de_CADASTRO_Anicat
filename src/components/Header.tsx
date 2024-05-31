import Image from "next/image"
import Link from "next/link"

export default function Header(){
    
    const logo = require("../../public/assets/icons/logo.png")
    return(
            <div className="flex justify-center items-center bg-[#212121] h-[10vh]">
               <Link href="#">
                    <Image src={logo} alt="logo com menina com gato na cabeça" width={130} height={130} />
                </Link> 
            </div>
    )
}