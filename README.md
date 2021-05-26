## NOT DONE 

This will help interact with the dbots api. Dbots: https://dbots.co


# dbots.js
 

 ## Packs In JS

 ```javascript
 const { dbotsPacks } = require('dbots.js')
 const dbots = new dbotsPack({
     key: "KEYYYYYYYY",
     botid: "298423749082374"
 })

 dbots.getAllPacks()
 ```

## Stats In JS

```javascript
const { dbotsStats } = require('dbots.js')
const dbots = new dbotsStats({
         key: "KEYYYYYYYY",
         botid: "298423749082374"
})

dbots.postStats('1,000')
```


