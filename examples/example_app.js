var lm = require('live-modules').createLiveModules(require);

lm.require('./js_file_module.js','js',function (err,vrr,mod) {
  if (err) {
    console.log(err);
  } else {
    global[vrr].log('it worked!'); // or js.log('it worked!');
  }
});
lm.require('./folder_module','folder',function (err,vrr,mod) {
  if (err) {
    console.log(err);
  } else {
    global[vrr].log('it worked!'); // or folder.log('it worked!');
  }
});
lm.require('./json_file_module.json','json',function (err,vrr,mod) {
  if (err) {
    console.log(err);
  } else {
    console.log(global[vrr]); // or console.log(json);
  }
});