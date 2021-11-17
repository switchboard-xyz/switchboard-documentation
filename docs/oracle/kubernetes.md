---
sidebar_position: 30
---

# Kubernetes

## Getting Started

Before deploying the application, first a kubernetes cluster most be set up and relevant credentials be provisioned to the operator. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue.

## Setup

You will need the following dependencies:

- **[kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)** - command line tool to provision a kubernetes cluster
- Solana keypair with an active balance
- Oracle Account

Clone the repo below, which contains configuration files to streamline the deployment.

```bash
git clone https://github.com/switchboard-xyz/customer-k8s.git
cd customer-k8s
```

### Environmental Variables

Before provisioning our kubernetes cluster, we need to set some environment variables first. [Each variables definition is captured in this table](./env.md).

#### Sample File

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

<!-- TO DO: Instructions on where each variable comes from -->

#### Switchboard / Solana Config

TO DO: Instructions on creating an oracle account and possibly creating a new Solana keypair

#### Google Auth Config

TO DO: How to source google auth config variables

#### Grafana Config

TO DO: Install Grafana and source config variables

#### Alert Config

TO DO: Setup pagerduty config variables

#### Google Secret Manager Config

TO DO: (OPTIONAL) Setup Google Secret Manager for enhanced security

## Deployment

The switchboard deployment stack uses kustomize to simplify the configuration and deployment of the complete stack (oracle+victoria metrics + grafana) for end users. Simply running `kubectl apply -k .` in the correct overlays directory should deploy the entire stack however there is some user-specific configuration required before being ready to deploym

Note: If this is your first time deploying to a given cluster then when you run kubectl apply, the custom resources won't be applied yet so you will get a few errors that say no matches for kind for those resources. Simply attempt to apply the manifest again and everything should work.

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
