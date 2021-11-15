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
    secrets:
      - PAYER_SECRETS
    environment:
      - LIVE=1
      - CLUSTER=devnet
      - HEARTBEAT_INTERVAL=15 # Seconds
      - ORACLE_KEY=${ORACLE_KEY}
      # - RPC_URL=<YOUR CUSTOM SOLANA RPC ENTRYPOINT> # OPTIONAL
    volumes:
      - ./configs.json:/configs.json
secrets:
  PAYER_SECRETS:
    file: ./node-keypair.json
```

## Running

Run the following command to start the container

```bash
docker-compose up
```