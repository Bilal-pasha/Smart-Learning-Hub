declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: number;
    PGADMIN_DEFAULT_EMAIL: string;
    PGADMIN_DEFAULT_PASSWORD: string;
    PGADMIN_PORT: number;
    DATABASE_CONNECTION_HOST: string;
    DATABASE_CONNECTION_PORT: number;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    FRONTEND_URL: string;
    ACCESS_JWT_SECRET: string;
    ACCESS_JWT_EXPIRY: string;
    REFRESH_JWT_SECRET: string;
    REFRESH_JWT_EXPIRY: string;
    ACCESS_JWT_TTL: number;
    REFRESH_JWT_TTL: number;
    SENDGRID_API_KEY: string;
    SENDGRID_FROM_EMAIL: string;
    EMAIL_ENABLED: string;
    MAX_FILE_SIZE: number;
    BATCH_INSERTION_LIMIT: number;
  }
}
