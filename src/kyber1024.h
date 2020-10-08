#ifndef H_KYBER1024
#define H_KYBER1024

#ifdef __cplusplus
extern "C" {
#endif

#include "api.h"

#ifdef __cplusplus
}
#endif

#include <napi.h>

#define SECRETKEYBYTES  3168

#define PUBLICKEYBYTES  1568

#define CIPHERTEXTBYTES 1568

#define CRYPTO_BYTES    32

#define keypair PQCLEAN_KYBER1024_CLEAN_crypto_kem_keypair

#define enc  PQCLEAN_KYBER1024_CLEAN_crypto_kem_enc

#define dec PQCLEAN_KYBER1024_CLEAN_crypto_kem_dec

Napi::Value createKeyPair(const Napi::CallbackInfo& info);

Napi::Value encrypt(const Napi::CallbackInfo& info);

Napi::Value decrypt(const Napi::CallbackInfo& info);

#endif
