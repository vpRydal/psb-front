import { Container } from 'inversify';

import commonModule from './common-module';

const appContainer = new Container();

appContainer.load(commonModule);

export default appContainer;
