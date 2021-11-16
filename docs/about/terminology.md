---
sidebar_position: 10
id: terminology
slug: /terminology
---

# Terminology

## Oracle Queue

The orchestrator behind a switchboard network and controls the parameters dictating how oracles and aggregators are added or removed.

## Oracle

Node between the internet and the solana blockchain responsible for fuliflling data feed updates from external sources.

## Aggregator (Data Feed)

Contain the individual job definitions for how data is retrieved from external sources as well as the configuration parameters that dictate when an oracle result is accepted.

## Publisher

Usually the on-chain consumer of data feeds and are responsible for building a data feed configuration and funding the lease contract.

## Lease Contract

Escrow contract between an oracle queue and an aggregator. Contains the up-front capital to reward oracles for processing update request.

## Crank

Collection of aggregators that are updated at a periodic interval. Solana has no way to schedule transactions so the crank is periodically turned to check for any available updates and jumpstart the network. Each oracle queue can have at most 1 crank.

## Curator

Responsible for scouring the internet and finding reliable endpoints for publishers to construct data feeds from. Curators receive a percentage of fees generated from a data feed to incentivize diverse data sources.
