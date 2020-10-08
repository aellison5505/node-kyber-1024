
<a name="readmemd"></a>

**[node-kyber-1024](#readmemd)**

> [Globals](#globalsmd)

# node-kyber-1024
Post Quantum NodeJS interface for Kyber 1024.
[![Build Status](https://travis-ci.com/aellison5505/node-kyber-1024.svg?branch=master)](https://travis-ci.com/aellison5505/node-kyber-1024)


<a name="classes_index_kybermd"></a>

**[node-kyber-1024](#readmemd)**

> [Globals](#globalsmd) / ["index"](#modules_index_md) / Kyber

# Class: Kyber

## Hierarchy

* **Kyber**

## Index

### Methods

* [createKeys](#createkeys)
* [decryptKey](#decryptkey)
* [encryptKey](#encryptkey)

## Methods

### createKeys

▸ **createKeys**(): Promise\<[keys](#interfaces_index_keysmd)>

*Defined in index.ts:10*

**Returns:** Promise\<[keys](#interfaces_index_keysmd)>

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


<a name="globalsmd"></a>

**[node-kyber-1024](#readmemd)**

> Globals

# node-kyber-1024

## Index

### Modules

* ["index"](#modules_index_md)


<a name="interfaces_index_keysmd"></a>

**[node-kyber-1024](#readmemd)**

> [Globals](#globalsmd) / ["index"](#modules_index_md) / keys

# Interface: keys

## Hierarchy

* **keys**

## Index

### Properties

* [privateKey](#privatekey)
* [publicKey](#publickey)

## Properties

### privateKey

•  **privateKey**: Buffer

*Defined in index.ts:5*

___

### publicKey

•  **publicKey**: Buffer

*Defined in index.ts:4*


<a name="modules_index_md"></a>

**[node-kyber-1024](#readmemd)**

> [Globals](#globalsmd) / "index"

# Module: "index"

## Index

### Classes

* [Kyber](#classes_index_kybermd)

### Interfaces

* [keys](#interfaces_index_keysmd)
