# Installation

As previously mentioned Riot API Connector is a Laravel package and will need to be installed into a new or an existing Laravel project.

To install Riot API Connector you may use **Composer**.

```bash
composer require anthonyrave/riot-api-connector
```

After installing the package, execute the `riot-api-connector:install` in order to add the `RIOT_API_KEY` environment variable into your `.env` file.

```bash
php artisan riot-api-connector:install
```

You can now set your API key in your `.env` file. You can generate this key on [Riot's developer portal](https://developer.riotgames.com/).

In order to create the required tables in the database to save summoners and champions information you have to run the migrations.

```bash
php artisan migrate
```

You're now ready to use Riot API Connector features!