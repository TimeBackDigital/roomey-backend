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
3. Check browsers:
    - http://localhost:8080/api/docs : Non authentication related APIs.
    - http://localhost:8080/api/auth/reference : Authentication APIs.
    
## Production Setup

TO FOLLOW
