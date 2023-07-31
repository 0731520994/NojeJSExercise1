
const 
{writeFile , readFile,
appendFile} = require ('fs');


const Write = 'Hello, this is my first attempt';
writeFile('./data.txt', Write, 'utf-8', (err) => {
  if (!err) {
    console.log('Successfully written to data.txt🤗');
  } else {
    console.log('An error occurred while writing data:', err);
  }
});


const write = 'Second attemp?';
writeFile('./data.txt', write, 'utf-8', (err) =>{
  if (!err) {
    console.log('Successfully written again 👌');
  }else{
    console.log('error occured, sorry!', err );
  }
});


const newText = '\nI can code😊';
appendFile('./data.txt', newText, 'utf-8', (err) => {
  if (!err) {
    console.log('Successfully appended to data.txt 👌');
  } else {
    console.log('An error occurred while appending data:', err);
  }
});