/*
  封装网络请求
*/

import axios from 'axios'

export  default function ajax(type,url,data={}) {
  let res;
  return new Promise((resolve, reject) => {
    if(type==='get'){
      let dataStr = '';
      Object.keys(data).forEach(key=>{
        dataStr+=key +'='+data[key]+'&'
      });
      if(dataStr !==''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
        url=url+ '?'+dataStr
      }
      res = axios.get(url)
    }else {
      res = axios.post(url,data)
    }

    res.then((response)=>{
      resolve(response.data)
    }).catch(err=>reject(err))
  })
}

