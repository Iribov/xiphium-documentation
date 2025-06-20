## ## Purpose

A **Cert** [Order](Order.md) is used to initiate the certification process for a batch of plant material. Certification ensures the genetic integrity and quality of a variety before further multiplication or delivery. This order captures the administrative and logistical setup for that process.

## The Bigger Picture

Cert Orders are part of a broader certification workflow required for certain clients or internal standards. The certification phase often precedes key delivery or production stages and ensures the plant material meets expected quality thresholds (e.g., virus-free, genetically stable).

A Cert Order is often followed by a **TTT Order**, which covers the greenhouse planting needed for certification trials. The coordination between these orders is crucial for scheduling and traceability. Cert Orders are typically initiated from the **Plantcode screen** and rely on strict rules and planning logic.

## Core Fields
- Client Code
- Work Type
- Order Type 2 = 'Build'
- Week Prognose
- Amount Prognose: A target can be set here. However, it is often left empty (=0)
- Production Company
- Plant Code

## Common Usage

- **Started** from the **Plantcode screen**.
- Pop-up window helps create **both** the Cert and the following TTT order.
- Required for delivery to clients where certification is mandatory or as a quality control step.
- Sometimes used internally for verification or R&D-related quality validation.

## Edge Cases
- TTT order fields must match the Cert Order’s planning fields (e.g. TCPG, planning location).
- Certification of material already present in ISH but not in SEE requires `Work Type 04`.
## Caveats
- Certification Week Prognosis is **based on estimation**, not delivery week: this is _when certification is expected to complete_.
- Pricing must be manually checked and set — double-check with designated contact.
- Even though this is a fixed-amount cert order, the connected TTT order includes plant quantity.