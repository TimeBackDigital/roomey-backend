# Roomey Backend

## Description

REST API backend for Roomey.

## Tech Stack:

- NestJS
- PostgreSQL
- Redis

## Local Setup (Docker)

### Requirements

- Docker

Optionals
- Google keys for Maps API
- Stripe Keys
- Twilio Keys

### Steps

1. update .env based on .env.example
2. Run Docker
````
docker compose up -f compose.local.yml -d --build
```
3. Check browser http://localhost:8080. You should receive a 404 JSON error.

## Production Setup

TO FOLLOW
