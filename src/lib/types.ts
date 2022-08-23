// Container Component
export type CustomMetaProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  siteName?: string;
  twitterUser?: string;
  date?: string;
};

// Header Component
export type NavigationProps = {
  name: string;
  href: string;
};

// Footer Component
export type SocialNetworkProps = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

// MySkills Component
export type SkillProps = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

// Card Component
export type CardProps = {
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

// MDXComponents Component
export type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>;

// Projects data
export type ProjectProps = {
  title: string;
  href: string;
  imageUrl: string;
};
