import { TradingModule } from './trading.module';

describe('TradingModule', () => {
  let tradingModule: TradingModule;

  beforeEach(() => {
    tradingModule = new TradingModule();
  });

  it('should create an instance', () => {
    expect(tradingModule).toBeTruthy();
  });
});
