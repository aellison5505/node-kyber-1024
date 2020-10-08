
set(CMAKE_POSITION_INDEPENDENT_CODE true)

file(GLOB SOURCE_FILES "*.cc" "*.h")

include_directories(${CMAKE_JS_INC})

add_library(kyber-addon OBJECT ${SOURCE_FILES} ${CMAKE_JS_SRC})

set_property(TARGET kyber-addon PROPERTY CXX_STANDARD 11)

execute_process(COMMAND node -p "require('node-addon-api').include"
        WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
        OUTPUT_VARIABLE NODE_ADDON_API_DIR
        )
string(REPLACE "\n" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})

target_include_directories(kyber-addon PRIVATE ${NODE_ADDON_API_DIR})
