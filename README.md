ember-env-helper
==============================================================================

 Use your environment variable in templates with ease, just pass environment variable key to `{{env 'key'}}` helper which then be replaced with real value with ast-transform each build.


Installation
------------------------------------------------------------------------------

```
ember install ember-env-helper
```

Usage
------------------------------------------------------------------------------

```hbs
  {{env 'someEnvVariable'}}
```

```js
  let ENV = {
    someEnvVariable: 'value',
    ...
  }
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above
