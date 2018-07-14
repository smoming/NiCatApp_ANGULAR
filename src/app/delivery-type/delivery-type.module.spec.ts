import { DeliveryTypeModule } from './delivery-type.module';

describe('DeliveryTypeModule', () => {
  let deliveryTypeModule: DeliveryTypeModule;

  beforeEach(() => {
    deliveryTypeModule = new DeliveryTypeModule();
  });

  it('should create an instance', () => {
    expect(deliveryTypeModule).toBeTruthy();
  });
});
