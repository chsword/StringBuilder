StringBuilder
=============

A javascript StringBuilder will be chosing a fast way to run string concat.

unit test
```js
    var sb = new StringBuilder();
    sb.append("a").append("b");
    sb.appends("a","b");
    console.log(sb.toString());
    sb.append("a");
    sb.append("b");
    console.log(sb.toString());
    sb.clear();
    
```
