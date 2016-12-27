var fs = require('fs');
fs.readFile('arisDataV2.json', function(err, data) {
    var obj = JSON.parse(data);
    obj.systems.push({"guid": "123459", "name": "Success Factors", "process_1": {"guid": "121314", "name": "Process model 1"}, "process_2": {"guid": "121324", "name": "Process model 8"}, "process_3": {"guid": "121315", "name": "Process model 4"}});
    var newJSON = JSON.stringify(obj, null, 3);
    fs.writeFile('arisDataV2.json', newJSON, function(err) {
        console.log('done');
    });
});
