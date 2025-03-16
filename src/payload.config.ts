// storage-adapter-import-placeholder
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./config/collections/users/config";
import { Media } from "./config/collections/media/config";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { env } from "./env";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  email: nodemailerAdapter({
    defaultFromAddress: "info@payloadcms.com",
    defaultFromName: "Payload",
    // Nodemailer transportOptions
    transportOptions: {
      host: env.MAIL_HOST,
      port: env.MAIL_PORT,
      auth: {},
    },
  }),
  // database-adapter-config-start
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL || "",
    },
  }),
  // database-adapter-config-end
  sharp,
  plugins: [],
});
