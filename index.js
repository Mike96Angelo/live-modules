module.exports = {
  LiveModules: function (requires) {
    var self = this,
      dir = __dirname,
      gaze = require('gaze');
    this.require = function (mod, vrr, callback) {
      if (typeof mod === 'string' && typeof vrr  === 'string') {
        gaze(['js','json','node'].indexOf(mod.split('.').pop()) !== -1 ? mod : mod + '/*', function () {
          this.on('all', function() {
            delete requires.cache[requires.resolve(mod)];
            try {
              global[vrr] = requires(mod);
              typeof callback === 'function' ? callback('', vrr, mod) : null;
            } catch (err) {
              typeof callback === 'function' ? callback(err, vrr, mod) : null;
            }
          });
        });
        global[vrr] = requires(mod);
        typeof callback === 'function' ? callback('', vrr, mod) : null;
      }
    }
  },
  createLiveModules: function (requires) {
    return new this.LiveModules(requires);
  }
};