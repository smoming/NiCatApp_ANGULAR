import { NationModule } from './nation.module';

describe('NationModule', () => {
  let nationModule: NationModule;

  beforeEach(() => {
    nationModule = new NationModule();
  });

  it('should create an instance', () => {
    expect(nationModule).toBeTruthy();
  });
});
