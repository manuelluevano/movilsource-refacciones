/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServicios = /* GraphQL */ `
  query GetServicios($id: ID!) {
    getServicios(id: $id) {
      id
      servicio
      nombreCliente
      modeloMarca
      telefono
      precio
      fecha
      folio
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServiciosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        servicio
        nombreCliente
        modeloMarca
        telefono
        precio
        fecha
        folio
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRefacciones = /* GraphQL */ `
  query GetRefacciones($id: ID!) {
    getRefacciones(id: $id) {
      id
      nombreRefaccion
      precioProvedor
      precioCliente
      stock
      imagen
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRefacciones = /* GraphQL */ `
  query ListRefacciones(
    $filter: ModelRefaccionesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRefacciones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombreRefaccion
        precioProvedor
        precioCliente
        stock
        imagen
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
