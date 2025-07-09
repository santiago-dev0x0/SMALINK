import { pgTable, serial, varchar, boolean } from 'drizzle-orm/pg-core'
import { timestamps } from './_common'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  // Email del usuario
  email: varchar('email', { length: 255 }).notNull().unique(),
  // Nombre de usuario
  username: varchar('username', { length: 50 }).notNull().unique(),
  // Estado de la cuenta
  is_active: boolean('is_active').notNull().default(true),
  // Plan del usuario: 'free', 'pro', 'business', etc. (preparado para SaaS freemium)
  plan: varchar('plan', { length: 20 }).notNull().default('free'),
  ...timestamps,
})