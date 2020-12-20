
function postType(data) {
    // let data = {phone:"18328510362",value:"123456"};
    // if (data instanceof Array) {
    //     return (...data)
    // }
    if (data instanceof Object) {
        let str = "?";
        for (var key in data) {
            if(Array.isArray(data[key])){
                data[key] = data[key].toString()
            }
            str += `${key}=${data[key]}&&`
        }
        str = str.slice(0, -2);
        return str
    }else {
        return data
    }

}
export default postType