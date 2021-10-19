---
sidebar_position: 6
---

# Data Feed Updates

When a data feed update is detected, the oracle queue moves the next N oracles to the back of the queue and passes the data feed public key to each oracle to begin processing the update. Each oracle then reads the data feed configuration, executes each job, then publishes their results on-chain. Oracles are always on the queue and can process multiple feed updates when requested.
