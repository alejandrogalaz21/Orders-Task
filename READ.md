# Tasks To Do 

## Description

We purchase parts from our vendors.
Our vendors are Alabama Architectures (aka: AA), Brooklyn Batteries (aka BB), Colorado Chips (aka: CC), and Delaware Diodes (aka: DD).
The parts we purchase are Panels and Components
We have a list of purchase orders, each with their Purchase Order ID, and their cost.
The Purchase Order ID contains the vendor we purchased from, an order counter, and the type of part we ordered.
For example -- If an ID was structured as "CC-12-P", that would mean we purchased from the vendor named CC, it's our 12th order from them, and that we ordered a Panel
We need you to fetch a file containing the Purchase Orders from https://mf-public-demo-files.s3.amazonaws.com/pos.json, and generate the expected output:

1. An integer indicating the total number of Purchase Orders that we placed
Dan Drown16:29


2. All the Purchase Order Ids and their respective costs.
The list should be grouped by Vendor, and sorted by cost in decreasing order, such that we see the most expensive to least expensive Purchase Orders for each Vendor.
Please Output the Vendors in the following order: AA, BB, CC, DD


## Result :
```JSON
{
  "filterOrders": [
    {
      "AA": [
        [
          {
            "id": "AA-3-P",
            "cost": 11.03
          },
          {
            "id": "AA-5-C",
            "cost": 11.59
          },
          {
            "id": "AA-4-C",
            "cost": 25.86
          },
          {
            "id": "AA-1-P",
            "cost": 29.26
          },
          {
            "id": "AA-2-P",
            "cost": 37.98
          },
          {
            "id": "AA-0-P",
            "cost": 39.37
          }
        ]
      ]
    },
    {
      "BB": [
        [
          {
            "id": "BB-0-C",
            "cost": 15.66
          },
          {
            "id": "BB-6-P",
            "cost": 20.29
          },
          {
            "id": "BB-2-C",
            "cost": 31.39
          },
          {
            "id": "BB-5-C",
            "cost": 41.3
          },
          {
            "id": "BB-3-P",
            "cost": 46.4
          },
          {
            "id": "BB-4-C",
            "cost": 48.34
          },
          {
            "id": "BB-1-P",
            "cost": 50.6
          }
        ]
      ]
    },
    {
      "CC": [
        [
          {
            "id": "CC-8-P",
            "cost": 13.42
          },
          {
            "id": "CC-3-C",
            "cost": 16.99
          },
          {
            "id": "CC-2-P",
            "cost": 23.22
          },
          {
            "id": "CC-0-C",
            "cost": 26.85
          },
          {
            "id": "CC-1-C",
            "cost": 29.05
          },
          {
            "id": "CC-4-P",
            "cost": 34.39
          },
          {
            "id": "CC-7-P",
            "cost": 36.39
          },
          {
            "id": "CC-5-C",
            "cost": 37.38
          },
          {
            "id": "CC-10-P",
            "cost": 46.47
          },
          {
            "id": "CC-9-C",
            "cost": 47.47
          },
          {
            "id": "CC-6-P",
            "cost": 48.63
          }
        ]
      ]
    },
    {
      "DD": [
        [
          {
            "id": "DD-9-P",
            "cost": 12.24
          },
          {
            "id": "DD-5-C",
            "cost": 15.75
          },
          {
            "id": "DD-8-P",
            "cost": 18.59
          },
          {
            "id": "DD-3-C",
            "cost": 18.76
          },
          {
            "id": "DD-1-P",
            "cost": 25.47
          },
          {
            "id": "DD-11-P",
            "cost": 27.79
          },
          {
            "id": "DD-4-P",
            "cost": 37.05
          },
          {
            "id": "DD-2-P",
            "cost": 41.46
          },
          {
            "id": "DD-7-P",
            "cost": 43.22
          },
          {
            "id": "DD-0-P",
            "cost": 46.13
          },
          {
            "id": "DD-10-C",
            "cost": 46.91
          },
          {
            "id": "DD-6-C",
            "cost": 49.08
          }
        ]
      ]
    }
  ],
  "vendors": [
    "AA",
    "BB",
    "CC",
    "DD"
  ],
  "totalOfOrders": 36
}
```

## Instructions

## install dependencies
```bash
$ yarn 
```
## Run The App
```bash
$ yarn start
```
