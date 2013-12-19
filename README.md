live-modules
============

Node modules can automatically update themselves while app is running if modules are edited.  No need to restart the app every time!

Why Live Modules?

    live modules allow you to make changes to a module while your app is running.

To install Live Modules:

    npm install live-modules

Documentation:

    var lm = require('live-modules').createLiveModules(require);

    lm.require(mod, vrr, [callback]);

    mod:
        type: string
        holds: module name or filename

    vrr:
        type: string
        holds: global variable to assign module to

    callback:
        gives: err, vrr, mod as args
            err: error  [Error]
            vrr: name of global variable  string
            mod: module name or filename  string

Example:

    var lm = require('live-modules').createLiveModules(require);

    lm.require('myModule','myVar', function (err, vrr, mod) {
        if (err) {
            console.log(err);
        } else {
            /* do stuff with module */
            console.log(myVar.name); // or console.log(global[vrr].name);
        }
    });

Created By:

    Michaelangelo Jong
