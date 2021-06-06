// declare import , module name can not include extension
import {hello} from "./hello"
import {Greeter} from "./greeting"
console.log(hello("taiwan"))

export const {snakeCase} = require('lodash');
const chalk = require('chalk');

['HelloWorld', 'left pad', 'ECMAScript'].forEach(text => {
    console.log(chalk.green.underline.bold(snakeCase(text)));
  });


//  let greeter= new Greeter()
 let greeter= new Greeter("Taiwan")

  console.log(greeter.greet())
