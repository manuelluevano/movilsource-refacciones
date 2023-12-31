import { API, graphqlOperation } from "aws-amplify";

import { useEffect, useState } from "react";
import Error from "./Error";
import { createServicios } from "../graphql/mutations";
import { toTitleCase } from "../helpers";

const Formulario = ({
  pendienteObj,
  setPendienteObj,
  pendienteEdit,
  setPendienteEdit,
  objetoPendiente,
  setReload,
  setServicioFormulario,
  fechaActual,
}) => {
  const [servicio, setServicio] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [modeloMarca, setModeloMarca] = useState("");
  const [telefono, setTelefono] = useState("");
  const [precio, setPrecio] = useState();

  const [folio, setFolio] = useState();

  const [status, setStatus] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pendienteEdit).length > 0) {
      console.log("Objeto pendiente", pendienteEdit);
      setServicio(pendienteEdit.servicio);
      setNombreCliente(pendienteEdit.nombreCliente);
      setModeloMarca(pendienteEdit.modeloMarca);
      setTelefono(pendienteEdit.telefono);
      setPrecio(pendienteEdit.precio);
      setFecha(pendienteEdit.fecha);
      setFolio(pendienteEdit.setFolio);
      setStatus(pendienteEdit.status);
    } else {
      console.log("No hay nada");
    }
  }, [pendienteEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (
      [
        servicio,
        nombreCliente,
        modeloMarca,
        telefono,
        precio,
        fecha,
        folio,
      ].includes("")
    ) {
      console.log("Hay campos vacios");
      setError(true);
      return;
    }

    const { data } = await API.graphql(
      graphqlOperation(createServicios, {
        input: {
          servicio,
          nombreCliente,
          modeloMarca,
          telefono,
          precio,
          fecha: fechaActual,
          folio,
          status,
        },
      })
    );

    console.log(data);
    setReload(true);
    setError(false);

    //reiniciar el formulario
    setServicio("");
    setNombreCliente("");
    setTelefono("");
    setPrecio("");
    setFolio("");
    setStatus(false);
    setModeloMarca("");
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mb-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-lg py-10 px-5"
        >
          <legend className="font-black text-3xl text-center mb-10">
            Registro de Servicio
          </legend>
          {error && <Error mensaje="Todos los campos son obligatorios" />}

          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              Pendiente / Servicio
            </label>
            <input
              id="tarea"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Pendiente"
              value={toTitleCase(servicio)}
              onChange={(e) => setServicio(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              Modelo y Marca del equipo
            </label>
            <input
              id="tarea"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Pendiente"
              value={toTitleCase(modeloMarca)}
              onChange={(e) => setModeloMarca(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="nombre"
              className="block font-bold text-gray-700 uppercase"
            >
              Nombre Cliente
            </label>
            <input
              id="nombre"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Nombre del cliente"
              value={toTitleCase(nombreCliente)}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="numero"
              className="block font-bold text-gray-700 uppercase"
            >
              Telefono Cliente
            </label>
            <input
              id="numero"
              type="text"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Numero de telefono cliente"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="precio"
              className="block font-bold text-gray-700 uppercase"
            >
              Precio Servicio
            </label>
            <input
              id="precio"
              type="number"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="$"
              value={precio}
              onChange={(e) => setPrecio(Number(e.target.value))}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block font-bold text-gray-700 uppercase"
            >
              Fecha
            </label>
            <input
              disabled
              id="fecha"
              type="text"
              className="border-2 bg-gray-100 w-full p-2 mt-2 rounded-md"
              value={fechaActual}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              Folio
            </label>
            <input
              id="tarea"
              type="number"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Numero de nota"
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-orange-600 w-full text-white uppercase font-bold p-3 hover:bg-orange-700 cursor-pointer transition-colors"
            value={pendienteEdit.id ? "Guardar Cambios" : "Agregar "}
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
