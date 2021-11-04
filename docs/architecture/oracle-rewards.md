---
sidebar_position: 10
slug: /a/oracle-rewards
---

# Oracle Rewards

If enough oracles successfully respond, an on-chain program will aggregate the assigned oracle results and return the median value as the final result. Each oracle is then scored based on their response. The variance threshold is dictated by the DAO on a per queue basis and is used when determining the validity of an oracle’s response in relation to the accepted, median result. Oracles within the acceptable range are awarded whatever fee is set by the DAO. Oracles who’s responses fall outside the acceptable range will be slashed and must forfeit a set amount of their staked capital. The slashing mechanism disincentivizes oracles from reporting dishonest data and helps protect the system from nodes who may have other incentives to return false data. A future article will detail the various incentives to entice nodes to remain honest.

Each feed keeps track of the number of successful and failed responses. If a feed has persistent failures, then the feed is removed from the oracle queue and the publisher is refunded the remaining balance on the lease contract to the withdrawal authority specified when creating the lease contract.
