import type { CardProps } from "~/lib/types";
import Image from "next/future/image";

const Card = ({ title, href, imageSrc }: CardProps) => {
  return (
    <div className="relative group">
      <Image
        className="object-cover bg-gray-100 rounded dark:bg-black-600 group-hover:opacity-75"
        src={imageSrc}
        placeholder="blur"
        quality={75}
        alt={title}
        title={title}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <p className="pt-2 text-base font-semibold text-gray-800 dark:text-gray">
        <a
          className="focus:outline outline-offset-4 focus:outline-1 focus:outline-blue"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          {title}
        </a>
      </p>
    </div>
  );
};

export default Card;
