### Simple example with node + graphql.

**How to use**

```
yarn install 
yarn start
```

**How to test**

Open the interactive explorer [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

Execute some tests like that:

*Especific user*

```graphql

{
  user(id: 2) {
    id
    name
    knowledge {
      language
      frameworks
    }
  }
}

```

*All users*

```graphql

{
  allUsers
  totalUsers
}

```


**Test with [httpie](https://httpie.org/)**

```sh
http POST http://localhost:3000/graphql query="{user(id:2){id,name,knowledge{language,frameworks}}}"
```


**Stack**

* [Express](http://expressjs.com/) - Minimalist web framework for node
* [GraphQL](http://graphql.org/) - A query language for API
* [GraphQL Tools](http://dev.apollodata.com/tools/graphql-tools/index.html) - Some tools for GraphQL
* [Apollo Server Express](https://github.com/apollographql/apollo-server) - GraphQL server for Express
* [Body Parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
* [Babel](https://babeljs.io/) - JavaScript compiler.