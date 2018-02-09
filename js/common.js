/**
 * @param min 最小的值
 * @param max 最大的值
 * @returns min和max范围内的值
 */
function randomRange(min,max){

    return parseInt(Math.random() * (max - min + 1) + min);
}