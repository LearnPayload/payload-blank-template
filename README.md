# PayloadCMS Starter Template

A clean, well-structured starting point for creating a PayloadCMS app.

## 🚀 Features

- Clear organization of the project structure.
- Postgres config already set up.
- Typesafe environment variables.
- Email system with local testing via MailHog.
- Tailwind and Shadcn/UI
- Payload's beautiful admin dashboard.
- Cursor IDE Ready (includes a .cursor rules file)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── (frontend)/   # Next.js frontend routes and components
│   │   └── (payload)/    # Payload CMS admin routes
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── config/          # Payload configuration files (collections, globals, etc)
│   │   └── collections/ # Collection definitions
│   ├── env.ts           # Environment variables configuration
│   ├── payload.config.ts # Main PayloadCMS configuration
│   └── db/
        └── seed.ts      # Create your first user
├── public/              # Static assets
├── docker-compose.yml   # Docker configuration (MailHog)
├── package.json         # Project configuration and scripts
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── eslint.config.mjs    # ESLint configuration
└── .cursor/rules/...    # Contextual rules for Cursor IDE
```

## 🛠️ Prerequisites

- Node.js 16+
- PostgreSQL 14+
- pnpm
- Docker (optional, for local email testing)

## 🚦 Getting Started

1. Clone this template:

   ```bash
   pnpm dlx degit LearnPayload/payload-blank-template my-payload-app
   ```

2. Navigate to the project:

   ```bash
   cd my-payload-app
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Set up your environment variables:

   ```bash
   cp .env.example .env
   ```

5. Generate a secure PAYLOAD_SECRET:

   ```bash
   openssl rand -base64 32
   ```

   You can then copy the output to set the `PAYLOAD_SECRET` in your .env file

6. (Optional) Start the local email testing server:

   ```bash
   docker compose up -d mailhog
   ```

   The Mailhog web interface will be available at `http://localhost:8025`

7. Run init script (includes seeding first user):

   ```bash
   pnpm db:seed
   ```

   This will create an admin user with:

   - Email: admin@example.com
   - Password: 1234

8. Start the development server:
   ```bash
   pnpm dev
   ```

The admin panel will be available at `http://localhost:3000/admin`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# PayloadCMS Configuration
PAYLOAD_SECRET="your-very-secure-secret-key-here"

# Mail Configuration
# For local development with Mailhog
MAIL_MAILER="smtp"
MAIL_HOST="localhost"     # Use "mailhog" if running inside Docker network
MAIL_PORT="1025"         # Mailhog SMTP port
MAIL_USERNAME=""         # Not needed for Mailhog
MAIL_PASSWORD=""         # Not needed for Mailhog

# For production, update these with your SMTP settings:
# MAIL_HOST="smtp.example.com"
# MAIL_PORT="587"
# MAIL_USERNAME="your-email@example.com"
# MAIL_PASSWORD="your-email-password"

# Deployment Configuration
NEXT_PUBLIC_VERCEL_URL="http://localhost:3000"
```

### Email Configuration

This template uses the official PayloadCMS Nodemailer adapter for handling emails. The configuration can be found in `payload.config.ts`:

```typescript
email: nodemailerAdapter({
  defaultFromAddress: "info@payloadcms.com",
  defaultFromName: "Payload",
  transportOptions: {
    host: env.MAIL_HOST,
    port: Number(env.MAIL_PORT),
    auth: {
      user: env.MAIL_USERNAME,
      pass: env.MAIL_PASSWORD,
    },
  },
}),
```

For local development, the template includes a Docker Compose configuration for Mailhog. To use it:

1. Start the Mailhog container:

   ```bash
   docker compose up -d mailhog
   ```

2. Access the Mailhog web interface at `http://localhost:8025` to view sent emails

3. The SMTP server will be available at:
   - Host: localhost (or `mailhog` if your app is running in Docker)
   - Port: 1025

For production, update the mail configuration in your `.env` file with your actual SMTP server details.

### Database

This template uses PostgreSQL. The database configuration can be found in `src/payload.config.ts`:

## 📚 Key Concepts

### Payload Configurations/Customization

This project reserves the `src/config` folder for all Payload configurations and customizations/components, etc.

## 📦 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm serve` - Serve the production build
- `pnpm generate:types` - Generate TypeScript types for collections
- `pnpm generate:importmap` - Regenerate the import map
- `pnpm lint` - ESLint validation across the project
- `pnpm prettier` - Format all project files (excluding anything in the `(payload)` folder)
- `pnpm typecheck` - Type checking across all project files.
- `pnpm db:seed` - Seed the database with any testing data you need.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 💡 Support

For detailed documentation, visit the [PayloadCMS Documentation](https://payloadcms.com/docs).

For questions and support:

- [Discord Community](https://discord.com/invite/payload)
- [GitHub Issues](https://github.com/payloadcms/payload/issues)
