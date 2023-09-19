import { Strategy, ExtractJwt } from "passport-jwt";
import { ClientError } from "../../errors.js";

// comprueba si la key en el jwt es correcta AUTENTICA
// desencripta el jwt
// agrega un objeto user con los datos del payload al request

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

export default jwtStrategy;
