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

// Projects data
export type ProjectProps = {
  title: string;
  href: string;
  imageUrl: string;
};
