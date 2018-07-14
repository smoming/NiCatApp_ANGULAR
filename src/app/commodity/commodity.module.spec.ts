import { CommodityModule } from './commodity.module';

describe('CommodityModule', () => {
  let commodityModule: CommodityModule;

  beforeEach(() => {
    commodityModule = new CommodityModule();
  });

  it('should create an instance', () => {
    expect(commodityModule).toBeTruthy();
  });
});
