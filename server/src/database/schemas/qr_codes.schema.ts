import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core'
import { users } from './users.schema'
import { urls } from './urls.schema'
import { timestamps } from './_common'

export const qr_codes = pgTable('qr_codes', {
  id: serial('id').primaryKey(),
  // ID del usuario propietario del código QR
  user_id: integer('user_id').notNull().references(() => users.id),
  // ID de la URL asociada al código QR
  url_id: integer('url_id').notNull().references(() => urls.id),
  // URL de la imagen del código QR generado
  image_url: varchar('image_url', { length: 255 }),
  ...timestamps,
})