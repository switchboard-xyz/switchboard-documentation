---
sidebar_position: 40
---

# Grafana

Grafana is a visualization tool to view your cluster.

## TLS Certificate

We will need to generate a TLS certificate. You should already have [openssl installed](https://www.openssl.org/source/)

```bash
openssl req  -nodes -new -x509 -keyout ./certs/keystore.key -out \
    ./certs/keystore.pem -subj '/CN=mydomain.net' -days 3650
```

You should see two files in the certs directory:

- `$GRAFANA_TLS_KEY` will be set to the text in between the headers in certs/keystore.key
- `$GRAFANA_TLS_CRT` will be set to the text in between the headers in certs/keystore.pem

## Hostname

Optionally, you can configure your grafana hostname to point to the `$LOADBALANCER_IP` that we configured.

- Go to your domain management solution
- Create a DNS A record with `$LOADBALANCER_IP`

Otherwise, set the `$GRAFANA_HOSTNAME` to `$LOADBALANCER_IP`
