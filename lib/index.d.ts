/// <reference types="node" />
export interface keys {
    publicKey: Buffer;
    privateKey: Buffer;
}
export interface encRet {
    secureKey: Buffer;
    cipherBytes: Buffer;
}
export declare class Kyber {
    createKeys(): Promise<keys>;
    encryptKey(publicKey: Buffer): Promise<encRet>;
    decryptKey(privateKey: Buffer, cipherBytes: Buffer): Promise<Buffer>;
}
//# sourceMappingURL=index.d.ts.map