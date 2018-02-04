"use strict";

const fs = require('fs');


let studentDidTheirHomework = (fileName) => {
  let studentFileJSON = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  if (studentFileJSON.cells[studentFileJSON.cells.length-1].outputs) {
    //console.log(studentFileJSON.cells[39]);
    return true;
  } else  {
    console.log(fileName)
    console.log(studentFileJSON.cells[studentFileJSON.cells.length-1])
    return false;
  }
}

let directoryFiles = (directory) => {
  return fs.readdirSync(directory).filter(file => file.search('.ipynb') > -1);
}


let didNotDoHomeworkFiles = (directory) => {
  let df = directoryFiles(directory);
  return df.filter(file => !studentDidTheirHomework(file));
}

//studentDidTheirHomework('./xinran_5027059_72468768_Ran Xin-Lab 0.ipynb')

console.log(didNotDoHomeworkFiles('./'))
