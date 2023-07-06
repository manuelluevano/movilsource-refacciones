/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServicios = /* GraphQL */ `
  subscription OnCreateServicios(
    $filter: ModelSubscriptionServiciosFilterInput
  ) {
    onCreateServicios(filter: $filter) {
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
export const onUpdateServicios = /* GraphQL */ `
  subscription OnUpdateServicios(
    $filter: ModelSubscriptionServiciosFilterInput
  ) {
    onUpdateServicios(filter: $filter) {
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
export const onDeleteServicios = /* GraphQL */ `
  subscription OnDeleteServicios(
    $filter: ModelSubscriptionServiciosFilterInput
  ) {
    onDeleteServicios(filter: $filter) {
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
export const onCreateRefacciones = /* GraphQL */ `
  subscription OnCreateRefacciones(
    $filter: ModelSubscriptionRefaccionesFilterInput
  ) {
    onCreateRefacciones(filter: $filter) {
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
export const onUpdateRefacciones = /* GraphQL */ `
  subscription OnUpdateRefacciones(
    $filter: ModelSubscriptionRefaccionesFilterInput
  ) {
    onUpdateRefacciones(filter: $filter) {
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
export const onDeleteRefacciones = /* GraphQL */ `
  subscription OnDeleteRefacciones(
    $filter: ModelSubscriptionRefaccionesFilterInput
  ) {
    onDeleteRefacciones(filter: $filter) {
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
