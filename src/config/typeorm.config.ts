import { join } from 'path';

import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_CONNECTION_HOST,
  port: +(process.env.DATABASE_CONNECTION_PORT || 0),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: [join(__dirname, '..', '..', 'features', '**', '*.entity.{ts,js}')],
  migrations: [
    join(__dirname, '../infrastructure/database/migrations/*.{js,ts}'),
  ],
  migrationsRun: false,
  logging: process.env.NODE_ENV === 'development' ? true : false,
});

export default AppDataSource;
