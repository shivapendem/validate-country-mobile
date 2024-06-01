# Description
    npm package for validate mobile number.
# Installation
    `npm i validate-mobile-number --save`
        
    let vmn = require('validate-mobile-number');

# How to use
Let's see about js code:
```js
    let vmn = require('validate-mobile-number');
    
    let _numberinfo=vmn.validatenumber("1","9876543210");

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
