import { Module } from '@nestjs/common';

import { BcryptService } from './bcrypt.service';

@Module({
  providers: [BcryptService],
  exports: [BcryptService], // Export to reuse in other modules
})
export class BcryptModule {}
