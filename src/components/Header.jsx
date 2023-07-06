import logo from "../assets/movilsource.png";

const Header = ({ MxDolar }) => {
  return (
    <>
      <div className="bg-black p-2 flex  justify-center items-center">
        <img src={logo} width={230} />
      </div>
      <div className="p-5 ml-5 flex justify-end">
        <p className="text-gray-700 uppercase">
          MXN-USD:{" "}
          <span className="text-green-800 text-xl">
            ${MxDolar && MxDolar["rates"]["MXN"]}
          </span>
        </p>
      </div>
    </>
  );
};

export default Header;
