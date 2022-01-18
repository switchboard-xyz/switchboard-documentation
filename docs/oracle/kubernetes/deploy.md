---
sidebar_position: 80
---

# Deploy

## Build & Deploy Manifest

After completing the steps in the previous pages, you should have an env file with each of the variables defined.

Run the following command, where

- `$ENV_NAME` is the name of this configuration matching your `.env` file. If you named your configuration `devnet.env` then you would use devnet as your `$ENV_NAME`

```bash
./build_and_deploy.sh ${ENV_NAME}
```

This script will copy the kubernetes manifest to a new directory named `kubernetes-${ENV_NAME}`, then inject your environment variables into the manifest before finally running `kubectl apply -k "./kubernetes-${ENV_NAME}/overlays/mainnet"`

When complete, you should see your cluster running in the Google Cloud Console.

[Google - Observing your GKE clusters](https://cloud.google.com/stackdriver/docs/solutions/gke/observing)

## Update

If there is a new image available, you can easily restart+update your deployments with the following command.

```bash
kubectl rollout restart deployment \
$(kubectl get deployment --selector=app=oracle | grep -oE ".*-\w+\s" | tail +2)
```
