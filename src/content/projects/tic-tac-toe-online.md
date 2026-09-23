---
title: Tic-Tac-Toe Online
type: Multiplayer game
platform: Unity + Go
category: games
order: 1
stack: [unity, golang, dynamodb]
thumb: https://static.wixstatic.com/media/595997_f298a8d6d17241c785ec59bb6b0143f6~mv2.png
summary: The classic game, played online. Players are matched automatically or create their own match, with a Unity client talking to a Go API backed by DynamoDB.
cta:
  heading: Play it on itch.io
  label: go to itch.io >>>
  url: https://vvlsouza.itch.io/tic-tac-toe-online
media:
  - src: https://static.wixstatic.com/media/595997_fc45e920072246e8bcebd7265098bcae~mv2.png
---

## The Project

### Gameplay

- Click **Play** to be matched with an online opponent, or to open a new match.
- Once an opponent joins, place your X or O strategically to win.
- Play as many matches as you like.

### Mechanics

- Automatic matchmaking: join a waiting match or create one.
- Click a blank space to mark X or O.
- Quit the match with the red cross button.

### Key features

- Real online multiplayer, not hot-seat.
- Backend written in Go: [tic-tac-toe-api](https://github.com/vlsouza/tic-tac-toe-api).
