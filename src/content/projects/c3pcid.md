---
title: c3pCID
type: Discord bot
platform: Go
category: backend
order: 3
stack: [golang, discord-api]
thumb: https://static.wixstatic.com/media/595997_719c0b3bd20d4192ad385c0256db9d2c~mv2.png
summary: A Discord bot that collects and curates messages from chosen channels, turning a community's best moments into content for streams, websites or even an Alexa skill.
cta:
  heading: See it on GitHub
  label: go to GitHub >>>
  url: https://github.com/vlsouza/c3pcid
---

## The Project

### The problem

Communities produce great content in Discord, like a streamer's funniest quotes, but <mark>it gets lost in the chat history</mark>.

### What it does

- Collects and stores information from selected Discord channels.
- Filters what to keep with RegEx rules or emoji reactions.
- Makes the stored content available to Twitch overlays, websites or other applications.

### How it's built

- Written in Go on top of the Discord Bot API.
- Setup: create a Discord bot, get its token and list the channel IDs to monitor.
