import appContainer from "@store/containers/app";
import bookingModule from "@store/modules/booking";


const bookingPageContainer = appContainer.createChild()

bookingPageContainer.load(bookingModule)

export default bookingPageContainer;
