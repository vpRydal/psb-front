import MemoryFileSystem from "memory-fs";
import * as FS from "fs";
import path from "path";

import {LOADABLE_STATS_FILE_NAME} from "../../webpack/constants";
import {getPath} from "../../webpack/path";

export default abstract class BaseClientFs {
  static pathToLoadableStatsFile = path.join(getPath('./').buildClientSsr, LOADABLE_STATS_FILE_NAME)
  abstract readonly fs: MemoryFileSystem | typeof FS;
  abstract getLoadableStatsFile(): Object;
}
