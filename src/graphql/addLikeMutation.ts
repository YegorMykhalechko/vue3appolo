import gql from "graphql-tag";
export const ADD_LIKE_MUTATION = gql`
mutation addLikeMutation($id: String!) {
    addLike @client
}
`;