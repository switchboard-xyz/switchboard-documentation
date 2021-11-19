---
sidebar_position: 25
---

# Setup

Before deploying the application, we must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue.

![Kubernetes Setup Flow](/img/gcp/K8s_Setup_Flow.png)

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

### Solana RPC Server

You should have a highly available RPC server to process any transactions.

### Solana Keypair

You will need a solana keypair with an active balance. You can create a new keypair using the [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) and running the following command:

```bash
solana-keygen new --outfile secrets/authority-keypair.json
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
    <td>ORACLE_KEY</td>
    <td>Public key of the oracle account that has been granted permissions to use an oracle queue <br />
    <a href="./oracle-account#create-oracle">Oracle Account #Create Oracle</a>
    </td>
  </tr>
  <tr>
    <td>GOOGLE_AUTH_CLIENT_ID</td>
    <td>
      <a href="./google#authentication">Google Cloud Platform #Authentication</a>
      </td>
  </tr>
  <tr>
    <td>GOOGLE_AUTH_CLIENT_SECRET</td>
    <td>
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
      Password used to authenticate. You can set this yourself
    </td>
  </tr>
  <tr>
    <td>GRAFANA_TLS_CRT</td>
    <td>
      <a href="./grafana#tls-certificate">Grafana #TLS Certificate</a>
    </td>
  </tr>
  <tr>
    <td>GRAFANA_TLS_KEY</td>
    <td>
      <a href="./grafana#tls-certificate">Grafana #TLS Certificate</a>
    </td>
  </tr>
  <tr>
    <td>PAGERDUTY_EVENT_KEY</td>
    <td>Token provided by pagerduty for sending pages. If not in use, set to a dummy string "XXX"</td>
  </tr>
</table>