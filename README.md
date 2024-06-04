# Description
    npm package for validate country mobile.
# Installation
    `npm i validate-country-mobile --save`
        
    let vcm = require('validate-country-mobile');

# How to use
Let's see about js code:
```js
    let vcm = require('validate-country-mobile');
    
    let _numberinfo=vcm.validatenumber("1","9876543210");

    console.log(_numberinfo); // returns as follows
    {
      status: true,
      info: {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
        accepetedLength: [ 10 ]
      }
    }

    let _numberinfo=vcm.validatesinglenumber("+0019876543210");

    console.log(_numberinfo); // returns as follows
    {
      status: true,
      info: {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
        accepetedLength: [ 10 ]
      }
    }

```

# Support

Happy to add more, and need any updates, do get in touch on my telegram over [@chigovera](https://t.me/chigovera)
