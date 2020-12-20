import request from "./request"
//获取sessionKey
export function getUserSign(data){
    let url = "student/api/app/tencentCloud/genUserSig";
    return request({
        url : url,
        data:data
    })
}