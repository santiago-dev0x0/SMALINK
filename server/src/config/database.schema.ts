import { z } from 'zod';

export const databaseSchema = z.object({
  url: z
    .string({ required_error: 'Database URL is required' })
    .url('Database URL is invalid'),
});

export type DatabaseConfig = z.infer<typeof databaseSchema>;
