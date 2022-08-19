import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";

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

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = (props: ImageProps) => {
  return (
    <Image
      className="bg-gray-100 rounded dark:bg-black-600"
      width={600}
      height={400}
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