import Image from "next/image"

export default function Logo(){

    return(
        <Image
        src="/Slowpoke.png"
        width={50}
        height={50}
        alt="Picture of Slowpoke"
        />
    )
}