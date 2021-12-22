---
sidebar_position: 25
---

# Setup

Before deploying the application, you must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue.

![Kubernetes Setup Flow](/img/gcp/K8s_Setup_Flow.png)

## Dependencies

### Switchboard V2 CLI

You will need to install the Switchboard V2 CLI to create and manage your oracle account

```bash npm2yarn
npm install -g @switchboard-xyz/switchboardv2-cli
```

### gcloud SDK

You will need to install the google cloud SDK and have a Google Cloud Platform account

- [Install gcloud SDK](https://cloud.google.com/sdk/docs/install)
- [Google Cloud Platform Registration](https://console.cloud.google.com/freetrial/signup/tos)

Verify it installed correctly with the following command:

```bash
gcloud --version
```

### kubectl

You will need install kubectl, which is a command line tool that will let us provision a kubernetes cluster. If you have installed the gcloud SDK above, then you can install kubectl with the following command:

```bash
gcloud components install kubectl
```

You can also install kubectl manually using the following link:

- **[Install kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)**

Verify it installed correctly with the following command:

```bash
kubectl version --client
```

### kubernetes manifest

The repo below contains the kubernetes manifest to streamline the deployment. Clone the repo below to get started:

```bash
git clone https://github.com/switchboard-xyz/customer-k8s.git
cd customer-k8s
```

### Solana RPC Server

You should have a highly available RPC server to process any transactions.

### Solana Keypair

You will need a solana keypair with an active balance. You can create a new keypair using the [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) and running the following command:

```bash
solana-keygen new --outfile secrets/authority-keypair.json
```

This will output a keypair file to the directory where you ran the command. Make note of the filesystem path for future cli commands. More information on filesystem wallets can be found in [Solana's documentation](https://docs.solana.com/wallet-guide/file-system-wallet)

## Environment

Along with the kubernetes manifest, you will also need to capture the required environment variables. The following steps will walk you through where to locate these variables for your own deployment.

In the root directory of the repository, create a `$ENV_NAME.env` file to keep track of your kubernetes environment, where `$ENV_NAME` could be <i>devnet</i>, <i>mainnet</i>, <i>oracle1</i>, etc to keep track of a specific deployment.

```bash env title="devnet.env"
# Solana Config
RPC_URL=""
CLUSTER=""
# Switchboard Config
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
GRAFANA_ADMIN_PASSWORD=""
GRAFANA_TLS_CRT=""
GRAFANA_TLS_KEY=""
# Alerts
PAGERDUTY_KEY=""
```

### Definitions

 <table>
  <tr>
    <th>Variable Name</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>RPC_URL</td>
    <td>Solana RPC URL that dictates which cluster is used. The default RPC pools should be avoided at all cost as you will quickly hit the rate limits and risk being slashed</td>
  </tr>
    <tr>
    <td>CLUSTER</td>
    <td>Solana cluster you will be running an oracle on (mainnet-beta/devnet)</td>
  </tr>
  <tr>
    <td>ORACLE_KEY</td>
    <td>Public key of the oracle account that has been granted permissions to use an oracle queue <br />
    <a href="./oracle-account#create-oracle">Oracle Account #Create Oracle</a>
    </td>
  </tr>
  <tr>
    <td>GOOGLE_AUTH_CLIENT_ID<br />GOOGLE_AUTH_CLIENT_SECRET</td>
    <td>
    Google OAuth 2.0 credentials to provision our cluster for us <br />
      <a href="./google#authentication">Google Cloud Platform #Authentication</a>
      </td>
  </tr>
  <tr>
    <td>LOADBALANCER_IP</td>
    <td>
      <a href="./google#static-ip">Google Cloud Platform #Static Ip</a>
    </td>
  </tr>
  <tr>
    <td>GOOGLE_PAYER_SECRET_PATH</td>
    <td>
       <a href="./google#google-secret-manager">Google Cloud Platform #Google Secret Manager</a>
    </td>
  </tr>
  <tr>
    <td>SERVICE_ACCOUNT_BASE64</td>
    <td>
      <a href="./google#service-account">Google Cloud Platform #Service Account</a>
    </td>
  </tr>
  <tr>
    <td>GRAFANA_HOSTNAME</td>
    <td>
      <a href="./grafana#hostname">Grafana #Hostname</a>
    </td>
  </tr>
  <tr>
    <td>GRAFANA_ADMIN_PASSWORD</td>
    <td>
      Password used to authenticate. You can set this to any value
    </td>
  </tr>
  <tr>
    <td>GRAFANA_TLS_CRT<br />GRAFANA_TLS_KEY</td>
    <td>
    TLS certificate to secure our grafana dashboard<br />
      <a href="./grafana#tls-certificate">Grafana #TLS Certificate</a>
    </td>
  </tr>
  <tr>
    <td>PAGERDUTY_EVENT_KEY</td>
    <td>Token provided by pagerduty for sending pages. If not in use, set to a dummy string "XXX"</td>
  </tr>
</table>
