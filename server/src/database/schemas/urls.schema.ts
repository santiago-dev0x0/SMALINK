import { pgTable, serial, integer, varchar, boolean } from 'drizzle-orm/pg-core'
import { users } from './users.schema'
import { timestamps } from './_common'

export const urls = pgTable('urls', {
  id: serial('id').primaryKey(),
  // ID del usuario propietario de la URL
  user_id: integer('user_id').notNull().references(() => users.id),
  // URL original que se va a acortar
  original_url: varchar('original_url', { length: 2048 }).notNull(),
  // Código corto único para la URL acortada
  short_code: varchar('short_code', { length: 20 }).notNull().unique(),
  // Estado activo/inactivo de la URL
  is_active: boolean('is_active').notNull().default(true),
  ...timestamps,
}) 