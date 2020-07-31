---
layout: senate
title: Senate
permalink: /senate/
---

# Freedom Torch

I found the 100 handles and plugged them into Twitter's API. Then I generated 100
JSON objects with an `import` array that includes all the senator usernames this
paticular senator follows. Bernie Sanders for example:

``` json
{
   "name":"sensanders",
   "friends_count":1999,
   "followers_count":4667647,
   "statuses_count":16482,
   "displayName":"Bernie Sanders",
   "imports":[
      "lisamurkowski",
      "senfeinstein",
      "senbennetco",
      // ...
   ],
   "state":"Vermont",
}
```

I used Twitter's naming standards to create 3 relationship types:

`follows`: Needy senator that only follows. (orange)

`followed`: Cool senator that is followed.  (blue)

`friends`: Both Senators follow each other.   (purple)

### Lets take a look at the 4,950 senator relationships.
