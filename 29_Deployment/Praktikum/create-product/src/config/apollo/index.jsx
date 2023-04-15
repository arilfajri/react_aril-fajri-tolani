import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://credible-chipmunk-40.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "PkpjGI6D0drvf3T3CyjiqRYP7vrl5eU2abQ5ZZFTfXVqohHAHgiLiZy8doykQDzB",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://credible-chipmunk-40.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "PkpjGI6D0drvf3T3CyjiqRYP7vrl5eU2abQ5ZZFTfXVqohHAHgiLiZy8doykQDzB",
      },
    },
  })
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
