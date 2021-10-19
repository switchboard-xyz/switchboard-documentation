---
sidebar_position: 3
slug: /oracle-queue
---

# Oracle Queue

The Switchboard DAO governs how its oracle resources get allocated and rewarded. Oracles are arranged in a round-robin fashion, where once requested, the next N oracles in the queue are assigned to a feed and cycled to the bottom. Oracle positions are periodically swapped to mitigate oracles being assigned to the same feeds each cycle. A single Oracle queue was architected to support over 100,000 oracles, but given rent costs, the initial implementation will cap queue sizes at 2048 and increase it as the network grows.
