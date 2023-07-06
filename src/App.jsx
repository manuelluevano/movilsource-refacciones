import { useEffect, useState } from "react";
import Header from "./components/Header";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { API, graphqlOperation } from "aws-amplify";
import { listRefacciones } from "./graphql/queries";
import ListCard from "./components/ListCard";

Amplify.configure(awsconfig);

function App() {
  const [refacciones, setRefacciones] = useState({});
  // const [reload, setReload] = useState(false);
  const [MxDolar, setMxDolar] = useState();

  //OBTENER LOS SERVICIOS DE LA DB
  useEffect(() => {
    (async () => {
      //Dolar
      precioDolar();

      const { data } = await API.graphql(graphqlOperation(listRefacciones));

      setRefacciones(data.listRefacciones.items);

      console.log(data.listRefacciones.items);
      // setReload(false);
    })();
  }, []);

  const precioDolar = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.exchangerate.host/latest?base=USD&symbols=MXN",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setMxDolar(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Header MxDolar={MxDolar} />
      <h2 className="font-black mb-5 text-4xl text-center">
        Lista de Refacciones
      </h2>
      <div className=" flex-wrap flex justify-center md:flex mx-8">
        <ListCard refacciones={refacciones} />
      </div>
    </>
  );
}

export default App;
