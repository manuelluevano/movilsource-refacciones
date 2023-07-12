import { Link, Outlet, useNavigate } from "react-router-dom";

const LayoudVentas = () => {
  const navigate = useNavigate();

  return (
    <div className=" md:flex md:min-h-screen">
      <aside className="bg-orange-600 md:w-1/4 px-5 pv-10">
        <button onClick={() => navigate("/")}>Atras</button>
        <nav className="text-white text-xl text-center ">
          <Link
            className={`mt-10 block ${
              location.pathname === "/refaccionAdmin"
                ? "text-black"
                : "text-white"
            } hover:text-black mr-5`}
            to="/refaccionAdmin"
          >
            Agregar/Editar Refaccion
          </Link>
          <Link
            className={`mt-10 block ${
              location.pathname === "/servicioAdmin"
                ? "text-black"
                : "text-white"
            } hover:text-black mr-5`}
            to="/servicioAdmin"
          >
            Editar Servicio
          </Link>
          <Link
            className={`mt-10 block ${
              location.pathname === "/ventasAdmin" ? "text-black" : "text-white"
            } hover:text-black mr-5`}
            to="/ventasAdmin"
          >
            Ventas
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoudVentas;
