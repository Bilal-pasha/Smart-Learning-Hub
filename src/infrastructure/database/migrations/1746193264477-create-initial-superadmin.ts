import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcryptjs';

export class CreateSuperadminUser1746192589000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hashedPassword = await bcrypt.hash('admin@123', 10);
    await queryRunner.query(`
        INSERT INTO "user" (name, email, password)
        VALUES (
          'Super Admin',
          'superadmin@example.com',
        '${hashedPassword}'
        )
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE email = 'superadmin@example.com'
    `);
  }
}
