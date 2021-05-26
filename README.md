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


## Packs In TS

```typescript
import { dbotsPacks } from 'dbots.js'
const dbots: dbotsPacks = new dbotsPacks({
    key: "KEYYYYYYYY",
    botid: "298423749082374"
})

dbots.getAllPacks()
```

## Stats In TS

```typescript
import { dbotsStats } from 'dbots.js'
const dbots: dbotsStats = new dbotsStats({
    key: "KEYYYYYYYY",
    botid: "298423749082374"
})

dbots.postStats('1,000')
```


## Packs Documentation

`.getPack('Best-Bots')`
This will allow you to check out packs on dbots.

`.getAllPacks()`
This will get all packs.

`VotePack('Best-Bots')`
This will allow you to vote packs.


## Stats Documentation

`postStats('1,0000')`
This will post your bot stats.

`getLog()`
This will get the audit logs of your bot.
