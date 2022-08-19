import Image from "next/image";

type Props = {
  title: string;
  href: string;
  imageUrl: string;
  width?: number;
  height?: number;
};

const Card = ({ title, href, imageUrl, width = 800, height = 400 }: Props) => {
  return (
    <div className="relative group">
      <Image
        className="bg-gray-100 rounded dark:bg-black-600 group-hover:opacity-75"
        src={imageUrl}
        width={width}
        height={height}
        quality={75}
        alt={title}
        title={title}
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
