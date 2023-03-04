import gql from "graphql-tag";
export const GET_ORIGINAL_QUERY = gql`
query getOriginal($mediaType: String!) {
    originalMovies(mediaType: $mediaType) @rest(type: "OriginalMovies", path: "/trending/{args.mediaType}/week"){
        results @type(name: "Movie") {
            id,
            title,
            backdrop_path
        }
    }
}
`;
