import request from './request';
import qs from "./qs"
let api = "/api/web/answer/";
// 获取问答广场列表
export function queryQuestionSquareList(data) {
    return request({
        url: api + "queryQuestionSquareList"+qs(data),
    })
}
// 获取问题详情列表
export function queryQuestionAnswerList(data){
    return request({
        url:api+"queryQuestionAnswerList"+qs(data),
    })
}
// 回答问题
export function optAddAnswer(data){
    return request({
        url:api+"optAddAnswer"+qs(data)
    })
}
//我要提问
export function optAddQuestion(data){
    return request({
        url:api+"optAddQuestion"+qs(data)
    })
}
// 获取我的回答列表
export function queryMeAnswerList(data){
    return request({
        url:api+"queryMeAnswerList"+qs(data)
    })
}
// 获取我的提问列表
export function queryMeQuestionList(data){
    return request({
        url:api+"queryMeQuestionList"+qs(data)
    }) 
}
//删除我的问题
export function optDeleteQuestion(data){
    return request({
        url:api+"optDeleteQuestion"+qs(data)
    }) 
}
//删除回答操作
export function optDeleteAnswer(data){
    return request({
        url:api+"optDeleteAnswer"+qs(data)
    })
}
// 采纳该回答操作
export function optAdoptAnswer(data){
    return request({
        url:api+"optAdoptAnswer"+qs(data)
    })
}