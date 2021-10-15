import {AppStore} from "./app";

export class Stores {
    readonly app: AppStore

    constructor() {
        this.app = new AppStore();
    }
}