import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Instagram, Twitter, Youtube } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();
const iconClass = "hover:scale-125 transition duration-200";

const LINKS = [
  {
    icon: <Instagram className={iconClass} />,
    href: "https://www.instagram.com/pmiceara/",
  },
  {
    icon: <Twitter className={iconClass} />,
    href: "",
  },
  {
    icon: <Youtube className={iconClass} />,
    href: "",
  },
  {
    icon: <Github className={iconClass} />,
    href: "",
  },
];

export function Footer() {
  return (
    <footer id="footer" className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto items-center">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center items-center bg-gray-900 text-slate-100 max-w-6xl mx-auto rounded-2xl p-5 ">
          <p
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Garanta seu lote e junte-se a nós!
          </p>
          <p color="white" className=" md:w-7/12 text-center my-3 !text-base">
            Não perca esta oferta exclusiva que terminará em breve.
          </p>
          <div className="flex w-fit gap-3 mt-2 flex-col md:flex-row">
            <Link
              target="_blank"
              className="w-fit"
              href={
                "https://www.sympla.com.br/evento/14-congresso-regional-de-gestao-projetos-e-lideranca-pmice/2441790"
              }
            >
              <Button variant={"outline"} className="text-slate-900">
                Comprar
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center !justify-between">
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className="flex w-fit justify-center gap-2">

          </div> */}
        </div>

        <div>
          <p
            color="blue-gray"
            className="text-center text-sm mt-12 font-normal !text-gray-700"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://nextjs.org/" target="_blank" className="font-bold">
              Next{" "}
            </a>
            and{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              className="font-bold"
            >
              Shadcn{" "}
            </a>
            by{" "}
            <a
              href="https://fgomes.vercel.app/"
              target="_blank"
              className="font-bold"
            >
              Felipe Gomes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
