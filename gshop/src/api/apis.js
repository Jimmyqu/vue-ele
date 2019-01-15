/*
封装常用函数
*/


const BaseUrl = 'https://www.easy-mock.com/mock/5a769ac93c4ca20b4f1dd692/example_copy/card';

const UserUrl='https://www.easy-mock.com/mock/5a769ac93c4ca20b4f1dd692/example_copy/user'

import ajax from './ajax'

//首页商铺信息
export const ApiShopLIst = ()=>ajax('get',BaseUrl);

//用户信息
export const UserInfo = ()=>ajax('get',UserUrl);

//验证码
export const CacheImg = ()=>ajax('get',BaseUrl);

//商品列表
export const GoodList = ()=> ajax('get','/goods');

//商品评价
export const GoodRatings = ()=> ajax('get','/ratings');

//商品信息
export const GoodInfo= ()=> ajax('get','/info');
