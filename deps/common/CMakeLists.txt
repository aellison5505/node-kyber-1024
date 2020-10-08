

file(GLOB SRC "fips202.c" "randombytes.c" "fips202.h" "randombytes.h")

add_library(common OBJECT ${SRC})


