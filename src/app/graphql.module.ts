import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'https://api.zettacamp.zetta-staging.work/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({uri: uri});
  const authLink = new ApolloLink((operation, forward) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmZlYzVjMmNlNjM1YjJmYjZhODFmMmQiLCJlbWFpbCI6Im0ubXVnbmllcjJAeW9wbWFpbC5jb20iLCJpYXQiOjE2Njc4ODE4OTUsImV4cCI6MTY2Nzk2ODI5NX0.UwRcszmRPVJDQhqBL7u5JYx04nMXqKCynTW7x-QVNA8";

    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });

    return forward(operation);
  });

  return {
    link: authLink.concat(http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
