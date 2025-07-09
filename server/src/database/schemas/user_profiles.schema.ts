import { pgTable, serial, integer, varchar, text, index } from 'drizzle-orm/pg-core'
import { users } from './users.schema'
import { timestamps } from './_common'

export const user_profiles = pgTable('user_profiles', {
  id: serial('id').primaryKey(),
  // ID del usuario (relación con tabla users)
  user_id: integer('user_id').notNull().references(() => users.id),
  // Nombre completo del usuario
  full_name: varchar('full_name', { length: 100 }),
  // Biografía o descripción del usuario
  bio: text('bio'),
  // URL de la imagen de perfil/avatar
  avatar_url: varchar('avatar_url', { length: 255 }),
  // Sitio web personal del usuario
  website: varchar('website', { length: 255 }),
  // Ubicación del usuario
  location: varchar('location', { length: 100 }),
  ...timestamps,
}, (table) => [
  index('user_profiles_user_id_idx').on(table.user_id),
  index('user_profiles_full_name_idx').on(table.full_name),
]) 