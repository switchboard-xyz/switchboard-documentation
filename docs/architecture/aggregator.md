---
sidebar_position: 5
slug: /architecture/aggregator
---

# Aggregator

## What is a Data Feed?

An aggregator or data feed is what on-chain developers use when building smart contracts. A data feed is a collection of jobs that get aggregated to produce some deterministic result. Each job is associated with an endpoint and has a number of tasks that get executed in sequential order in order to produce a single value. Typically the first task in a job will fetch external data with subsequent tasks responsible for parsing the response and transforming the value into a single data type, like an integer or decimal. When an oracle is assigned to process a data feed update, the oracle executes the defined jobs and publishes the median result on-chain. The data feed then computes the final value as the median response among the assigned oracles. In summary, the data feed is the blueprint for how data gets fetched from off-chain sources.

Along with the jobs, a data feed also includes a configuration dictating how often a feed should be updated and the minimum number of jobs or oracles that must respond before accepting a result. The publisher is ultimately responsible for building a data feed and making the necessary trade-offs as it’s a careful balance between cost and update interval. The publisher is usually the on-chain consumer of the data and will have the most familiarity with how the data may be used to make these considerations.

## Types of Data Feeds

Once a data feed has been configured, it needs to be assigned an oracle queue to process updates. Data feeds can be public, where they are approved by the DAO and have access to its oracle queue, or private, where the publisher has their own oracle infrastructure or agreements with oracle operators to process their updates. A private feed has the added benefit of embedding API keys within a job for any endpoints that require authentication, meaning a greater level of trust is needed between publishers and oracles. These keys will need to be created by individual oracle operators or provided by the private feed creator.

## Lease Contract

Oracle queues have a finite amount of resources proportional to its number of oracles so the DAO may reject new feeds that could cause delays on existing feeds. The publisher is responsible for creating a lease contract to reserve a set amount of computer power from the oracle queue. Once a publisher’s feed is accepted by the DAO, the feed is added to the network and granted permissions to use the oracle queue resources.

When creating a lease contract, the publisher specifies a withdrawal authority then funds the lease contract to reward oracle operators for processing any future updates. The withdrawal authority allows a publisher to cancel and refund their lease contract at any point in time and specifies where any remaining lease balance is sent. The lease fee is derived from the oracle rewards dictated by each oracle queue. If a data feed’s lease is low on funds, any update requests will fail and the feed will be removed from any scheduled updates. As a feed gains popularity, other dApp developers will be incentivized to extend the lease and keep it active. This creates a natural decay where unused feeds go unfunded to make room for new use cases.

<!-- TO DO: Aggregator configuration parameters like min number of oracle responses -->

<!-- TO DO: Add links to other resources like reading a data feed, manually requesting a data feed update, using the front end website -->
