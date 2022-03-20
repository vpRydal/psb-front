import {IFs} from "memfs";
import * as FS from "fs";
import {LOADABLE_STATS_FILE_NAME} from "../../webpack/constants";

export default abstract class BaseClientFs {
  static pathToLoadableStatsFile = `public/client/${LOADABLE_STATS_FILE_NAME}`
  abstract readonly fs: IFs | typeof FS;
  abstract getLoadableStatsFile(): Object;
}
