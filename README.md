# NextJS PokeDex

## Technologies Used

- NextJS 13.4 App Router
- Typescript
- React-query
- graph-request


## Implementation

The pokedex app is a simulation of the pokedex usable in the game and in anime. It implements and highlights
the capabilities of the architecture and technologies used. With the Poke API, the application was implemented to be able 
to be paginated and can change how many limit was changed.

It also implemented SSR and the capabilities hydrating react-query initial requests to absorb the heavy and
expensive usage from the frontend with still being able to use the functions on the front end.

Overall, only two requests where created 1) the list API, and the 2) the main pokemon API. 

One of the criteria was to ensure that the traits were also implemented on the list. Scouring the API, I have stumbled
into their GraphQL implementation, it was a good time also to showcase the capability of react-query with graphql.

Rest API was implemented for the 2nd API endpoint.

