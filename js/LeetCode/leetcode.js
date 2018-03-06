/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//给定一个整型数组,返回一个 两个元素相加等于target 的元素下标数组
var twoSum = function (nums, target) {
    
    for (var i = 0; i < nums.length; i++) {
        
        for (var j = i+1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return '该数组不满足条件';
};

// 需做32位有符号数的判断,由于javascript用得比较少顾先缓一缓 
var reverse = function (x) {
    var str = String(x);
    // console.log(str);
    var arr=[];
    if (str.indexOf('-') != -1) {
        console.log('adf');
        for (let i = 1; i < str.length; i++) {
            arr.push(str[i]);
        }
        arr = arr.reverse();
        return -Number(arr.join(''));
    }else{
        // console.log('adf');
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i]);
        }
        arr = arr.reverse();
        // console.log(arr);
        return Number(arr.join(''));
    }
    
};
console.log(reverse(1534236469));