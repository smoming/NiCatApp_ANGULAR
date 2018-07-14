import { ShipperModule } from './shipper.module';

describe('ShipperModule', () => {
  let shipperModule: ShipperModule;

  beforeEach(() => {
    shipperModule = new ShipperModule();
  });

  it('should create an instance', () => {
    expect(shipperModule).toBeTruthy();
  });
});
