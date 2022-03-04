import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Webpage</title>
        <meta name="description" content="Main Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-slate-600">
        <h1 className="text-red-600">bio pag</h1>
      </div>
    </>
  );
}
