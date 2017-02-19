'use strict';
const current =  [ "xxx", "aaa", "yyy", "hij" ];
const history =  [[ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]];

// Using Node.js
const fs = require('fs');
const write = fs.createWriteStream('./result.txt');
const readline = require('readline');

function takeInputAndOutput (curr, hist, cb) {
  curr.forEach((currentData, i) => {
    history.forEach((hstArr) => {
      hstArr.map((data) => {
        if(data === currentData){
          curr.splice(i, 1);
        }
      });
    });
  });
  history.shift();
  history.push(current);
   cb(history, current);
}


function cb (newHistData, newCurrentData) {
  var str = JSON.stringify(newHistData);
  var str2 = JSON.stringify(newCurrentData);
  var concat = 'new histroy : ' + str + "\n" + 'new current : ' + str2;
  write.write(concat, 'utf8');
}

//see the result.txt file for the result!!
takeInputAndOutput(current, history, cb)
