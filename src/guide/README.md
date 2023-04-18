# Introduction

Riot API Connector is a Laravel package that will help you to create cool stuff with Riot Games' API. It provides easy-to-use functions to retrieve data such as summoners' information.

Objective is to offer helpers to convert fluent requests into API calls. Also, there is a cache system that help you to reduce API requests when not needed. For example, a summoner that has already been fetched will be saved in the DB and will have a valid duration of 7 days. Of course, you can edit this configuration to fit your needs.