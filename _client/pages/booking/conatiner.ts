import container from "@data/misc/base-container";
import bookingModule from "@components/booking/module";


const homePageContainer = container.createChild()

homePageContainer.load(bookingModule)

export default homePageContainer;
