---
sidebar_position: 30
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

More information on filesystem wallets can be found in [Solana's documentation](https://docs.solana.com/wallet-guide/file-system-wallet)

## Environment

Along with the kubernetes manifest, we will also need to capture the required environment variables. In the root directory of the repository, create an `.env` file to keep track of our kubernetes environment. The following steps will walk you through where to locate these variables for your own deployment.

```bash env title=".env"
# Switchboard/Solana Config
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

### RPC_URL

You should have a highly available RPC server to process any transactions.

RPC_URL="ht<span>tps://</span>your-rpc-url.com"

### Oracle Account

TO DO: Instructions on creating an oracle account and possibly creating a new Solana keypair

### Google Cloud Platform

TO DO: How to source google auth config variables

### Grafana

You will need to setup an account on [Grafana](https://grafana.com/) to monitor your kubernetes cluster.

### Pagerduty

TO DO: Setup pagerduty config variables

### Google Secret Manager Config

TO DO: (OPTIONAL) Setup Google Secret Manager for enhanced security

## Deployment

After completing the steps above, you should have an env file with each of the variables defined. We are now ready to provision our kubernetes cluster.

The Switchboard deployment stack uses kustomize to simplify the configuration and deployment of the complete stack (oracle + victoria metrics + grafana) for end users. Run one of the following commands depending on which Solana cluster you plan on deploying your oracle to:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="devnet" label="Devnet" default>

```bash
kubectl apply -k ./overlays/devnet/kustomization.yaml
```

</TabItem>
<TabItem value="mainnet" label="Main-net">

```bash
kubectl apply -k ./overlays/mainnet/kustomization.yaml
```

</TabItem>
</Tabs>

**Note:** If this is your first time deploying to a given cluster then when you run kubectl apply, the custom resources won't be applied yet so you will get a few errors that say `no matches for kind` for those custom resources. Simply rerunning the deploy command will apply the manifest again and everything should complete with no errors.
