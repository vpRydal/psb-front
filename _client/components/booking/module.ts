import { ContainerModule } from 'inversify';

import BookingStore from '@stores/booking';

const bookingModule = new ContainerModule(
  bind => {
    bind(BookingStore).toSelf().inSingletonScope();
  },
);

export default bookingModule;
