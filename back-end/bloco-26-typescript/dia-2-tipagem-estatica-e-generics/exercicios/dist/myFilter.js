"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFilter = void 0;
function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
exports.myFilter = myFilter;
;
