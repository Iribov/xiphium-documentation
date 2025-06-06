---
title: Xiphium 2025-W23 update
authors:
  - jim
---

Here is the weekly update of (significant) changes made in Xiphium this week, extracted from Git(Hub).

:::warning
These are interpretations of code read from the weekly changes from Git(Hub) and are therefore prone to errors.
:::

:::info
A total of 216 files were changed. This makes it more difficult to find significant changes to discuss here.
:::
<!--truncate-->

## Financial Dashboard
The financial dashboard has a new tab showing debitor information. Development of this dashboard is still in progress.

## Experiment scan menu
Bug resolved where a job could be made without having scanned anything.

## TCPB
Updates related to tooltips, and an improvement in drawing weeks.

## Misc
***Find_ORDA_Relation*** has been rewritten to be a proper Breadth first search using iteration instead of recursion (making method ***Find_ORDA_Relation1*** obsolete). This algorithm finds the shortest path between 2 tables and returns the ORDA link string (the shortest path is not necessarily the correct path).

## Meme of the week
![](Ancient_Scriptures.jpeg)
_Meme of the week is NOT a recurrent theme and is only instantiated whenever I feel like it._