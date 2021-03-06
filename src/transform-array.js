module.exports = function transform(arr) {
    if(arr.length == 0){
        return [];
    }else if(arr.length == undefined){
        throw Error;
    }

    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '--discard-next'){
            if(i < arr.length - 1){
                i++;
            }
        }else if(arr[i] == '--discard-prev'){
            if(i > 0){
                newArr.pop();
            }
        }else if(arr[i] == '--double-next'){
            if(i < arr.length - 1){
                newArr.push(arr[i + 1]);
            }
        }else if(arr[i] == '--double-prev'){
            if(i > 0){
                newArr.push(arr[i - 1]);
            }
        }else newArr.push(arr[i]);
    }

    return newArr;
};
