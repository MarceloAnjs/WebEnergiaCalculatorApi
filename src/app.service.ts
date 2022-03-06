import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWebEnergiaCalculator(): string {
    return 'WebEnergiaCalculatorApi';
  }
}
