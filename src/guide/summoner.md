# Summoner

## Introduction

You probably already used a third party website using the Riot's API such as [op.gg](https://www.op.gg/) or [championmastery.gg](https://championmastery.gg/). Very often the first step of these apps is to enter a summoner name and to choose a server.

To start a summoner request you have to use the `RiotApi` facade and its `summoner()` method. The method requires to pass a `Region` model as parameter.

```php
use RiotApiConnector\Facades\RiotApi;

$summonerRepository = RiotApi::summoner($region);
```

## Available methods

- [byId()](#byid)
- [byName()](#byname)
- [byAccountId()](#byaccountid)
- [byPuuid()](#bypuuid)


### byId()

The `byId()` method is used to retrieve a summoner by using an encrypted summoner ID.

```php
RiotApi::summoner($region)->byId('jbmKngnovd_OUMmfeC6tWi0I9DBJIoQ2tAwAT1R4qpwGsaI');
```

### byName()

The `byName()` method is used to retrieve a summoner by using its name.

```php
RiotApi::summoner($region)->byName('Vetheo1');
```

### byAccountId()

The `byAccountId()` method is used to retrieve a summoner by using an encrypted account ID.

```php
RiotApi::summoner($region)->byAccountId('ylVjyuCPwQagGBxMhZHeEbOena2gMC--MFyLpGByMk4R7gR');
```

### byPuuid()

The `byPuuid()` method is used to retrieve a summoner by using an encrypted PUUID.

```php
RiotApi::summoner($region)->byPuuid('5FrJEE_ZxtnF8TuX7R7bnUmEtDxVzwAAkpkMu1lujAsYG8ZtJio4dPWzGDSIkVPX-yfPYxMCuqPbOg');
```

## Execute request

### fromApi()

The `fromApi()` will execute the previously configured request. If the [cache system](#cache-system) is enabled, it will also save the retrieved summoner in the DB.

```php
use RiotApiConnector\Facades\RiotApi;

$summoner = RiotApi::summoner($region)->byName('Vetheo1')->fromApi();
```

### fromDb()

The `fromDb()` will execute the previously configured query and will return the summoner if it has already been saved in the DB.

```php
use RiotApiConnector\Facades\RiotApi;

$summoner = RiotApi::summoner($region)->byName('Vetheo1')->fromDb();
```

### Cache system

In order to reduce API requests, the package provides a "cache" system that saves the summoners previously fetched from the API into the DB.

To take full advantage of this feature, you can use the `get()` method instead of the ones above.

```php
use RiotApiConnector\Facades\RiotApi;

$summoner = RiotApi::summoner($region)->byName('Vetheo1')->get();
```

The `get()` method will determine the best way to retrieve the requested summoner.

You can configure this feature in the `riot_api_connector.php` config file.

```php
'cache' => [
    'enabled' => true,
    'duration' => 7 * 24 * 60 * 60, // 7 days
],
```
