import { API, graphqlOperation } from "aws-amplify";
import ListCard from "../components/ListCard";
import { listRefacciones } from "../graphql/queries";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function loader() {
  return "Desde loader";
}

const Refacciones = () => {
  const datos = useLoaderData();

  console.log(datos);
  const [refacciones, setRefacciones] = useState({});
  // const [reload, setReload] = useState(false);

  //OBTENER LOS SERVICIOS DE LA DB
  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listRefacciones));

      setRefacciones(data.listRefacciones.items);

      console.log(data.listRefacciones.items);
      // setReload(false);
    })();
  }, []);

  return (
    <>
      <h2 className="font-black mt-10 mb-5 text-4xl text-center">
        Lista de Refacciones
      </h2>
      <div className=" flex-wrap flex justify-center md:flex mx-8">
        <ListCard refacciones={refacciones} />
      </div>
    </>
  );
};

export default Refacciones;
