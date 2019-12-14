'use strict';
const buildAstTransform = require('./lib/ast-transform');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    const config = this.app.project.config();

    this.app.registry.add('htmlbars-ast-plugin', {
      name: 'env-helper-static-transform',
      plugin: buildAstTransform(config),
      baseDir() {
        return __dirname;
      },
    });
  },

}
