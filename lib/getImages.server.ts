import fs from "fs";
import path from "path";

export function getVistaGrandeImages() {
  const imagesDirectory = path.join(process.cwd(), "public/vista-grande");
  const imageFiles = fs.readdirSync(imagesDirectory);

  return imageFiles.map((file) => `/vista-grande/${file}`);
}
