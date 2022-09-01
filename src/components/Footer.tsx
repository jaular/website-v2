import type { SocialNetworkProps } from "~/lib/types";

const socialNetworks: SocialNetworkProps[] = [
  {
    name: "GitHub",
    href: "https://github.com/jaular",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jos%C3%A9-aular-804656171/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full max-w-2xl mx-auto sm:px-6 lg:px-8">
      <div className="px-4 py-4 border-t border-gray-300 sm:px-0 dark:border-gray-800 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-4 md:order-2">
          {socialNetworks.map((socialNetwork) => (
            <a
              key={socialNetwork.name}
              className="focus:outline outline-offset-4 focus:outline-1 focus:outline-blue"
              href={socialNetwork.href}
              title={socialNetwork.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{socialNetwork.name}</span>
              <socialNetwork.icon
                aria-hidden="true"
                className="w-5 h-5 fill-gray-800 dark:fill-gray hover:fill-gray-800/80 dark:hover:fill-gray/80"
              />
            </a>
          ))}
        </div>
        <div className="mt-3 md:mt-0 md:order-1">
          <p className="text-sm text-center text-gray-800 dark:text-gray">
            &copy; {new Date().getFullYear()} José Aular
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
