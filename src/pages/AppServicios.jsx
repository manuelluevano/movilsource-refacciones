import { useEffect, useState } from "react";

import Formulario from "../components/Formulario";

import { API, graphqlOperation } from "aws-amplify";
import { listServicios } from "../graphql/queries";

import ListaServicios from "./ListaServicios";

function AppServicios() {
  const [pendienteObj, setPendienteObj] = useState([]);
  const [pendienteEdit, setPendienteEdit] = useState({});
  const [reload, setReload] = useState(false);

  const [fechaActual, setFechaActual] = useState("");

  // //OBTENER LOS SERVICIOS DE LA DB
  useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listServicios));

      setPendienteObj(data.listServicios.items);

      // console.log("RELOAD");
      setReload(false);
    })();
  }, [reload]);

  //OBTENER FECHA ACTUAL
  useEffect(() => {
    handleDate();
  }, []);

  const handleDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    console.log("Fecha actual", formattedToday);

    setFechaActual(formattedToday);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-12 md:flex">
          <Formulario
            setPendienteObj={setPendienteObj}
            pendienteObj={pendienteObj}
            pendienteEdit={pendienteEdit}
            setPendienteEdit={setPendienteEdit}
            setReload={setReload}
            fechaActual={fechaActual}
          />
          <ListaServicios
            pendienteObj={pendienteObj}
            setPendienteEdit={setPendienteEdit}
            setPendienteObj={setPendienteObj}
            setReload={setReload}
            fechaActual={fechaActual}
          />
        </div>
      </div>
    </>
  );
}

export default AppServicios;
