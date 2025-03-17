import { User } from "@config/collections/users/user";

async function run() {
  try {
    const user = await User.findFirst({
      email: {
        equals: "admin@example.com",
      },
    });

    if (user) {
      console.log("First user already exists");
      return;
    }
    await User.create({
      email: "admin@example.com",
      password: "1234",
    });
  } catch (error) {
    console.error(JSON.stringify(error));
    process.exit(1);
  }

  process.exit(0);
}

await run();
