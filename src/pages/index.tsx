import type { NextPage } from "next";
import Link from "next/link";
import Container from "~/components/Container";
import MySkills from "~/components/MySkills";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="space-y-14">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl">José Aular</h1>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray">
            Bienvenido a mi sitio web, aquí encontrarás información sobre
            tecnología y desarrollo web.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-base font-semibold text-gray-800 dark:text-gray">
            Habilidades
          </p>
          <MySkills />
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-4">
          <div>
            <Link href="/projects">
              <a
                className="flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-white rounded outline-none bg-blue hover:opacity-75 focus:opacity-75"
                aria-label="Proyectos"
              >
                <span>Proyectos</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <a
                className="flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-black bg-gray-100 rounded outline-none dark:text-white hover:bg-gray-200 focus:bg-gray-200 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:bg-black-700"
                aria-label="Blog"
              >
                <span>Blog</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
