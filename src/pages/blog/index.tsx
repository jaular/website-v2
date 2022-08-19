import type { GetStaticProps, NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { Suspense, useState } from "react";
import { allPosts } from "contentlayer/generated";
import Container from "~/components/Container";
import BlogPost from "~/components/BlogPost";

type Props = {
  posts: Post[];
};

const BlogPage: NextPage<Props> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="José Aular | Blog"
      description="Blog sobre tecnología y desarrollo web."
    >
      <div className="space-y-14">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
            {`En total, he escrito ${posts.length} artículos en mi blog`}
          </p>
          <div className="relative w-full">
            <input
              aria-label="Buscar publicaciones"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar publicaciones"
              className="block w-full px-4 py-2 text-base text-black placeholder-gray-600 bg-gray-100 rounded dark:placeholder:text-gray-800 dark:text-white dark:bg-black-600 focus:outline focus:outline-1 focus:outline-blue"
            />
            <svg
              className="absolute w-5 h-5 text-gray-600 dark:text-gray-800 right-3 top-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <Suspense fallback={null}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">Publicaciones</h2>
            {!filteredBlogPosts.length ? (
              <p className="text-gray-800 dark:text-gray">
                No se han encontrado publicaciones
              </p>
            ) : (
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-900"
              >
                {filteredBlogPosts.map((post) => (
                  <BlogPost
                    key={post.title}
                    title={post.title}
                    slug={post.slug}
                    publishedAt={post.publishedAt}
                  />
                ))}
              </ul>
            )}
          </div>
        </Suspense>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = allPosts;
  return {
    props: { posts },
  };
};

export default BlogPage;
