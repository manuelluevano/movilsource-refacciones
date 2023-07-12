import { useEffect, useState } from "react";
import logo from "../assets/movilsource.png";
import { precioDolar } from "../helpers";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();

  const [MxDolar, setMxDolar] = useState();

  useEffect(() => {
    obtenerPrecioDolar();
  }, []);

  //OBTENER EL VALOR DE DOLAR
  const obtenerPrecioDolar = async () => {
    try {
      const response = await precioDolar();
      setMxDolar(response);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-black p-5 flex  justify-between items-center">
        <div className="items-center ">
          <img src={logo} width={230} />
        </div>
        <nav className="text-white text-xl">
          <Link
            to="/"
            className={` ${
              location.pathname === "/" ? "text-orange-600" : "text-white"
            } hover:text-orange-600 mr-5`}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className={` ${
              location.pathname === "/servicios"
                ? "text-orange-600"
                : "text-white"
            } hover:text-orange-600 mr-5`}
          >
            Servicios
          </Link>
          <Link
            to="/refacciones"
            className={` ${
              location.pathname === "/refacciones"
                ? "text-orange-600"
                : "text-white"
            } hover:text-orange-600 mr-5`}
          >
            Refacciones
          </Link>
          <Link
            to="/ventas"
            className={` ${
              location.pathname === "/ventas" ? "text-orange-600" : "text-white"
            } hover:text-orange-600 mr-5`}
          >
            Ventas
          </Link>
        </nav>
        <div className="flex items-center text-white">
          <div className="mr-2">
            <p>
              <FaUserLarge />
            </p>
          </div>
          <p className="mr-5">
            <span className="text-orange-500 text-xl">Manuel</span>
          </p>
          <div>
            <p className=" text-white uppercase">
              MXN-USD:{" "}
              <span className="mr-5 text-green-400 text-xl">
                ${MxDolar && MxDolar["rates"]["MXN"]}
              </span>
            </p>
          </div>
        </div>
        {/* <div className="pr-5 pt-5 pb-10 ml-5 flex justify-end">
        <p className="text-gray-700 uppercase">
        Total de Display: {""}
        <span className="text-green-800 text-xl">{refacciones.length}</span>
        </p>
      </div>{" "} */}
      </div>
      <Outlet />
    </>
  );
};

export default Header;
