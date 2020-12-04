# System Design Capstone
Inherited Project to build & optimize database using SQL and NoSQL and create a server to handle webscale traffic.
- Front-End Owner: Lucy Chen
- Back-End Owner: Brandon Russesll

---
## Related Projects

  - https://github.com/OptimizationPrime/Main-Gallery
  - https://github.com/OptimizationPrime/reviews
  - https://github.com/OptimizationPrime/Affordability-Calc
  - https://github.com/OptimizationPrime/Brandons-Proxy

---
## Table of Contents

1. [Server API](#server-api)
2. [Requirements](#requirements)
3. [Development](#development)

---
## Server API
- [CREATE listing](#create-listing)
- [READ listing info](#read-listing-info)
- [UPDATE listing info](#update-listing-info)
- [DELETE listing](#delete-listing)
- [CREATE image for listing](#create-image-for-listing)

---
### CREATE listing
  * POST `/api/listings`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "price": "Number",
      "roomCount": "Number",
      "bathCount": "Number",
      "sqft": "Number",
      "address": {
        "street": "String",
        "unit": "String",
        "neighborhood": "String",
        "city": "String",
        "state": "String",
        "zip": "Number",
        "country": "String"
      }
    }
```
---
### READ listing info
  * GET `/api/listings/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "price": "Number",
      "roomCount": "Number",
      "bathCount": "Number",
      "sqft": "Number",
      "address": {
        "street": "String",
        "unit": "String",
        "neighborhood": "String",
        "city": "String",
        "state": "String",
        "zip": "Number",
        "country": "String"
      }
    }
```
---
### UPDATE listing info
  * PATCH `/api/listing/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "price": "Number",
      "roomCount": "Number",
      "bathCount": "Number",
      "sqft": "Number",
      "address": {
        "street": "String",
        "unit": "String",
        "neighborhood": "String",
        "city": "String",
        "state": "String",
        "zip": "Number",
        "country": "String"
      }
    }
```
---
### DELETE listing
  * DELETE `/api/listing/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `204`

---
### CREATE image for listing
  * POST `/api/listing/:listingId/images`

**Path Parameters:**

  * `listingId` listing id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "image": "image URL",
      "description": "String",
      "listing": "id Number"
    }
```

---
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

---
## Development

### Installing Dependencies

From within the root directory:

`npm install`

---