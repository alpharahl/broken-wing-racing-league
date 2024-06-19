import Link from "next/link";
import discord from "@/assets/discord-logo-white.png"
import Image from "next/image";

export default async () => {
    return (
        <>
            <h3 className={"text-primary"}>Come Race With Us</h3>
            <Link href={""} className={"bg-[#5865F2] relative p-3 rounded-full"}>
                <div className="relative w-full h-full">
                    <Image src={discord.src} alt="" height={28} width={150}/>
                </div>
            </Link>
        </>
    )
}