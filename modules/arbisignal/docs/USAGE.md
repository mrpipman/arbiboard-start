# ArbiSignal API – Usage Guide

## Endpoint

`POST /predict`

### Payload
```json
{
  "id": "match_203",
  "home": "Team A",
  "away": "Team B",
  "date": "2025-06-10T19:00:00Z"
}
```

### Response
```json
{
  "event_id": "match_203",
  "predicted_outcome": "Home",
  "confidence": 0.89,
  "timestamp": "2025-06-04T10:01:22.182Z"
}
```
