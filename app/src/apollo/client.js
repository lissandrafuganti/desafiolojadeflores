import {ApolloClient} from 'apollo-client';
import{HttpLink} from 'apollo-link-http';
import{inMemoryCache, InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
    uri:'http://localhost:27017/desafio',
});
const client = new ApolloClient({
    link:httpLink,
    cache:new InMemoryCache(),
});

export default client;