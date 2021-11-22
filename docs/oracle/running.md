---
sidebar_position: 80
---

# Running

## Build Manifest

After completing the steps in the previous pages, you should have an env file with each of the variables defined. You will need to set all of the environment variables then inject them into the manifest files

```bash
source devnet.env
```

Run the following command, where devnet is the name of this configuration matching your `.env` file.

```bash
./env-set.sh devnet
```

## Update

If there is a new image available, you can easily restart+update your deployments with the following command.

```bash
kubectl rollout restart deployment \
$(kubectl get deployment --selector=app=oracle | grep -oE ".*-\w+\s" | tail +2)
```
