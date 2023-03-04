import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { RestLink } from "apollo-link-rest";

const apiKey = import.meta.env.VITE_API_KEY;

const customFetch = (uri: RequestInfo, option: RequestInit) => {
  return fetch(`${uri}?api_key=${apiKey}`, option);
};

const link = new RestLink({
  uri: "https://api.themoviedb.org/3",
  customFetch,
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link,
  cache,
});
