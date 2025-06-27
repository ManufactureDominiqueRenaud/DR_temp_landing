import { cn } from "@/lib/utils";
import WarrantyForm from "./warranty-form";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

//PAGE METADTA
export const metadata: Metadata = {
  title: "Manufacture Dominique Renaud | International Warranty Registration",
  description:
    "Register your Dominique Renaud watch for international warranty coverage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <main
      className={cn(
        "flex flex-col items-center",
        "min-h-screen w-screen",
        "bg-gray-100"
      )}
    >
      <header className="w-full flex items-center justify-center md:justify-start pt-4 pb-8">
        <Image
          src="/img/logo/mdr_logotype_anthracite_rvb.svg"
          alt="Dominique Renaud Logo"
          className="w-[40svw] md:w-[30svw]"
          width={400}
          height={200}
        />
      </header>
      <WarrantyForm />
      <footer className="w-full px-8 md:px-16 flex justify-between items-center pb-4 pt-8">
        <Image
          src="/img/logo/mdr_logotype_anthracite_rvb.svg"
          alt="Dominique Renaud Logo"
          className="w-[20svw] md:w-[15svw]"
          width={200}
          height={100}
        />
        <nav>
          <ul className="flex gap-8 text-sm">
            <li>
              <Link
                href="/legal"
                className="text-sm md:text-base text-[#252426] hover:text-[#252426]/50 transition-colors"
                title="Mentions légales"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}
