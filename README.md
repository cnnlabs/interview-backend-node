# Interview - Backend Node

## Core Files
```js
  Basic Operation:
   define zones - this is hardcoded into main. In the real world these could be stored in a separate file or loaded
                   from a mongo collection for example.

                   name - name of the zone
                   endpoint - location of the content we need to parse
                   parser - the zoneParser method used by the zoneProcessor
                   schema - a schema object to validate against

   for each zone definition
       create a zoneProcessor and process the zone

   when the zoneProcessor is complete it will handle outputing the new feed
    if zoneProcessor encounters and error uses the errorEmitter to emit an error message

```
