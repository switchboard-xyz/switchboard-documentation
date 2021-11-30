---
sidebar_position: 5
---

# Local Oracle

You can run an oracle locally and assign it to your own oracle queue to test how your porgram may operate in production. Mainnet oracles should always be run on a cloud provider with redundancy to avoid unintentional slashing.

## Solana Keypair

You will need a Solana keypair with an active balanace.

```bash
solana-keygen new --outfile node-keypair.json
```

:::tip

If you are on devnet, you can request some free SOL: `solana airdrop 5 node-keypair.json`

:::

## Docker

To run an oracle in a development environment, you will need to install [Docker-Compose](https://docs.docker.com/compose/install/).

```yaml title="docker-compose.yml"
version: "3.3"
services:
  switchboard:
    image: "switchboardlabs/node:dev-v2"
    network_mode: host
    restart: always
    environment:
      # Set to 0 for localnet
      - LIVE=1
      # devnet, mainnet-beta
      - CLUSTER=devnet
      # Seconds between heartbeats, queue dependent
      - HEARTBEAT_INTERVAL=15
      # OracleAccount PublicKey
      - ORACLE_KEY=${ORACLE_KEY}
      # Filesystem path to keypair file that will pay for txns
      - PAYER_SECRET_PATH="../payer-keypair.json"
      # Highly available RPC node to process transactions, capable of
      #   supporting websocket connections
      - RPC_URL=<YOUR CUSTOM SOLANA RPC ENTRYPOINT>
      # Optional, separate URL for web socket connections
      # - WS_URL=<YOUR CUSTOM SOLANA RPC ENTRYPOINT>
    volumes:
      - ./configs.json:/configs.json
```

## Running

Run the following command to start the container

```bash
docker-compose up
```
