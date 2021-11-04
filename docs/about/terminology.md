---
sidebar_position: 10
id: terminology
slug: /terminology
---

# Terminology

## Data Feed

Data feeds are the centerpiece of switchboard and contain the job definitions and configuration parameters that dictate when a result is accepted.

Also known as Aggregators since they aggregate oracle responses and output a single result

## Oracle

Node between the internet and the solana blockchain responsible for fuliflling data feed updates

## Lease Contract

Lease contracts reserve a set amount of compute from the oracle queue and contain the up front capital to reward oracles for processing any updates.

## Crank

The crank is the mechanism which jump starts switchboard and checks for any data feeds ready for an update. Solana has no way to schedule transactions so the crank acts as the ignitor.

## Curator

Curators scour the web and find reliable endpoints to build data feeds from. In return curators receive a percentage of fees generated from a data feed to incentivize diverse data sources.

## Publisher

Publishers are usually the on-chain consumer of data feeds and are responsible for building a data feed configuration and funding the lease contract for a specified period of time.

## PermissionAccount

Grant a data feed or oracle to join a permissioned queue.
