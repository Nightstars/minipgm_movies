// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var rp = require('request-promise');
// 云函数入口函数
exports.main = async (event, context) => {
    console.log(event.start);
    console.log(event.count);
    return rp('http://t.yushu.im/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a2&start='+event.start+'&count='+event.count)
    .then(function (res) {
        // Process html...
        console.log(res);
        return res;
    })
    .catch(function (err) {
        // Crawling failed...
        console.error(err);
    });
}