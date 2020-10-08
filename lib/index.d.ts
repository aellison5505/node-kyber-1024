/// <reference types="node" />
export interface keys {
    publicKey: Buffer;
    privateKey: Buffer;
}
export declare class Kyber {
    createKeys(): Promise<keys>;
    encryptKey(publicKey: Buffer): Promise<[Buffer, Buffer]>;
    decryptKey(privateKey: Buffer, cipherBytes: Buffer): Promise<Buffer>;
}
//# sourceMappingURL=index.d.ts.map