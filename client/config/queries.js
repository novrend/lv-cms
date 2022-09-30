import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($getProductId: ID!) {
    getProduct(id: $getProductId) {
      id
      name
      slug
      description
      price
      mainImg
      User {
        username
      }
      Images {
        imgUrl
        productId
        id
      }
      Category {
        name
        id
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Query($name: String!) {
    getProductsByCategory(name: $name) {
      id
      name
      slug
      description
      price
      mainImg
      User {
        username
      }
      Images {
        id
        productId
        imgUrl
      }
      Category {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Query {
    getCategories {
      id
      name
    }
  }
`;
