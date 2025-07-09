import { registerAs } from '@nestjs/config';
import { databaseSchema } from './database.schema';
import { validate } from './validate';

export default registerAs("database", () => {
  const raw = {
    url: process.env.DATABASE_URL,
  };
  const validated = validate(raw, databaseSchema);
  return validated;
});