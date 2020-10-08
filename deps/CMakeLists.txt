

project(objsKyber C)

set(CMAKE_POSITION_INDEPENDENT_CODE true)

set (CMAKE_C_STANDARD 99)

if(WIN32)
    add_definitions(/O2)
ELSE()
    add_definitions(-O3 -Wall -Wextra -Wpedantic -Werror -Wmissing-prototypes -Wredundant-decls)
ENDIF()

include_directories(common clean)

add_subdirectory(common)
add_subdirectory(clean)


