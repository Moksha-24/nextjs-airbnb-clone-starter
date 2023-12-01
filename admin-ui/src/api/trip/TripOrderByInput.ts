import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  tripsinfo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
