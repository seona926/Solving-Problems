/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let temp = '';
    for (let i = 0; i < haystack.length; i++) {
        temp = haystack.substr(i, needle.length);
        if (temp === needle) return i
        if (i === haystack.length -1 && temp !== needle) return -1;
    }
};