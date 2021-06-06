/**
 *  get the newest file from the directory, output outject
 * 
 */

// setTimeout(()=>console.log("hello world"),1000)

const fs = require("fs");
const path = require("path");


// declare Object type via type
type FileInfo= {
  file:string,
  mtime:Date
}


interface Metrix {
  id:number
  metric:string
  sdata:string
  data:number
}

function formatMetrix(aMetrix: any): Metrix {
  // return { title: movie.title, id: movie.id };
  return {id:aMetrix.id,metric:aMetrix.metic,sdata:aMetrix.sdata,data:aMetrix.data}
}

// directory path
// const dir='./logs/'
const dir='./diary/'
let matrixs:Metrix[]=[]

// you can also declare object type via interfacce
// interface FileInfo {
//   file:string,
//   mtime:Date
// }

const getMostRecentFile = (dir:string):string | undefined => {
  const files :FileInfo[]= orderReccentFiles(dir);
  return files.length ? files[0].file : undefined;
};


const orderReccentFiles = (dir:string):FileInfo[] => {
  return fs.readdirSync(dir)
    .filter((file:string) => fs.lstatSync(path.join(dir, file)).isFile())
    .map((file:string) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))
    .sort((a:FileInfo, b:FileInfo) => b.mtime.getTime() - a.mtime.getTime());
};

try {
    if (! fs.existsSync(dir)) {
      //  console.log(`directory : ${dir} not exist `)   
      throw new Error(`directory : ${dir} not exist `)
    } 

    let retFilename :string | undefined =getMostRecentFile(dir);

    // __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
    if (! retFilename) {      
        console.log(retFilename)
        throw new Error(retFilename +" , file name not exist !!!!")
    }  
    const data = fs.readFileSync(dir+retFilename, 'utf8')
    let matrixs= JSON.parse(data);    
    // console.log(data)               
    
    // console.log(matrixs);
    console.log("==== file name====: "+retFilename)
    // get distinct field value from array of records
    let columns=Array.from(new Set(matrixs.map((item:Metrix)=>item.metric)))
    console.log(columns);

    // declare output structure ??
    // declare output arrary of output structure
    // iterate matrixs into output arrary of output structure

    // websocket client to websocket server
    
    
} catch (err) {
  console.log("==========")
  console.log(err.message)
}

// composite a matrix table


  