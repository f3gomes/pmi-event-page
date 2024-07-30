import { cn } from "@/utils/cn";
import Link from "next/link";

interface BuyButtonProps {
  home: boolean;
  showButton: boolean;
  purchaseLink: string;
}

const BuyButton = ({ home, showButton, purchaseLink }: BuyButtonProps) => {
  return (
    <Link
      target="_blank"
      href={purchaseLink}
      className={cn(
        showButton || !home ? "hidden xl:block" : "hidden",
        "py-2.5 px-5 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-event-200 hover:brightness-125 hover:text-gray-200 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 transition duration-200 flex justify-center items-center"
      )}
    >
      Comprar
    </Link>
  );
};
export default BuyButton;
