import { ApolloClient } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { CachePersistor } from "apollo-cache-persist";
import { InMemoryCache,NormalizedCacheObject } from "apollo-cache-inmemory";
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';

const API_HOST = "https://spacexdata.herokuapp.com/graphql";
const SCHEMA_VERSION = "1";
const SCHEMA_VERSION_KEY = "apollo-schema-version";

const getApolloClient = async () => {
  const httpLink = new HttpLink({ uri: API_HOST });
  const cache = new InMemoryCache() as any;

  const persistor = new CachePersistor({
    cache,
    storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
  });

  const currentVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY);

  if (currentVersion === SCHEMA_VERSION) {
    await persistor.restore();
  } else {
    await persistor.purge();
    window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
  }

  return new ApolloClient({ link: httpLink as any, cache });
};

export default getApolloClient;