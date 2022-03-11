import {action, computed, observable} from "mobx";

export default class AppStore {
    @observable
    counter = 0;

    constructor() {
    }

    @computed
    get counterV2() {
        return this.counter * 2;
    }

    @action.bound
    inc() {
        this.counter++;
    }

}
