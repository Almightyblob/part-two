"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type TDetailParams = {
  params: { id: string };
};

const Detail: React.FC<TDetailParams> = ({ params }) => {
  console.log(params);
  function fetchData() {
    return fetch(
      `https://www.rijksmuseum.nl/api/en/collection/${params.id}?key=${process.env.API_KEY}`
    ).then((res) => res.json());
  }

  const { data, error, isLoading } = useQuery({
    queryKey: [params.id],
    queryFn: fetchData,
  });
  console.log(process.env.NODE_ENV);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log(data);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between px-24 pt-12">
      <Link className="absolute top-4 left-4 saira-condensed-bold" href="/">
        Back
      </Link>
      <div className="h-full">
        <div className="relative w-full h-full border border-slate-400 rounded-lg p-6">
          <h1 className="absolute -top-5 bg-slate-300 text-3xl saira-condensed-bold uppercase text-orange-700 px-2">
            {data.artObject.title}
          </h1>
          <Image
            className="w-auto max-h-full"
            width={data.artObject.webImage.width}
            height={data.artObject.webImage.height}
            src={data.artObject.webImage.url}
            alt={data.artObject.title}
          />
          <div className="grid grid-cols-2 gap-2 pt-4">
            <div className="p-4 border border-slate-400 rounded">
              <p className="text-sm saira-condensed-medium uppercase text-orange-700 mb-2">
                Description
              </p>
              <p className="text-sm saira-condensed-light ml-4">
                {data.artObject.plaqueDescriptionEnglish}
              </p>
            </div>
            <div className="p-4">
              <p className="text-sm saira-condensed-medium uppercase text-orange-700 mb-2">
                {data.artObject.scLabelLine}
              </p>
              <p className="text-sm saira-condensed-light">
                {data.artObject.scLabelLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
