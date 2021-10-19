---
sidebar_position: 5
slug: /the-crank
---

# The Crank

Data feeds can also be configured so they are updated periodically or on-command, depending on the feed’s use cases. Solana has no mechanism to schedule periodic updates so a Crank is used to jump start the system. Any feed approved by the DAO is free to join the oracle queue’s crank. The Crank is a priority queue of data feed public keys ordered by the feeds next available update time. When cranked, Switchboard will look for any data feeds ready for an update and if successful, reward the user who called it. If no data feed is ready to be updated, the crankers transaction will fail and they could potentially lose their transaction fee. The crank is the scheduler behind the oracles and incentivizes users to help keep the system spinning. Anyone can compete to turn the crank but there can be only one!
