import Pendiente from "../components/Pendiente";

const ListaServicios = ({
  pendienteObj,
  setPendienteEdit,
  setPendienteObj,
  setReload,
  fechaActual,
}) => {
  console.log("DATOS A MOSTRAR", pendienteObj);
  return (
    <div className="md:w-1/2 lg:w-3/5 mt-10 h-screen md:overflow-y-scroll">
      {pendienteObj && pendienteObj.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Lista de Servicios
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-orange-600 font-bold ">Servicios</span>
          </p>

          {pendienteObj.map((item) => {
            return (
              <>
                <Pendiente
                  key={item.id}
                  item={item}
                  setPendienteEdit={setPendienteEdit}
                  setPendienteObj={setPendienteObj}
                  setReload={setReload}
                  fechaActual={fechaActual}
                />
              </>
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Servicios</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Agregar tus{" "}
            <span className="text-orange-700 font-bold ">Servicios</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaServicios;
