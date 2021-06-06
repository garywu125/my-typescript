$ npm ts-node main.ts

# using typescript import/export with common.js module from NPM
  * main.ts can use reuire(cjs) -- from third party via npm
  * hello.ts can user require(cjs) -- from third party via npm


## static import using import statement , module name can not include extension
import {hello} from "./hello"

## dynamic import using import() -- false

