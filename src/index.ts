import { CIPHERTEXTBYTES, PUBLICKEYBYTES, SECRETKEYBYTES, CRYPTO_BYTES, createKeyPair, decrypt, encrypt } from '../lib/node-kyber';

export interface keys {
    publicKey: Buffer;
    privateKey: Buffer;
}

export class Kyber {

    createKeys(): Promise<keys> {
        return new Promise<keys>((ret) => {
            let pk = Buffer.alloc(PUBLICKEYBYTES);
            let sk = Buffer.alloc(SECRETKEYBYTES);
            createKeyPair(pk, sk);
            let retKeys: keys = {
                publicKey: pk,
                privateKey: sk
            }
            ret(retKeys);
        });
    }

    encryptKey(publicKey: Buffer):  Promise<[Buffer, Buffer]> {
        return new Promise<[Buffer, Buffer]>((ret) => { 
            let ct = Buffer.alloc(CIPHERTEXTBYTES);
            let sKey = Buffer.alloc(CRYPTO_BYTES);
            encrypt(ct, sKey, publicKey);
            ret([ct, sKey]);
        });
    }

    decryptKey(privateKey: Buffer, cipherBytes: Buffer):  Promise<Buffer> {
        return new Promise<Buffer>((ret) => { 
            let sKey = Buffer.alloc(CRYPTO_BYTES);
            decrypt(sKey, cipherBytes, privateKey);
            ret(sKey);
        });
    }
}
