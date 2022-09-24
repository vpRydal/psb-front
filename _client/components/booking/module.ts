import {ContainerModule} from "inversify";
import BookingStore from "@store/booking";


const bookingModule = new ContainerModule(
  (
    bind
  ) => {
    bind(BookingStore).toSelf().inSingletonScope();
  }
)

export default bookingModule;
