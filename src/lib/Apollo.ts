import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl5tozhbv2jml01tb1skn713r/master',
    cache: new InMemoryCache()
})