import chatModule from '@components/home/chat/module';
import container from '@data/misc/base-container';

const homePageContainer = container.createChild();

homePageContainer.load(chatModule);

export default homePageContainer;
