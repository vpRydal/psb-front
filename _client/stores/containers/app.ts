import { Container } from 'inversify';

import appModule from "@store/modules/app";


const appContainer = new Container()

appContainer.load(appModule)


export default appContainer;
