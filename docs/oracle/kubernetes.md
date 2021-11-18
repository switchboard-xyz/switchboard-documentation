---
sidebar_position: 25
---

# Kubernetes

Before deploying the application, we must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue. A full description of each environment variable is also captured in the [Environment Variables Table](./env.md).

## Dependencies

### kubectl

First we will need install kubectl, which is a command line tool that will let us provision a kubernetes cluster. Follow the link below and complete the installation steps for your operating system.

- **[Install kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)**

### kubernetes manifest

The repo below contains the kubernetes manifest to streamline the deployment. Clone the repo below to get started:

```bash
git clone https://github.com/switchboard-xyz/customer-k8s.git
cd customer-k8s
```

### Solana Keypair

You will need a solana keypair with an active balance. You can create a new keypair using the [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) and running the following command:

```bash
solana-keygen new --outfile authority-keypair.json
```

This will output a keypair file to the directory where you ran the command. Make note of the filesystem path for future cli commands. More information on filesystem wallets can be found in [Solana's documentation](https://docs.solana.com/wallet-guide/file-system-wallet)

## Environment

Along with the kubernetes manifest, we will also need to capture the required environment variables. In the root directory of the repository, create an `.env` file to keep track of our kubernetes environment. The following steps will walk you through where to locate these variables for your own deployment.

```bash env title=".env"
# Solana Config
RPC_URL=""
ORACLE_KEY=""
# Google Cloud Platform
GOOGLE_AUTH_CLIENT_ID=""
GOOGLE_AUTH_CLIENT_SECRET=""
LOADBALANCER_IP=""
# Google Secret Manager
GOOGLE_PAYER_SECRET_PATH=""
SERVICE_ACCOUNT_BASE64=""
# Grafana Config
GRAFANA_HOSTNAME=""
GRAFANA_OAUTH_ALLOWED_DOMAIN=""
GRAFANA_ADMIN_PASSWORD=""
GRAFANA_TLS_CRT=""
GRAFANA_TLS_KEY=""
# Alerts
PAGERDUTY_KEY=""
```

### Solana Config

#### RPC_URL

You should have a highly available RPC server to process any transactions.

<!-- RPC_URL="ht<span>tps://</span>your-rpc-url.com" -->

#### ORACLE_KEY

TO DO

### Google Cloud Platform

#### GOOGLE_AUTH_CLIENT_ID

#### GOOGLE_AUTH_CLIENT_SECRET

#### LOADBALANCER_IP

### Google Secret Manager

#### GOOGLE_PAYER_SECRET_PATH

#### SERVICE_ACCOUNT_BASE64

### Grafana

#### GRAFANA_HOSTNAME

Use `$LOADBALANCER_IP`. Optionally, you can setup a domain with a DNS A record as the loadbalancer IP and set this here.

#### GRAFANA_ADMIN_PASSWORD

Set this to whatever you want your password to be

#### GRAFANA_TLS

We will need to generate a TLS certificate. You should already have [openssl installed](https://www.openssl.org/source/)

```bash
openssl req  -nodes -new -x509 -keyout ./certs/keystore.key -out \
    ./certs/keystore.pem -subj '/CN=mydomain.net' -days 3650
```

You should see two files in the certs directory:

- `$GRAFANA_TLS_KEY` will be set to the text in between the headers in certs/keystore.key
- `$GRAFANA_TLS_CRT` will be set to the text in between the headers in certs/keystore.pem

### Alerts

#### PAGERDUTY_KEY
