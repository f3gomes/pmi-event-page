import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { purchaseLink } from "../navbar";

const CURRENT_YEAR = new Date().getFullYear();
const iconClass = "hover:scale-125 transition duration-200";

const LINKS = [
  {
    icon: <Linkedin className={iconClass} />,
    href: "https://www.linkedin.com/company/pmiceara/mycompany",
  },
  {
    icon: <Instagram className={iconClass} />,
    href: "https://www.instagram.com/pmiceara",
  },
  {
    icon: <Youtube className={iconClass} />,
    href: "https://www.youtube.com/channel/UCQ3OoimV8zxsGgm1vH0Sfpw",
  },
];

const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex w-full py-12 px-2 flex-col justify-center items-center bg-gray-900 text-blue-gray-50">
        <p className="text-2xl md:text-3xl text-center font-bold" color="white">
          Garanta seu ingresso e junte-se a nós!
        </p>
        <p color="white" className=" md:w-7/12 text-center my-3 !text-base">
          Não perca esta oferta exclusiva que terminará em breve.
        </p>

        <div className="flex w-fit gap-3 flex-col md:flex-row">
          <Link
            target="_blank"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 flex justify-center items-center"
            href={purchaseLink}
          >
            Comprar
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col py-4 gap-4 items-center text-white">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          color="blue-gray"
          className="text-center text-xs font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="font-bold hover:text-gray-500 transition duration-200"
          >
            Next{" "}
          </Link>
          and{" "}
          <Link
            href="https://www.material-tailwind.com/"
            target="_blank"
            className="font-bold hover:text-gray-500 transition duration-200"
          >
            Material Tailwind{" "}
          </Link>
          by{" "}
          <Link
            href="https://fgomes.vercel.app/"
            target="_blank"
            className="font-bold hover:text-gray-500 transition duration-200"
          >
            Felipe Gomes
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
