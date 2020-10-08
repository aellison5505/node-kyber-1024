"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kyber = void 0;
const node_kyber_1 = require("../lib/node-kyber");
class Kyber {
    createKeys() {
        return new Promise((ret) => {
            let pk = Buffer.alloc(node_kyber_1.PUBLICKEYBYTES);
            let sk = Buffer.alloc(node_kyber_1.SECRETKEYBYTES);
            node_kyber_1.createKeyPair(pk, sk);
            let retKeys = {
                publicKey: pk,
                privateKey: sk
            };
            ret(retKeys);
        });
    }
    encryptKey(publicKey) {
        return new Promise((ret) => {
            let ct = Buffer.alloc(node_kyber_1.CIPHERTEXTBYTES);
            let sKey = Buffer.alloc(node_kyber_1.CRYPTO_BYTES);
            node_kyber_1.encrypt(ct, sKey, publicKey);
            ret({
                secureKey: sKey,
                cipherBytes: ct
            });
        });
    }
    decryptKey(privateKey, cipherBytes) {
        return new Promise((ret) => {
            let sKey = Buffer.alloc(node_kyber_1.CRYPTO_BYTES);
            node_kyber_1.decrypt(sKey, cipherBytes, privateKey);
            ret(sKey);
        });
    }
}
exports.Kyber = Kyber;
//# sourceMappingURL=index.js.map