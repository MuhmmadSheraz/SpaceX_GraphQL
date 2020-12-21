import React, { useState, useEffect } from "react";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import RouterMain from "./Config/router";
import { offsetLimitPagination } from "@apollo/client/utilities";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import Loader from "./components/Loader";
function App() {
  const [client, setClient] = useState<any>();

  useEffect(() => {
    const cache: any = new InMemoryCache({});
    const client = new ApolloClient({
      uri: "https://spacexdata.herokuapp.com/graphql",
      cache,
    });

    persistCache({
      cache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
    }).then(() => {
      setClient(client);
    });
  }, []);
  if (client === undefined) {
    return <Loader/>;
  }
  return (
    <ApolloProvider client={client}>
      <RouterMain />
    </ApolloProvider>
  );
}

export default App;
