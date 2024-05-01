import { TFetchdataArg } from "@/types";

export function fetchQueryData({ pageParam }: TFetchdataArg, query: string) {
  return fetch(
    `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.API_KEY}&q=${query}&ps=10&p=${pageParam}`
  ).then((res) => res.json());
}
