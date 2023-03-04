import gql from "graphql-tag";
export const GET_MOVIE_PREVIEW = gql`
query getMoviePreview($id: String!) {
    movie(id: $id) @rest(type: "Movie", path: "/movie/{args.id}"){
        id
        title
        backdrop_path
        release_date
        overview
        vote_average
        vote_count
    }
}
`;
