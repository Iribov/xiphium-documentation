## Purpose
A Poly ([polyploidisation](https://en.wikipedia.org/wiki/Polyploidy )) [Order](Order.md) starts the polyploidisation process: a technique where the number of chromosome sets in a plant cell is increased. This order type signals the start of a lab procedure to intentionally induce polyploidy in plant material.

## The bigger picture
Polyploidy is widely used in plant breeding to enhance or suppress specific traits. For example, polyploid plants may exhibit:
- Larger fruits or flowers
- Increased resistance to disease
- Dwarfism in ornamentals
- Sterility (e.g. in seedless varieties)

When a client requests polyploidisation, a Poly Order is created to log the request and begin the laboratory pipeline. This order type is tracked throughout the process but doesn't require a specific quantity of material — its purpose is qualitative, not quantitative.
## Core Fields
- Client Code
- Work Type
- Order Type 2 = 'Initiation'
- Week Prognose
- Amount Prognose
- Production Company
- Plant Code

## Common Usage
- Used to register a client request for polyploidisation
- Serves as the entry point for the internal workflow that modifies plant ploidy
- Can be monitored and linked to lab results or further propagation steps
## Caveats
