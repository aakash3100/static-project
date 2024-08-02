
const fs = require('fs');


fs.writeFile('notes.txt', 'This is the initial text.', (err) => {
  if (err) throw err;
  console.log('File created and initial text written.');

  
  fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    
    fs.appendFile('notes.txt', ' This is the appended text.', (err) => {
      if (err) throw err;
      console.log('Additional text appended.');


      fs.unlink('notes.txt', (err) => {
        if (err) throw err;
        console.log('File deleted.');
      });
    });
  });
});

////Q-2


const fs = require('fs');
const largeText = 'A'.repeat(10 ** 6); // 1 million characters

console.time('writeFileSync');
fs.writeFileSync('largefile.txt', largeText);
console.timeEnd('writeFileSync');


console.time('readFileSync');
const dataSync = fs.readFileSync('largefile.txt', 'utf8');
console.timeEnd('readFileSync');


fs.writeFile('largefile_async.txt', largeText, (err) => {
  if (err) throw err;
  console.timeEnd('writeFile');

  console.time('readFile');
  fs.readFile('largefile_async.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.timeEnd('readFile');

    console.log('Asynchronous operations complete.');
  });
});
////Q-3



function doTask(callback) {
    console.log('Task started');
    setTimeout(() => {
      console.log('Task completed');
      callback();
    }, 2000);
  }
  
 
  doTask(() => {
    console.log('Callback executed');
  });
//Q-4



function task1(callback) {
    setTimeout(() => {
      console.log('Task 1 completed');
      callback();
    }, 1000);
  }
  
  function task2(callback) {
    setTimeout(() => {
      console.log('Task 2 completed');
      callback();
    }, 2000);
  }
  
  function task3(callback) {
    setTimeout(() => {
      console.log('Task 3 completed');
      callback();
    }, 3000);
  }
  
 
  task1(() => {
    task2(() => {
      task3(() => {
        console.log('All tasks completed.');
      });
    });
  });
//Q-5

function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Task 1 completed');
        resolve();
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Task 2 completed');
        resolve();
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Task 3 completed');
        resolve();
      }, 3000);
    });
  }
  
  
  task1()
    .then(task2)
    .then(task3)
    .then(() => {
      console.log('All tasks completed.');
    })
    .catch((err) => {
      console.error('An error occurred:', err);
    });
  