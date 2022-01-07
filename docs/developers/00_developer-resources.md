---
sidebar_position: 1
slug: /developers
---

# Developer Resources

## Switchboard Interfaces

### switchboardv2-api

**Description:** Anchor generated typescript client to interact with the Switchboard program.

**Documentation:** [switchboard-xyz.github.io/switchboard-api](https://switchboard-xyz.github.io/switchboard-api/)

**Install:** Run the following command

```bash npm2yarn
npm install @switchboard-xyz/switchboardv2-api
```

### switchboard-aggregator

**Description:** Rust crate to interact with Switchboard from an on-chain program.

**Documentation:** [docs.rs/switchboard-aggregator](https://docs.rs/switchboard-aggregator)

**Install:**
Add the following line to your Cargo.toml

```bash toml
[dependencies]
switchboard-aggregator = "0.1.6"
```

## Example Repos

### End-to-End Example

**Description:** Example demonstrating the full path from creating an oracle queue and aggregator, then running an oracle and updating it's result. Also included is an on-chain program to read your newly created data feed and log the result.

**Documentation:** [github.com/switchboard-xyz/switchboard-v2-example](https://github.com/switchboard-xyz/switchboard-v2-example)

```bash
git clone https://github.com/switchboard-xyz/switchboard-v2-example
```
