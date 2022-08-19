export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

// https://github.com/vercel/swr/blob/main/examples/basic-typescript/libs/fetch.ts
