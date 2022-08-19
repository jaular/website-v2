import type { Post } from "contentlayer/generated";
import { Suspense } from "react";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import Container from "~/components/Container";
import ViewCounter from "~/components/ViewCounter";

type Props = {
  post: Post;
  children: React.ReactNode;
};

const BlogLayout = ({ post, children }: Props) => {
  return (
    <Container
      title={`José Aular | ${post.title}`}
      description={post.description}
      image={`https://jaular.vercel.app${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="space-y-8">
        <h1 className="text-4xl font-bold sm:text-5xl">{post.title}</h1>

        <div className="space-y-1 md:space-y-0 md:flex md:justify-between">
          <div>
            <p className="text-sm text-gray-800 capitalize dark:text-gray">
              José Aular |{" "}
              {format(parseISO(post.publishedAt), "MMMM dd, yyyy", {
                locale: es,
              })}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-800 dark:text-gray">
              {post.readingTime.text.slice(0, -5)} de lectura {` | `}
              <ViewCounter slug={post.slug} />
            </p>
          </div>
        </div>

        <Suspense fallback={null}>
          <div className="leading-relaxed prose max-w-none prose-article">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
};

export default BlogLayout;
