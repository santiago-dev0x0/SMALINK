import { pgTable, serial, integer, varchar, text, boolean, index } from 'drizzle-orm/pg-core'
import { users } from './users.schema'
import { timestamps } from './_common'

export const user_auth = pgTable('user_auth', {
  id: serial('id').primaryKey(),
  // ID del usuario (relación con tabla users)
  user_id: integer('user_id').notNull().references(() => users.id),
  // Proveedor de autenticación: 'local', 'google', 'github', etc.
  provider: varchar('provider', { length: 30 }).notNull(),
  // ID único del usuario en el proveedor externo (para OAuth)
  provider_id: varchar('provider_id', { length: 100 }),
  // Hash de la contraseña (solo para autenticación local)
  password_hash: text('password_hash'),
  // Estado de verificación del usuario
  is_verified: boolean('is_verified').notNull().default(false),
  ...timestamps,
}, (table) => [
  index('user_auth_user_id_idx').on(table.user_id),
  index('user_auth_provider_idx').on(table.provider),
  index('user_auth_provider_provider_id_idx').on(
    table.provider,
    table.provider_id,
  ),
])
