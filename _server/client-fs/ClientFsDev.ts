import {createFsFromVolume, Volume} from "memfs";
import {Compiler, Configuration} from "webpack";
import path from "path";

import BaseClientFs from "./Base";
import {LOADABLE_STATS_FILE_NAME} from "../../webpack/constants";

export default class ClientFsDev extends BaseClientFs {
  readonly fs = createFsFromVolume(new Volume());

  constructor(compiler: Compiler, webpackConfig: Configuration) {
    super();

    ClientFsDev.pathToLoadableStatsFile = `${webpackConfig.output!.path}/${LOADABLE_STATS_FILE_NAME}`;

    // @ts-ignore
    this.fs.join = path.join.bind(path);
  }

  getLoadableStatsFile(): Object {
    return JSON.parse(this.fs.readFileSync(ClientFsDev.pathToLoadableStatsFile).toString())
  }

}
