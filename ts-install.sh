#!/bin/sh
yarn set version berry
yarn add --dev typescript eslint prettier stylelint
yarn plugin import typescript
yarn plugin import interactive-tools

yarn dlx @yarnpkg/sdks vscode
yarn add @types/node@~16 -D

#mkdir {src,lib}

cat <<\EOF > "tsconfig.json"
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "lib",
    "rootDir": "src"
  },
  "lib": ["es2020"],
  "include": ["src"]
}
EOF
