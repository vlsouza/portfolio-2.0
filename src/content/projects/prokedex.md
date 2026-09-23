---
title: Prókedex
type: Alexa skill
platform: Node.js
category: backend
order: 4
stack: [node, alexa, pokeapi]
thumb: https://static.wixstatic.com/media/595997_54dbb9b82c5d45baa88957120d782b69~mv2.png
summary: An Amazon Alexa skill that answers Pokémon battle questions by voice for generations 1 to 7. It's published on Amazon and rated 5 stars by its users.
cta:
  heading: See it on Amazon
  label: go to Amazon >>>
  url: https://www.amazon.com/Aut%C3%B4nomo-Pr%C3%B3kedex-for-Master-Trainers/dp/B085WSPYYD
media:
  - src: https://static.wixstatic.com/media/595997_eaaf9d309a2348c383df2bba06809ed8~mv2.png
    caption: The Prókedex page on Amazon (English-speaking stores only)
    href: https://www.amazon.com/Aut%C3%B4nomo-Pr%C3%B3kedex-for-Master-Trainers/dp/B085WSPYYD
  - src: https://static.wixstatic.com/media/595997_52174c47f9e042e394036eec109bb74c~mv2.png
    caption: Organic review from a user in the US, 2020
    href: https://www.amazon.com/gp/customer-reviews/R1LUK76X9Z4UD3/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B085WSPYYD
---

## The Project

### The problem

In the middle of a Pokémon battle, trainers need matchups and evolution data fast, and <mark>looking it up by hand breaks the flow</mark>.

### What it does

Answers by <mark>voice command</mark>:

- Evolution chains: where, when and how a Pokémon evolves
- Natures, abilities and types
- Move damage class by type
- Type effectiveness: super effective, not very effective and no effect, both against and from each type

### How it's built

- Node.js skill on the Alexa Skills Kit.
- Data from **PokéAPI**, the public RESTful Pokémon API.
