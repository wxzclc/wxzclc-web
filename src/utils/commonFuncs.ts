// import getConfig from "next/config";

const isProd = process.env.NODE_ENV === 'production'
// 使用github page默认域名时需以下配置
// const publicAssetPrefix = '/wxzclc-web';
const publicAssetPrefix = '';

export const getPicPrefix = (pic_url: string)=>  {
  return isProd ? publicAssetPrefix + pic_url : pic_url;
}