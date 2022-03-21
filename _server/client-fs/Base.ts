import {IFs} from "memfs";
import * as FS from "fs";
import path from "path";

import {LOADABLE_STATS_FILE_NAME} from "../../webpack/constants";
import {getPath} from "../../webpack/path";

export default abstract class BaseClientFs {
  static pathToLoadableStatsFile = path.join(getPath('./').buildClient, LOADABLE_STATS_FILE_NAME)
  abstract readonly fs: IFs | typeof FS;
  abstract getLoadableStatsFile(): Object;
}
