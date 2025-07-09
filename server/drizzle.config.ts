import { defineConfig } from 'drizzle-kit';
import { loadEnvFile } from 'node:process';
// cargamos el archivo .env
loadEnvFile('.env');

export default defineConfig({
  out: './drizzle',
  schema: './src/database/schemas/*.schema.ts', // <-- Incluye todos tus esquemas
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
