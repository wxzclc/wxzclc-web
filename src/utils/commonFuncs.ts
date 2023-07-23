import getConfig from "next/config";

const isProd = process.env.NODE_ENV === 'production'
const publicAssetPrefix = '/wxzclc-web';

export const getPicPrefix = (pic_url: string)=>  {
  return isProd ? publicAssetPrefix + pic_url : pic_url;
}