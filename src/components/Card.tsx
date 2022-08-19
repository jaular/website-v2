import Image from "next/image";

type Props = {
  title: string;
  href: string;
  imageUrl: string;
};

const Card = ({ title, href, imageUrl }: Props) => {
  return (
    <div className="relative group">
      <div className="aspect-w-2 aspect-h-1">
        <Image
          className="object-cover bg-gray-100 rounded dark:bg-black-600 group-hover:opacity-75"
          src={imageUrl}
          layout="fill"
          quality={75}
          alt={title}
          title={title}
        />
      </div>
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
