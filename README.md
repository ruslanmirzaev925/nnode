# nnode - a nicer node
So nice, you'd meet it with your parents.

`nnode` executes .js files with node + babel.

It works just ike `node`, only `n`icer.

For using the `nnode` cli, install the package globally:
```
npm install -g nnode
```

When using the `nnode` package as `require('nnode')`, install the package as a dependency:
```
npm install nnode --save
```

`run-me.js`
```
import path from 'path';
const x = { this: 'this', very: 'really' };
const { very } = x;
console.log(`Awww, this is ${very} nice.`);
```

If you try running `node run-me.js`

-- `SyntaxError: Unexpected token import`

That's not very nice, try something nicer, like `nnode run-me.js`:

-- `Awww, this is really nice.`

You can also `require('nnode')` which works just [require('babel-register')](https://babeljs.io/docs/usage/babel-register) without needing to setup .babelrc and installing babel presets, plugins and other non-niceties.
Useful when running stuff with `pm2` or `nodemon`.

Included with `nnode` are:
- babel-preset-env
- babel-preset-flow
- babel-plugin-transform-object-rest-spread
- babel-plugin-transform-decorators
