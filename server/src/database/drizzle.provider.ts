import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import databaseConfig from '../config/database.config';
import { ConfigType } from '@nestjs/config';

export const DRIZZLE = 'DRIZZLE';

// ✅ Recomendado - simple y eficiente
export const drizzleProvider = {
    provide: DRIZZLE,
  useFactory: async (dbConfig: ConfigType<typeof databaseConfig>) => {
    const sql = neon(dbConfig.url);
    console.log('Database client created');
    return drizzle({ client: sql });
    },
  inject: [databaseConfig.KEY],
};
