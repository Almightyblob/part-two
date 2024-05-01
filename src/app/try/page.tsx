"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Try() {
  function fetchData() {
    return fetch(
      "https://www.rijksmuseum.nl/api/nl/collection?key=FsrJSWS5&involvedMaker=Rembrandt+van+Rijn"
    ).then((res) => res.json());
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["rembrand"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Moop</div>
      <Link href="/">go to moop</Link>
    </main>
  );
}
