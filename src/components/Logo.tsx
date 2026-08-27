import Image from "next/image";
import Link from "next/link";
import logoSrc from "../../public/images/logo-stop-vidros.png";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href="/#inicio"
      className="flex shrink-0 items-center"
      aria-label={`${siteConfig.brand} – página inicial`}
    >
      <Image
        src={logoSrc}
        alt={siteConfig.brand}
        className="h-11 w-auto"
        priority
      />
    </Link>
  );
}
