import type { CollectionConfig } from "payload";
import { User } from "./user"; // user "active record (kinda) model"

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
      defaultValue: User.generateId(),
    },
  ],
};
