import { User, UserShema } from "./user.model.cjs";
import { Room, RoomShema } from "./room.model.cjs";
import { Reservation, ReservationShema } from "./reservation.model.cjs";
import { Host, HostShema } from "./host.model.cjs";
import { Register, RegisterShema } from "./register.model.cjs";
import {
  RegisterConsumable,
  RegisterConsumableSchema,
} from "./register-consumable.cjs";
import { Consumable, consumableShema } from "./consumable.model.cjs";

export const setupModels = (sequelize) => {
  // Creacion modelos
  User.init(UserShema, User.config(sequelize));
  Room.init(RoomShema, Room.config(sequelize));
  Reservation.init(ReservationShema, Reservation.config(sequelize));
  Host.init(HostShema, Host.config(sequelize));
  Register.init(RegisterShema, Register.config(sequelize));
  Consumable.init(consumableShema, Consumable.config(sequelize));
  RegisterConsumable.init(RegisterConsumableSchema, RegisterConsumable.config(sequelize));

  // Creacion relaciones
  Reservation.associate(sequelize.models);
  Room.associate(sequelize.models);
  Register.associate(sequelize.models);
};
