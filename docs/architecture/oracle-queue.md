---
sidebar_position: 3
slug: /a/oracle-queue
---

# Oracle Queue

An oracle queue is responsible for managing a set of oracles and how they get allocated to data feed updates.
Oracles are arranged in a round-robin fashion, where once requested, the next N oracles in the queue are assigned to a feed and cycled to the bottom.
Oracle positions are periodically swapped to mitigate oracles being assigned to the same feeds each cycle.
A single Oracle queue was architected to support over 100,000 oracles, but given rent costs, the initial implementation will cap queue sizes at 2048 and increase it as the network grows.
