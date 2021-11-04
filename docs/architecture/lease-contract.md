---
sidebar_position: 6
slug: /a/lease-contract
---

# Lease Contract

Oracle queues have a finite amount of resources proportional to its number of oracles so the DAO may reject new feeds that could cause delays on existing feeds. The publisher is responsible for creating a lease contract to reserve a set amount of computer power from the oracle queue. Once a publisher’s feed is accepted by the DAO, the feed is added to the network and granted permissions to use the oracle queue resources.
Upon creating a lease contract, the publisher may specify a withdrawal authority and fund the lease contract to reward oracle operators for processing any future updates. The withdrawal authority allows a publisher to cancel and refund their lease contract at any moment and specifies where any remaining lease balance is sent. The lease fee is derived from the oracle rewards dictated by each oracle queue. This value can be increased over time to entice additional oracles to join the queue or decreased to entice additional publishers to submit new feeds. If a data feed’s lease is low on funds, any update requests will fail and the feed will be removed from any scheduled updates. As a feed gains popularity, other dApp developers will be incentivized to extend the lease and keep it active. This creates a natural decay where unused feeds go unfunded to make room for new use cases.
