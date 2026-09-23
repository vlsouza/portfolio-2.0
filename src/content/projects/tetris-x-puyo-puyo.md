---
title: Tetris x Puyo-Puyo
type: Puzzle game
platform: C/C++
category: games
order: 5
stack: [cpp, sdl2]
thumb: https://static.wixstatic.com/media/595997_ae12aa751e9c49cca40f9d4bd5649dfe~mv2.png
summary: A falling-block puzzle that mixes Tetris controls with Puyo-Puyo color matching. It's written from scratch in C/C++ with SDL2 and open source.
cta:
  heading: See it on GitHub
  label: go to GitHub >>>
  url: https://github.com/vlsouza/puyo-puyo-challenge
media:
  - src: https://static.wixstatic.com/media/595997_16c41158a8f24bc5bcf274c2e8b61eca~mv2.png
  - src: https://static.wixstatic.com/media/595997_6951f85b71a0435283c6d8ae6ecc4b53~mv2.png
---

## The Project

### Gameplay

- Press space to start.
- Arrow keys move the pieces, ↑ rotates, ↓ speeds up the fall and space drops the piece.
- Score by clearing matches and advance through levels. The game ends when the blocks reach the top.

### Mechanics

- 8x16 grid with pairs in 4 different colors.
- Pairs split and each piece falls to the lowest position it can reach.
- Once nothing is moving, same-colored matches are cleared and the next pair spawns.

### Key features

- Simple graphical interface built directly on SDL2, with no game engine.
- Familiar controls and classic gameplay.
