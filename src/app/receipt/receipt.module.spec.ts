import { ReceiptModule } from './receipt.module';

describe('ReceiptModule', () => {
  let receiptModule: ReceiptModule;

  beforeEach(() => {
    receiptModule = new ReceiptModule();
  });

  it('should create an instance', () => {
    expect(receiptModule).toBeTruthy();
  });
});
