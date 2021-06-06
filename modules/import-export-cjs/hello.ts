const chalk = require('chalk');

function capitalize(word:string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
export function hello(name:string) {
    // return chalk.bold.underline.yellow`Hello  ${capitalize(name)}`
//  return  chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold(name) +
// 	' that becomes green again!'
// )

return  chalk.green
	` I am a green line 	${chalk.blue.underline.bold(name)} that becomes green again! `    
  }

  