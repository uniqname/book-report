# book-report
Returns a promise to read a file optionally parsed according to a specified parsing function.

##Usage

###Install

    npm install book-report --save;


###Simple file read

bookReport can simply take a filePath and will return a promise that resolves with the utf-8 endcoded contents of the file.

    var bookReport = require('book-report'),
        say = require('say'),
        speak = say.speak.bind(say, null);

    bookReport('./three-blind-mice.txt').then( speak );

###Read and parse file

bookReport can also accept an optional parse function as a second argument. bookReport will execute the parse function with the contents of the UTF-8 encoded file before resolving.

    var bookReport = require('book-report'),
        ini = require('ini');

    bookReport('./.git/config', ini.parse).then( (config) => console.log( config['remote "origin"']) );

If at any time an error occurs, the promise is rejected with the error that was raised. 
