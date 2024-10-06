import multer, { FileFilterCallback } from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 1MB
  fileFilter: (req, file: Express.Multer.File, cb: FileFilterCallback) => {
    const validTypes = /jpeg|jpg|png/;
    const extname = validTypes.test(file.mimetype);
    const mimetype = validTypes.test(file.originalname.split(".").pop() || "");

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Tipo de arquivo não suportado."));
    }
  },
});

export default upload;
