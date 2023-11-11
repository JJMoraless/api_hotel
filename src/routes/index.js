import { Router } from "express";
import { readdirSync } from "fs";
import { _dirname } from "../utils/functions.js";

/**
 * 
 * este archivo tiene logica para exportar 
 * routers automaticamente en base al nombre de su archivo
 * por lo que, si se crea un archivo en esta carpeta de routes
 * y no se exporta un router, se genera error
 * 
 */

const PATH_ROUTERS = _dirname(import.meta.url);
const router = Router();

const cleanFile = (fileName = "") => fileName.split(".").shift();
const filesNames = readdirSync(PATH_ROUTERS);

filesNames.forEach(async (fileName) => {
  const cleanName = cleanFile(fileName);
  if (cleanName === "index") return;
  
  const moduleRouter = await import(`./${fileName}`);
  router.use(`/${cleanName}`, moduleRouter.router);
  console.log(cleanName);
});

export { router };
