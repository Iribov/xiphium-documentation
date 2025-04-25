The Transfers per Plant (TPP) is a core metric for tissue culture. This metric shows how many actions/steps/handlings (a.k.a. transfers) have been done to create a single plant.

There are many different variations on TPP depending on what you define as 'a plant'. 'a plant' can be a stage2 (unrooted tissue culture) plant, a stage 3 (rooted tissue culture) plant, a stage4 (rooted and hardened) plant etc. (also see [Stages](Stages.md)).

Let's focus on the most simple variation to explain the calculation: How many transfers does it take to create a single stage2 plant, calculated per calendar year.

`TPP = Transfers this year + (StartStock this year * TPP last year)​/(Transfers this year+EndStock this year)`

With the formula of **this year’s TPP** we consider both:
1. **The work done this year** (this year’s transfers).
2. **The leftover effect from last year’s efficiency** (some of this year’s plants are still based on stock from last year).

## TPP Alternative Formula
We could simplify this formula to not be dependent on the TPP of a previous period by defining the formula as such:

`TPP = Transfers / Deliveries + ΔStock`

Where:
- **Transfers** = the number of times you propagated plants (your effort/work).
- **Deliveries** = plants sent to customers.
- **ΔStock** = change in stock = `EndStock - BeginStock`

This does mean we need to get a new parameter: **Deliveries**. Including **Deliveries** makes TPP more meaningful because it:
- Prevents underestimating your output.
- Accounts for both retained and shipped plants.
- Makes performance comparisons between periods fair.

It gives a truer sense of how efficiently your team turns **effort into real-world results** — not just future potential (stock), but actual deliveries too.

unfortunately, we are not fully there yet. It is possible that we get stock delivered from another location somwhere in the period. This has to be adjusted from the stock, making the formula:

`TPP = Transfers / Deliveries + ΔStock`

Where:
- **Transfers** = the number of times you propagated plants (your effort/work).
- **Deliveries** = plants sent to customers.
- **ΔStock** = change in stock = `EndStock - BeginStock - ExternalIn`
-  `ExternalIn` is the stock delivered from another location.

This way:
- We still give credit to actual deliveries and real growth.
- We **don’t reward** growth that came from **receiving plants from another lab**.
- We maintain a fair, **effort-based TPP**.

If you want to calculate another TPP like TPP Accepted plants, simply add the loss margins of the accepted plants (compared to stage3 tissue culture plants) into the formula to get:

`TPP = Transfers / Delivered accepted plants + ΔStock * Loss`

We apply the loss to the stock difference, because otherwise the stock will all be seen as 'accepted plants', but if this stock would be delivered to a client, not all of it would be accepted so we have to apply the 'expected' loss to our stock.
