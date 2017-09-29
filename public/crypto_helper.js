/**
 * Created by kay on 2017/2/14.
 */
var CryptoJS = require("crypto-js");


/**
 * AES加密
 * @param str 明文
 * @param secretKey 密钥
 * @returns {*} 密文
 */
exports.encodeMessage = function (str, secretKey) {
    try {
        var encrypted = CryptoJS.AES.encrypt(str, secretKey);
        return encrypted.toString();
    }
    catch (e) {
        console.error("aes encode fail!");
        return null;
    }
};
/**
 * AES解密
 * @param encrypted 密文
 * @param secretKey 密钥
 * @returns {*} 明文
 */
exports.decodeMessage = function (encrypted, secretKey) {
    try {
        var decodeByte=CryptoJS.AES.decrypt(encrypted, secretKey);
        return decodeByte.toString(CryptoJS.enc.Utf8);
    }
    catch (e) {
        console.error("aes decode fail!");
        return null;
    }
};


