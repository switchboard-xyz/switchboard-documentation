# Kubernetes

## Getting Started
`git clone git@github.com:switchboard-xyz/kubernetes-manifests.git`

The switchboard deployment stack uses kustomize to simplify the configuration and deployment of the complete stack (oracle+victoria metrics + grafana) for end users. Simply running `kubectl apply -k .` in the correct overlays directory should deploy the entire stack however there is some user-specific configuration required before being ready to deploym

Note: If this is your first time deploying to a given cluster then when you run kubectl apply, the custom resources won't be applied yet so you will get a few errors that say no matches for kind for those resources. Simply attempt to apply the manifest again and everything should work.

## Oracle

Before deploying, operators must modify some of the environmental variables found in the [list of env vars for the oracle](example.com) depending on their use case. 
## Grafana

It is suggested that operators configure at least the admin_password, admin_user, hostName and tlsSecretName fields in the grafana.yaml manifest for improved security
