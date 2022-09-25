import bookingModule from '@components/booking/module';
import container from '@data/misc/base-container';

const homePageContainer = container.createChild();

homePageContainer.load(bookingModule);

export default homePageContainer;
