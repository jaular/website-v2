import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import BlogLayout from "~/layouts/BlogLayout";
import components from "~/components/MDXComponents";

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <MDXContent components={{ ...components }} />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false, // Return 404 page if path is not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug);

  return {
    props: { post },
  };
};

export default PostPage;
