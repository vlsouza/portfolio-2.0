---
title: Rotom MCP
type: MCP server
platform: Go
category: backend
order: 1
stack: [golang, mcp]
thumb: /images/rotom-mcp.svg
summary: An MCP server that gives LLMs like Claude 10 tools to query the Pokémon Trading Card Game API, all backed by one shared in-memory cache. Ask about any card, set, price or tournament legality and get real data back.
cta:
  heading: See it on GitHub
  label: go to GitHub >>>
  url: https://github.com/vlsouza/pokemon-tcg-rotom-mcp
---

## The Project

### The problem

LLMs are great at talking about Pokémon cards, but they <mark>hallucinate prices, sets and legality</mark>. The upstream Pokémon TCG API is also tight: 1,000 requests a day, 30 a minute per IP, and frequent 500 errors.

### What it does

Rotom MCP exposes the API to the model as real tools, so it looks things up instead of guessing:

- `search_cards`: search cards by name, set and other filters
- `get_card`: full card details by ID
- `list_sets` / `get_set`: sets, optionally filtered by series
- `get_card_prices`: TCGPlayer and Cardmarket prices
- `get_card_legality`: Standard, Expanded and Unlimited legality
- `list_types`, `list_subtypes`, `list_supertypes`, `list_rarities`: reference data

### How it's built

- **Go**, shipped as a single binary with no runtime dependencies.
- **MCP over stdio**, plug-and-play with Claude Desktop and Claude Code.
- Every tool call goes through <mark>one shared in-memory cache with a 10-minute TTL</mark>. A repeat query is a ~40 ns lookup instead of a ~150–650 ms network round trip.

### Try it

```json
"mcpServers": {
  "pokemon-tcg-rotom-mcp": {
    "command": "/path/to/pokemon-tcg-rotom-mcp"
  }
}
```
