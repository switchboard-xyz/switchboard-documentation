---
sidebar_position: 2
slug: /walkthrough
---

# Walkthrough

## The Crank

Data feeds can also be configured so they are updated periodically or on-command, depending on the feed’s use cases. Solana has no mechanism to schedule periodic updates so a Crank is used to jump start the system. Any feed approved by the DAO is free to join the oracle queue’s crank. The Crank is a priority queue of data feed public keys ordered by the feeds next available update time. When cranked, Switchboard will look for any data feeds ready for an update and if successful, reward the user who called it. If no data feed is ready to be updated, the crankers transaction will fail and they could potentially lose their transaction fee. The crank is the scheduler behind the oracles and incentivizes users to help keep the system spinning. Anyone can compete to turn the crank but there can be only one!

## Data Feed Update

When a data feed update is detected, the oracle queue moves the next N oracles to the back of the queue and passes the data feed public key to each oracle to begin processing the update. Each oracle then reads the data feed configuration, executes each job, then publishes their results on-chain. Oracles are always on the queue and can process multiple feed updates when requested.

## Oracle Rewards

If enough oracles successfully respond, an on-chain program will aggregate the assigned oracle results and return the median value as the final result. Each oracle is then scored based on their response. The variance threshold is dictated by the DAO on a per queue basis and is used when determining the validity of an oracle’s response in relation to the accepted, median result. Oracles within the acceptable range are awarded whatever fee is set by the DAO. Oracles who’s responses fall outside the acceptable range will be slashed and must forfeit a set amount of their staked capital. The slashing mechanism disincentivizes oracles from reporting dishonest data and helps protect the system from nodes who may have other incentives to return false data. A future article will detail the various incentives to entice nodes to remain honest.
Each feed keeps track of the number of successful and failed responses. If a feed has persistent failures, then the feed is removed from the oracle queue and the publisher is refunded the remaining balance on the lease contract to the withdrawal authority specified when creating the lease contract.

<div style={{textAlign: 'center'}}>

![img alt](/img/architecture/walkthrough.png)

</div>
