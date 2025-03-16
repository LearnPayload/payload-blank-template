import { getPayload } from "@/get-payload";
import { User as UserType } from "@/payload-types";
import { createId } from "@paralleldrive/cuid2";
import {
  CollectionSlug,
  RequiredDataFromCollectionSlug,
  SendEmailOptions,
  TypedUser,
  Where,
} from "payload";

export class User {
  collection: CollectionSlug = "users";

  constructor(public data: UserType) {}

  asTypedUser = () => {
    return { ...this.data, collection: this.collection } as TypedUser;
  };

  get id() {
    return this.data.id;
  }

  get email() {
    return this.data.email;
  }

  static create = async (data: RequiredDataFromCollectionSlug<"users">) => {
    const payload = await getPayload();
    const user = await payload.create({
      collection: "users",
      data,
    });

    return new User(user);
  };

  static updateOrCreate = async (
    lookup: Where,
    data: RequiredDataFromCollectionSlug<"users">
  ) => {
    const payload = await getPayload();
    const found = await payload.db.findOne({
      collection: "users",
      where: lookup,
    });
    if (found) {
      const user = await payload.update({
        collection: "users",
        id: found.id,
        data,
      });

      return new User(user);
    }
    const user = await payload.create({
      collection: "users",
      data,
    });

    return new User(user);
  };

  static findFirst = async (lookup: Where) => {
    const payload = await getPayload();
    const found = await payload.find({
      collection: "users",
      where: lookup,
      limit: 1,
    });
    if (found.totalDocs > 0) {
      return new User(found.docs[0]);
    }
    return null;
  };

  static findFirstOrCreate = async (
    lookup: Where,
    data: RequiredDataFromCollectionSlug<"users">
  ) => {
    const payload = await getPayload();
    const found = await payload.find({
      collection: "users",
      where: lookup,
    });
    if (found.totalDocs > 0) {
      return new User(found.docs[0]);
    }
    const user = await payload.create({
      collection: "users",
      data,
    });

    return new User(user);
  };

  async update(data: Partial<RequiredDataFromCollectionSlug<"users">>) {
    const payload = await getPayload();
    await payload.update({
      collection: "users",
      id: this.data.id,
      data,
    });
  }
  async sendEmail(message: Omit<SendEmailOptions, "to">) {
    const payload = await getPayload();
    await payload.sendEmail({ ...message, to: this.data.email });
  }
}

export const generateId = () => {
  return `user_${createId()}`;
};
