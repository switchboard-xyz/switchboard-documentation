---
sidebar_position: 40
---

# Grafana

Grafana is a visualization tool to view your cluster.

## TLS Certificate

You will need to generate a TLS certificate. You should already have [openssl installed](https://www.openssl.org/source/)

```bash
openssl req  -nodes -new -x509 -keyout ./secrets/keystore.key -out \
    ./secrets/keystore.pem -subj '/CN=mydomain.net' -days 3650
```

You should see two files in the certs directory:

- `$GRAFANA_TLS_KEY` will be set to the text in between the headers in certs/keystore.key
- `$GRAFANA_TLS_CRT` will be set to the text in between the headers in certs/keystore.pem

[Github - OpenSSL Generate a private key and a CSR](https://gist.github.com/mohanpedala/468cf9cef473a8d7610320cff730cdd1#generate-a-private-key-and-a-csrcertificate-signing-request-)

## Hostname

To simplify the deployment, set the `$GRAFANA_HOSTNAME` to `$LOADBALANCER_IP`.

Optionally, you can configure your own domain to point to the `$LOADBALANCER_IP` that you configured.

- Go to your domain management solution
- Create a DNS A record with `$LOADBALANCER_IP`
- Set `$LOADBALANCER_IP` to your domain name
