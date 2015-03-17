
var fs = require('fs'),
    bookReport = function (filePath, parser) {
        return new Promise(function (resolve, reject) {
            fs.readFile(filePath, {encoding: 'utf8'}, function (err, file) {
                var parsed;
                if (err) {
                    reject(err);
                } else {
                    if (parser) {
                        if (typeof parser !== 'function') {
                            reject('parser argument must be a valid parser function');
                        } else {
                            try {
                                parsed = parser(file);
                                resolve(parsed);
                            } catch(e) {
                                reject(e);
                            }
                        }
                    } else {
                        resolve(file);
                    }
                }
            });
        });
    };

module.exports = bookReport;
