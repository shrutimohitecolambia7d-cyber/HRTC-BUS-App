# HRTC Backend API

Base URL:
http://localhost:3000

## Health

GET /health

## Authentication

POST /api/auth/register
Body:
{
  "email": "user@example.com",
  "password": "password"
}

POST /api/auth/login
Body:
{
  "email": "user@example.com",
  "password": "password"
}

POST /api/auth/logout

GET /api/auth/session

## Buses

GET /api/buses

GET /api/buses/:id

## Routes

GET /api/routes

GET /api/routes/:id

## Stops

GET /api/stops/:route_id

## Live Location

POST /api/live-location

Body:
{
  "bus_id": "bus-id",
  "latitude": 31.1048,
  "longitude": 77.1734
}

GET /api/live-location/:bus_id

## Important

Database field names are provisional.
Final names must match Person 3's database structure.