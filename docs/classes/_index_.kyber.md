**[node-kyber-1024](../README.md)**

> [Globals](../globals.md) / ["index"](../modules/_index_.md) / Kyber

# Class: Kyber

## Hierarchy

* **Kyber**

## Index

### Methods

* [createKeys](_index_.kyber.md#createkeys)
* [decryptKey](_index_.kyber.md#decryptkey)
* [encryptKey](_index_.kyber.md#encryptkey)

## Methods

### createKeys

▸ **createKeys**(): Promise\<[keys](../interfaces/_index_.keys.md)>

*Defined in index.ts:10*

**Returns:** Promise\<[keys](../interfaces/_index_.keys.md)>

___

### decryptKey

▸ **decryptKey**(`privateKey`: Buffer, `cipherBytes`: Buffer): Promise\<Buffer>

*Defined in index.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`privateKey` | Buffer |
`cipherBytes` | Buffer |

**Returns:** Promise\<Buffer>

___

### encryptKey

▸ **encryptKey**(`publicKey`: Buffer): Promise\<[Buffer, Buffer]>

*Defined in index.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`publicKey` | Buffer |

**Returns:** Promise\<[Buffer, Buffer]>
