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
        <Link href="/">
          <a className="inline-flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-white rounded outline-none sm:w-auto bg-blue hover:opacity-75 focus:opacity-75">
            <span>Regresar</span>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Custom404;
