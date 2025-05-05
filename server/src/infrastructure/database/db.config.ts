import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { registerAs } from '@nestjs/config';

export default registerAs(
  'db',
  (): PostgresConnectionOptions => ({
    type: 'postgres',
    host: process.env.DATABASE_CONNECTION_HOST,
    port: +process.env.DATABASE_CONNECTION_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
      join(__dirname, '..', '..', 'features', '**', '*.entity.{ts,js}'),
    ],
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV === 'development' ? true : false,
  }),
);
