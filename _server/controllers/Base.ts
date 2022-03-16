import {Router} from "express";

export default abstract class IBaseController {
  abstract initRoutes(): void;
  abstract prefix: string;
  abstract router: Router;
  /** имя чанка, для которого нужно будет инжектить стили и скрипты сразу в страницу при редере
   * состоит из pages-[имя файла в папке pages]
   */
  abstract chunkName: string;
}
