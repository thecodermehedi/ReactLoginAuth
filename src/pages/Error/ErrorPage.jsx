import {useRouteError} from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      {error.status === 404 ? (
        <div className="h-screen flex flex-col justify-center items-center relative font-montserrat">
          <h1 className="font-bold uppercase text-sm text-black absolute top-64">
            Oops! page not found
          </h1>
          <h1 className="font-black text-black text-[10rem] tracking-tighter">
            {error.status}
          </h1>
          <p className="font-semibold uppercase text-sm text-black absolute bottom-56 text-center">
            we are sorry, but the page you requested was <br /> not found
          </p>
        </div>
      ) : (
        <h1 className="font-bold uppercase text-sm text-black">
          {error.status}
        </h1>
      )}
    </>
  );
};

export default ErrorPage;
