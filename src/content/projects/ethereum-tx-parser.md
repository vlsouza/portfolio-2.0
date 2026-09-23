---
title: Ethereum Parser
type: Blockchain parser
platform: Go
category: backend
order: 2
stack: [golang, json-rpc, swagger]
thumb: /images/ethereum-parser.svg
summary: A Go service that reads the Ethereum blockchain over JSON-RPC and tracks inbound and outbound transactions for any subscribed address, exposed as a small REST API.
cta:
  heading: See it on GitHub
  label: go to GitHub >>>
  url: https://github.com/vlsouza/ethereum-tx-parser
---

## The Project

### The problem

Wallets and notification services need to know when an address sends or receives funds, <mark>without running a full indexer</mark>.

### What it does

- `GET /block/current`: returns the latest parsed block.
- `POST /subscribe/{address}`: starts monitoring an address.
- `GET /transactions/{address}`: returns inbound and outbound transactions for it.
- Swagger UI documents the whole API.

### How it's built

- `/internal/rpcclient`: JSON-RPC communication with an Ethereum node.
- `/internal/parser`: core parsing and in-memory storage.
- `/api`: HTTP layer, with `make` targets to build, test, run and generate the docs.
