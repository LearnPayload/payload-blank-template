// user "active record (kinda) model"
import { User } from "./user";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
      unique: true,
      admin: {
        disabled: true,
      },
      defaultValue: () => User.generateId(),
    },
  ],
};
