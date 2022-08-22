import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

const CustomLink = (props: CustomLinkProps) => {
  const { href, children } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1"
      {...props}
    >
      <span>{children}</span>
      <span>
        <ExternalLinkIcon className="w-4 h-4" />
      </span>
    </a>
  );
};

const RoundedImage = (props: ImageProps) => {
  return (
    <Image
      className="bg-gray-100 rounded dark:bg-black-600"
      width={1200}
      height={700}
      quality={75}
      alt=""
      {...props}
    />
  );
};

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
};

export default MDXComponents;
