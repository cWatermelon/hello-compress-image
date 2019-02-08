const got = require('got');
const tinify = require('tinify');
const FormData = require('form-data');
const form = new FormData();
export function CompressImageAndUpload(key, uploadUrl, file, token, timeout = 2000) {
  if (!key || !token || !timeout || !uploadUrl)
    return 'Ooooops error！must pass the parameters key, token and file!';
  tinify.key = key;
  console.log('start image compress --->', new Date().getTime());
  return tinify
    .fromFile(file)
    .toBuffer()
    .then(res => {
      console.log('end image compress --->', new Date().getTime());
      form.append('file', res);
      return (async () => {
        console.log('start image upload --->', new Date().getTime());
        try {
          const response = await got(`${upload}?token=${token}`, {
            method: 'POST',
            timeout: timeout,
            body: form,
          });
          console.log('upload image end --->', new Date().getTime());
          return response.body;
        } catch (error) {
          console.log('upload image error --->', new Date().getTime());
          return error.response.body;
        }
      })();
    });
}
export default {
  CompressImageAndUpload,
};
