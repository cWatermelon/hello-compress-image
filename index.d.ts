/**
 * compress images and upload qiniu.
 * @param key tinify key.
 * @param uploadUrl upload url.
 * @param token upload token.
 * @param file upload file tmp path or file object.
 * @param timeout timeout.
 */

declare function CompressImageAndUpload(
  key: string,
  uploadUrl: string,
  file: any,
  token: string,
  timeout: number
): Promise<object>;
export = CompressImageAndUpload;
export default CompressImageAndUpload;
