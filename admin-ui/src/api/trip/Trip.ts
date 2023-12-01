import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  tripsinfo: JsonValue;
  updatedAt: Date;
  user?: User;
};
