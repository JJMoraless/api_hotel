import path from "path";
import { fileURLToPath } from "url";

export const _dirname = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl);
  const pathFile = path.dirname(__filename);
  return pathFile;
};

export const resOk = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    ok: true,
    data,
  });
};
