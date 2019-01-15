/*
* mockjs拦截返回模拟数据
* */

import  mock from 'mockjs'
import data from './data.json'

mock.mock('/goods',{code:0,data:data.goods})

mock.mock('/info',{code:0,data:data.info})

mock.mock('/ratings',{code:0,data:data.ratings})

//mockjs 不用向外暴露
