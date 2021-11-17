---
sidebar_position: 30
---

# Kubernetes

Before deploying the application, we must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue. A full description of each environment variable is also captured in the [Environment Variables Table](./env.md).

## Setup

The repo below contains configuration files to streamline the kubernetes deployment. Clone the repo below to get started:

```bash
git clone https://github.com/switchboard-xyz/customer-k8s.git
cd customer-k8s
```

Along with the kubernetes manifest, you will also need the following:

- [kubectl](#kubectl) - to provision our kubernetes cluster
- [Solana keypair with an active balance](#solana-keypair) - to fund oracle transactions
- [Oracle Account](#oracle-account) - to be granted access to an oracle queue and get rewarded
- [Google Auth](#google-auth) - to publish the kubernetes cluster to your Google Cloud Platform account. You should have already installed [gcloud sdk](./cloud-providers.md)
- [Grafana](#grafana) - metrics dashboard
- [Pagerduty](#pagerduty) - for monitoring any oracle downtime and help avoid slashing
- (Optional) Google Secret Manager - to enhance security of your keypairs

In the root directory of the repository, create an `.env` file to keep track of our kubernetes environment.

```bash env title=".env"
# Switchboard/Solana Config
ORACLE_KEY=""
PAYER_SECRET=""
RPC_URL=""
# Google Auth
GOOGLE_AUTH_CLIENT_ID=""
GOOGLE_AUTH_CLIENT_SECRET=""
# Grafana Config
GRAFANA_HOSTNAME=""
GRAFANA_OAUTH_ALLOWED_DOMAIN=""
GRAFANA_ADMIN_PASSWORD=""
GRAFANA_TLS_CRT=""
GRAFANA_TLS_KEY=""
# Alerts
PAGERDUTY_KEY=""
LOADBALANCER_IP=""
# (Optional) Google Secret Manager
GOOGLE_ORACLE_SECRET_PATH=""
GOOGLE_PAYER_SECRET_PATH=""
SERVICE_ACCOUNT_BASE64=""
```

### kubectl

**[Install kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)** - kubectl is a command line tool that will let us provision a kubernetes cluster. Follow the installation steps for your operating system.

### Solana Keypair

You will need a solana keypair with an active balance. You can create a new keypair using the [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) and running the following command:

```bash
solana-keygen new --outfile authority-keypair.json
```

For best security practices, avoid storing the keypair in a git repository. The default keypair location is `${HOME}/.config/solana/id.json`. More information on filesystem wallets can be found in [Solana's documentation](https://docs.solana.com/wallet-guide/file-system-wallet)

### Oracle Account

TO DO: Instructions on creating an oracle account and possibly creating a new Solana keypair

### Google Auth

TO DO: How to source google auth config variables

### Grafana

TO DO: Install Grafana and source config variables

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
