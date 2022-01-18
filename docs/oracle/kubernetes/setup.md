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

