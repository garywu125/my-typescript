const fs=require('fs')
try {
    const data = fs.readFileSync('./diary/20210605001.json', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }


// let url="file:///home/garywu125/code/ts-script/falcon/getDirNewestFile/diary/20210605001.json"


   