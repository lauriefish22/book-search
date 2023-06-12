# BOOK SEARCH

## SITE

![site](./client/assets/Screenshot%202023-06-02%20at%2010.32.36%20AM.png)

-   [Live Site](https://booksearchlf.herokuapp.com/)

## Description

This project is to refactor a site that was using a RESTful API. This fully functioning app is now working using Graphql and Apollo Server rather than relying on MongoDB and Express.js.

## Technology Used and Credit

-   [Apollo](https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/)
-   [React](https://react.dev/)
-   [Bootstrap](https://getbootstrap.com/)
-   [GraphQL](https://graphql.org/)
-   [Node.js](https://nodejs.org/en)

## Code Example

This snippet of code is an example of how we use graphQL and Apollo in our queries file.

```export const GET_ME = gql`
{
me {
\_id
username
email
savedBooks {
bookId
authors
image
description
title
link
}
}
}

```

## Learning Points

This was a great opportunity to learn another way to receive and display information.  It is useful to learn a variety of ways and notice the similarities and differences off each program.
```
