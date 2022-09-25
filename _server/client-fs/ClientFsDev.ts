import MemoryFS from 'memory-fs';
import path from 'path';
import { MultiCompiler, Configuration } from 'webpack';

import { LOADABLE_STATS_FILE_NAME } from '../../webpack/constants';
import BaseClientFs from './Base';

export default class ClientFsDev extends BaseClientFs {
  readonly fs = new MemoryFS();

  constructor(compiler: MultiCompiler, webpackConfig: Configuration) {
    super();

    ClientFsDev.pathToLoadableStatsFile = `${webpackConfig.output!.path}/${LOADABLE_STATS_FILE_NAME}`;
  }

  getLoadableStatsFile(): object {
    return JSON.parse(this.fs.readFileSync(ClientFsDev.pathToLoadableStatsFile).toString());
  }
}
