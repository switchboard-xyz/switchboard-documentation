---
sidebar_position: 40
---

# Google Cloud Platform

You will need a Google Cloud Platform account with the [Cloud SDK installed](https://cloud.google.com/sdk/docs/install). Once installed, login to your google cloud account:

```bash
gcloud auth login
```

## Project

Create a new project in GCP, give it a name

```bash
gcloud projects create switchboard-oracle-cluster --name="Switchboard Oracle"
```

Set it as your default project

```bash
gcloud config set project switchboard-oracle-cluster
```

## Billing

Make sure you have billing enabled for your project

https://console.cloud.google.com/billing/enable?project=switchboard-oracle-cluster

## Services

Enable the relevant services:

```bash
gcloud services enable container.googleapis.com
gcloud services enable iamcredentials.googleapis.com
gcloud services enable secretmanager.googleapis.com
```

## Authentication

We will need to provision the credentials to make changes to your google account.

First we will need to [enable OAuth consent](https://console.cloud.google.com/apis/credentials/consent) for our application.

Next we need to create the credentials by navigating to [APIs & Services > Credentials](https://console.cloud.google.com/apis/credentials) and select **+ Create Credentials**

![GCP Credentials Dashboard](/img/gcp/Credentials_Dashboard.png)

Set the Application type to `Web application` and give it a name, then select **Create**

![GCP Credentials Create OAuth](/img/gcp/Create_OAuth.png)

Note your client ID and secret for the ENV file and download the JSON for safekeeping.

This will be your `$GOOGLE_AUTH_CLIENT_ID` and `$GOOGLE_AUTH_CLIENT_SECRET`

## Static IP

We will need to reserve a static IP address for our grafana instance

```bash
gcloud services enable compute.googleapis.com
gcloud compute addresses create load-balancer --project=switchboard-oracle-cluster
gcloud compute addresses list
```

This will be your `$LOADBALANCER_IP`

[Google - Reserve a new static external IP address](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#reserve_new_static)

## Service Account

We will need to create a service account to access our resources

```bash
gcloud iam service-accounts keys create ./svc-account.json  --iam-account=${GOOGLE_AUTH_CLIENT_ID}
```

Now convert the json file to a base64 string to store in `$SERVICE_ACCOUNT_BASE64`

```bash
base64 svc-account.json
```

[Google - Creating service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys)

## Google Secret Manager

We will need to store our solana keypair in Google Secret Manager for enhanced security. If you are using another keypair replace --data-file with your relevant path.

```bash
gcloud secrets create oracle-payer-secret --replication-policy="automatic"  --data-file=authority-keypair.json
```

[Google - Creating a secret](https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)

## Generate TLS Certificate

We will need to generate a TLS certificate. You should already have [openssl installed](https://www.openssl.org/source/)

```bash
openssl req  -nodes -new -x509 -keyout ./certs/keystore.key -out \
    ./certs/keystore.pem -subj '/CN=mydomain.net' -days 3650
```

You should see two files in the certs directory:

- `$GRAFANA_TLS_KEY` will be set to the text in between the headers in certs/keystore.key
- `$GRAFANA_TLS_CRT` will be set to the text in between the headers in certs/keystore.pem
