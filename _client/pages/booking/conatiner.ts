import container from "@store/misc/base-container";
import bookingModule from "@client/components/booking/module";


const homePageContainer = container.createChild()

homePageContainer.load(bookingModule)

export default homePageContainer;
