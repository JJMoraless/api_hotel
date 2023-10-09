import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import { ClientError } from "../../errors.js";
import { models } from "../../../libs/sequelize.js";
// Autorizacion con localStrategy

// validar las credenciales
// agrega un objeto user (sin password) al request (el que viene de la busqueda a la db)

const config = {
  usernameField: "email",
  passwordField: "password",
};

const localStrategy = new Strategy(config, async (email, password, done) => {
  try {
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      throw new ClientError("email not found");
    }

    const isMatchPass = await compare(password, user.password);
    if (!isMatchPass) {
      throw new ClientError("password mismatch");
    }
    delete user.password;

    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

export default localStrategy;
