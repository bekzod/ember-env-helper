function get(obj, key) {
  let keys = key.split('.')
  let val = obj;
  let k;
  while(k = keys.shift()) {
    val = val[k]
  }
  return val;
}

class AstTransform {
  constructor(options) {
    this.options = options;
  }

  transform(ast) {
    this.syntax.traverse(ast, {
      BlockStatement: (node) => {
        return this._applyTransform(node);
      },

      MustacheStatement: (node) => {
        return this._applyTransform(node);
      }
    });

    return ast;
  }

  _applyTransform(node) {
    if (node.path.original === 'env') {
      let key = this._getKey(node);
      if (key) {
        return this.syntax.builders.text(get(this.envConfigs, key));
      }
    }
  }

  _getKey(node) {
    return node.params.length && node.params[0].type === 'StringLiteral' ? node.params[0].value : null;
  }
}

function buildAstTransform(envConfigs) {
  return class EnvHelperAstTransform extends AstTransform {
    constructor(options) {
      super(options)
      this.envConfigs = envConfigs;
    }
  }
}

module.exports = buildAstTransform;
