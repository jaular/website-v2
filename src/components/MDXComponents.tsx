import type { ImageProps } from "next/future/image";
import type { CustomLinkProps } from "~/lib/types";
import Image from "next/future/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

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
        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
      </span>
    </a>
  );
};

const CustomImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      className="bg-gray-100 rounded dark:bg-black-600"
      alt={props.alt}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  );
};

const MDXComponents = {
  Image: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
