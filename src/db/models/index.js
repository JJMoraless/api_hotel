import { User, UserShema } from "./user.model.cjs";
import { Room, RoomShema } from "./room.model.cjs";
import { Reservation, ReservationShema } from "./reservation.model.cjs";
import { Host, HostShema } from "./host.model.cjs";
import { Register, RegisterShema } from "./register.model.cjs";
import { Product, productSchema } from "./product.model.cjs";
import {
  RegisterProduct,
  RegisterProductSchema,
} from "./register-product.model.cjs";
import { Inventory, IventorySchema } from "./inventory.model.cjs";





export const setupModels = (sequelize) => {
  // Creacion modelos
  User.init(UserShema, User.config(sequelize));
  Room.init(RoomShema, Room.config(sequelize));
  Reservation.init(ReservationShema, Reservation.config(sequelize));
  Host.init(HostShema, Host.config(sequelize));
  Register.init(RegisterShema, Register.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Inventory.init(IventorySchema, Inventory.config(sequelize));
  RegisterProduct.init(
    RegisterProductSchema,
    RegisterProduct.config(sequelize)
  );

  // Creacion relaciones
  Reservation.associate(sequelize.models);
  Room.associate(sequelize.models);
  Register.associate(sequelize.models);
  Product.associate(sequelize.models);
};
