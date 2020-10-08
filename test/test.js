const { Kyber } = require('../lib/index');
const { CIPHERTEXTBYTES, PUBLICKEYBYTES, CRYPTO_BYTES, SECRETKEYBYTES } = require('../lib/node-kyber')
const expect = require('chai').expect;


describe('Kyber-1024', function() {
    before(() => {
        this.kyber = new Kyber();
    });
    describe('#createKeys', () => {
        before(async () => {
            this.keys = await this.kyber.createKeys();
        });
        it('should return a public key', () => {
            expect(this.keys.publicKey.length).to.be.equal(PUBLICKEYBYTES);
        });
        it('should return a private key', () => {
            expect(this.keys.privateKey.length).to.be.equal(SECRETKEYBYTES);
        });
    });
    describe('#encryptKey', () => {
        before(async () => {
        
            [this.cBytes, this.sKey] = await this.kyber.encryptKey(this.keys.publicKey);
        });
        it('should return a cipher bytes', () => {
            expect(this.cBytes.length).to.equal(CIPHERTEXTBYTES);
        });
        it('should return a secret bytes', () => {
            expect(this.sKey.length).to.equal(CRYPTO_BYTES);
        });
    });
    describe('#decryptKey', () => {
        before(async () => {  
          this.retKey = await this.kyber.decryptKey(this.keys.privateKey, this.cBytes);
        });
        it('should return secret key', () => {
            expect(this.retKey.toString('hex')).to.equal(this.sKey.toString('hex'));
        });
    });
});
