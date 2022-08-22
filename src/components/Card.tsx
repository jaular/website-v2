import Image from "next/future/image";

type Props = {
  title: string;
  href: string;
  imageSrc: {
    blurDataURL: string;
    src: string;
    height: number;
    width: number;
    type?: string | undefined;
  };
};

const Card = ({ title, href, imageSrc }: Props) => {
  return (
    <div className="relative group">
      <Image
        className="h-auto max-w-full bg-gray-100 rounded  dark:bg-black-600 group-hover:opacity-75"
        src={imageSrc}
        placeholder="blur"
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
