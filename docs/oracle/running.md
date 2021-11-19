---
sidebar_position: 80
---

# Running

## Build Manifest

After completing the steps in the previous pages, you should have an env file with each of the variables defined. We will need to set all of the environment variables then inject them into the manifest files

```bash
source .env
```

If bash is your default shell

```bash
./env-set.sh
```

If Zsh is your default shell

```bash
./env-set-sed.zsh
```

## Deploy

We are now ready to provision our kubernetes cluster. The Switchboard deployment stack uses kustomize to simplify the configuration and deployment of the complete stack (oracle + victoria metrics + grafana) for end users. Run one of the following commands depending on which Solana cluster you plan on deploying your oracle to:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mainnet" label="Main-net" default>

```bash
kubectl apply -k kubernetes/overlays/mainnet/
```

</TabItem>
</Tabs>

**Note:** If this is your first time deploying to a given cluster then when you run kubectl apply, the custom resources won't be applied yet so you will get a few errors that say `no matches for kind` for those custom resources. Simply rerunning the deploy command will apply the manifest again and everything should complete with no errors.

## Update

If there is a new image available, you can easily restart+update your deployments with the following command.

```bash
kubectl rollout restart deployment \
$(kubectl get deployment --selector=app=oracle | grep -oE ".*-\w+\s" | tail +2)
```
