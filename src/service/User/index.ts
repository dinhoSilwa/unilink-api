import { UserAuthModel } from "../../models/auth";
import cloudnaryConfig from "../../config/cloudinary/cloudnaryConfig";
import type { UploadApiResponse } from "cloudinary";
export class UserServices {
  static async getUser(id: string): Promise<any> {
    return await UserAuthModel.findById({ _id: id }).select("-password");
  }

  static async addAvtar(
    userEmail: string,
    avatarDetails: Express.Multer.File
  ): Promise<any> {
    try {
      const result = await new Promise<UploadApiResponse | any>(
        (resolve, reject) => {
          const uploadStream = cloudnaryConfig.uploader.upload_stream(
            { folder: `${userEmail}` },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          uploadStream.end(avatarDetails.buffer);
        }
      );

      return await UserAuthModel.findOneAndUpdate(
        { email: userEmail },
        {
          $set: {
            imgGallery: {
              avatarUrl: result.secure_url,
              avatarId: result.public_id,
            },
          },
        },
        { new: true, runValidators: true }
      );
    } catch (error) {
      console.error("Error", error);
      throw new Error("Falha");
    }
  }
}
