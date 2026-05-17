import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type UploadFolder = 'blog' | 'portfolio';

const UPLOAD_PRESETS: Record<UploadFolder, string> = {
  blog: 'megathos_blog',
  portfolio: 'megathos_portfolio',
};

export interface UploadResult {
  url: string;
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
}

/**
 * Upload an image buffer to Cloudinary.
 * Uses the appropriate upload preset based on the folder.
 */
export async function uploadImage(
  fileBuffer: Buffer,
  folder: UploadFolder
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `datamegathos/${folder}`,
        upload_preset: UPLOAD_PRESETS[folder],
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve({
            url: result.url,
            secureUrl: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            format: result.format,
          });
        }
      }
    );
    uploadStream.end(fileBuffer);
  });
}

/**
 * Delete an image from Cloudinary by its public ID.
 */
export async function deleteImage(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}

export default cloudinary;
