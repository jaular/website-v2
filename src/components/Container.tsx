import type { CustomMetaProps } from "~/lib/types";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

interface Props extends CustomMetaProps {
  children: React.ReactNode;
}

const Container = ({ children, ...customMeta }: Props) => {
  const router = useRouter();
  const currentPage = router.asPath;
  const meta = {
    title: "José Aular",
    description: `Ingeniero Informático.`,
    image: "https://jaular.vercel.app/static/banner.png",
    type: "website",
    siteName: "José Aular",
    twitterUser: "@jaular",
    ...customMeta,
  };

  return (
    <>
      <Head>
        {/* Global */}
        <meta name="robots" content="follow, index" />
        <link
          rel="canonical"
          href={`https://jaular.vercel.app${currentPage}`}
        />
        {/* Primary */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta content={meta.description} name="description" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta
          property="og:url"
          content={`https://jaular.vercel.app${currentPage}`}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterUser} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* Article */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Header currentPage={currentPage} />
      <main className="w-full max-w-2xl px-4 mx-auto my-10 antialiased sm:px-6 md:my-12 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Container;
