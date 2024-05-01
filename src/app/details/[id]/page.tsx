"use client";
import ErrorBanner from "@/components/ErrorBanner";
import LoadingBanner from "@/components/LoadingBanner";
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

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between px-24 pt-12">
      <Link
        className="saira-condensed-light absolute top-4 left-4 h-8 grid place-content-center px-2 rounded-md text-sm bg-slate-500 text-white uppercase hover:shadow-md hover:bg-slate-400 transition-all duration-100"
        href="/"
      >
        Back
      </Link>
      <div className="h-full">
        {isLoading && <LoadingBanner />}
        {error && <ErrorBanner />}

        {data && (
          <div className="relative w-full h-full border border-slate-400 rounded-lg p-6">
            <h1 className="absolute -top-5 bg-slate-300 text-3xl saira-condensed-bold uppercase text-orange-700 px-2">
              {data.artObject.title}
            </h1>
            {data.artObject.webImage ? (
              <div className="flex flex-row w-full justify-center">
                <Image
                  className="w-auto max-h-full"
                  width={data.artObject.webImage.width}
                  height={data.artObject.webImage.height}
                  src={data.artObject.webImage.url}
                  alt={data.artObject.title}
                  placeholder="blur"
                  blurDataURL="/placeholder.webp"
                />
              </div>
            ) : (
              <div className="grid place-content-center h-full w-full">
                <div className="grid place-content-center h-32 w-32 rounded-full bg-orange-600 mb-8">
                  <h2 className="saira-condensed-thin text-white text-lg ">
                    NO IMG
                  </h2>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 pt-4">
              <div className="p-4 border border-slate-400 rounded">
                <p className="text-sm saira-condensed-medium uppercase text-orange-700 mb-2">
                  Description
                </p>
                <p className="text-sm saira-condensed-light ml-4">
                  {data.artObject.plaqueDescriptionEnglish ||
                    "No description available"}
                </p>
              </div>
              <div className="p-4">
                <p className="text-sm saira-condensed-medium uppercase text-orange-700 mb-2">
                  {data.artObject.scLabelLine}
                </p>
                <p className="text-sm saira-condensed-light">
                  {data.artObject.subTitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Detail;
