import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 py-3 px-5 md:px-20 items-center border-b border-neutral-200">
        <Link href="/" className={"mr-auto"}>BWRL</Link>
    </div>
  );
}
