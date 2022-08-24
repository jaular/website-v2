import type { ImageProps } from "next/image";
import type { CustomLinkProps } from "~/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

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
      className="inline-flex items-center space-x-0.5"
      {...props}
    >
      <span>{children}</span>
      <span>
        <ExternalLinkIcon className="w-4 h-4" />
      </span>
    </a>
  );
};

const CustomImage = (props: ImageProps) => {
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
  Image: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
