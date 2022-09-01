import Link from "next/link";
import useSWR from "swr";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import fetcher from "~/lib/fetcher";
import Spinner from "./Spinner";

type Props = {
  title: string;
  slug: string;
  publishedAt: string;
};

const BlogPost = ({ title, slug, publishedAt }: Props) => {
  const { data } = useSWR<{ total: number }>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  return (
    <li className="relative py-4 group first:pt-0 last:pb-0">
      <div className="flex items-center justify-between space-x-8">
        <div className="space-y-1">
          <Link href={`/blog/${slug}`}>
            <a className="text-base text-gray-800 sm:text-lg dark:text-gray group-hover:text-blue dark:group-hover:text-blue focus:outline outline-offset-4 focus:outline-1 focus:outline-blue focus:text-blue dark:focus:text-blue">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </Link>
          <p className="text-xs text-gray-800 capitalize dark:text-gray">
            {format(parseISO(publishedAt), "MMM dd, yyyy", { locale: es })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-800 dark:text-gray whitespace-nowrap">
            {views > 0 ? `${views.toLocaleString()} visitas` : <Spinner />}
          </p>
        </div>
      </div>
    </li>
  );
};

export default BlogPost;
