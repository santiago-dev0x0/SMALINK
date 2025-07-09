import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core'
import { urls } from './urls.schema'
import { users } from './users.schema'
import { timestamps } from './_common'

export const clicks = pgTable('clicks', {
  id: serial('id').primaryKey(),
  // ID de la URL que fue clickeada
  url_id: integer('url_id').notNull().references(() => urls.id),
  // ID del usuario que hizo el click (opcional, permite clics anónimos)
  user_id: integer('user_id').references(() => users.id),
  // Dirección IP del visitante
  ip: varchar('ip', { length: 45 }),
  // User agent del navegador/dispositivo
  user_agent: varchar('user_agent', { length: 255 }),
  ...timestamps,
})