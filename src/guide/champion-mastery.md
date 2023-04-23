# Champion mastery

## Introduction

To start a mastery request you have to use the `RiotApi` facade and its `mastery()` method. The method requires to pass a `Summoner` model as parameter.

```php
use RiotApiConnector\Facades\RiotApi;

$masteryRepository = RiotApi::mastery($summoner);
```

## Available methods

- [byChampion()](#bychampion)
- [top()](#top)

### byChampion()

The `byChampion()` method is used to retrieve a champion mastery for a summoner on a specific champion.

```php
$champion = Champion::where('key', 'Aatrox')->first();

RiotApi::mastery($summoner)->byChampion($champion);
```

### top()

The `top()` method is used to retrieve the highest champion masteries of a summoner. By default, it will retrieve the first 3, but you can pass an int as a parameter to retrieve less or more. 

```php
RiotApi::summoner($region)->top(5);
```

## Execute request

Just like for the summoners, there are 3 possible methods to execute the request: `fromApi()`, `fromDb()` and `get()`.

However, there are few differences:

```php
use RiotApiConnector\RiotApi;

RiotApi::mastery($summoner)->get();
```

As you probably noticed, it is possible to execute the mastery request without a specific method. This is because by default, this will retrieve every champion mastery.

The second difference is that the request can return a collection of masteries instead of only one model.

```php
use RiotApiConnector\RiotApi;

RiotApi::mastery($summoner)->get();
RiotApi::mastery($summoner)->top()->get();
```

Both requests will retrieve collections.
