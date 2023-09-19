export const wrapError = (fnCrll) => {
  // este middleware es para poder mandar el error con la next function
  // y se manda dentro de otra funcion para poder validar el error con el catch
  return (req, res, next) => {
    fnCrll(req, res).catch((err) => next(err));
  };
};

// si hay error este middlware toma el error del anterioir middleware y lo maneja
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const errorResponse = {
    ok: false,
    message: err.message,
  };

  if (statusCode === 500) {
    errorResponse.location = err.stack.split("\n")[1].trim();
  }

  res.status(statusCode).json(errorResponse);
};
