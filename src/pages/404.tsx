import type { NextPage } from "next";
import Link from "next/link";
import Container from "~/components/Container";

const Custom404: NextPage = () => {
  return (
    <Container title="404: No se pudo encontrar esta página">
      <div className="space-y-14">
        <h1 className="text-4xl font-bold sm:text-5xl">
          No se pudo encontrar esta página
        </h1>
        <div className="flex flex-col flex-none w-full mx-auto space-y-4 sm:w-auto sm:flex-row sm:items-start sm:space-y-0 sm:space-x-5">
          <div>
            <Link href="/">
              <a className="flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-white rounded outline-none bg-blue hover:opacity-75 focus:opacity-75">
                <span>Inicio</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Custom404;
