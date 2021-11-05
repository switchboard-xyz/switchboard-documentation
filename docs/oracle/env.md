---
sidebar_position: 30
---

# Environmental Variables

 <table>
  <tr>
    <th>Variable Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>LIVE</td>
    <td>If not defined, the oracle will default to localnet</td>
  </tr>
  <tr>
    <td>CLUSTER</td>
    <td>Which cluster the oracle will connect to (ie: devnet, mainnet)</td>
  </tr>
  <tr>
    <td>FULFILLMENT_MANAGER_KEY</td>
    <td>The public key of a Solana "Fulfillment manager" which controls usage authorizations for Switchboard oracles</td>
  </tr>
  <tr>
    <td>FULFILLMENT_MANAGER_HEARTBEAT_AUTH_KEY</td>
    <td>An account that controls authorization whether to allow the oracle in question to join the Fulfillment manager</td>
  </tr>
  <tr>
    <td>SECRET_IDX</td>
    <td>If the payer_secrets file has more than one secret key, this parameter can be used to choose which secret key to use for the oracle wallet.</td>
  </tr>
  <tr>
    <td>RPC_URL</td>
    <td>This parameter will override which URL will be used to communicate with the Solana network</td>
  </tr>
  <tr>
    <td>PAGERDUTY_EVENT_KEY</td>
    <td>token provided by pagerduty for sending pages</td>
  </tr>
  <tr>
    <td>METRICS_EXPORTER</td>
    <td>can be set to 'prometheus' or 'gcp'</td>
  </tr>
  <tr>
    <td>GOOGLE_PAYER_SECRET_PATH</td>
    <td>Alternative to using a local file for the oracle secret key, path to a Google Secrets manager secret for the wallet key</td>
  </tr>
</table>
