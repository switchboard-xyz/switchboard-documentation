---
sidebar_position: 70
---

# Monitoring

## Configuration

The oracle uses open telemetry for emitting metrics. As such, at the time of this writing, the oracle supports prometheus (as well as any wire-compatible solution like cortex, thanos or victoria metrics) and GCP monitoring. This can be configured via the METRICS_EXPORTER environmental variable ('prometheus' and 'gcp')

## Collection and Visualization

If GCP monitoring is used, all data collection and visualization is handled by the platform although users are advised to closely watch billing.

For users that are either not running on GCP or want a more cost effective solution, grafana and victoria metrics (prometheus compatible scraping+storage) manifests are provided in the kubernetes-manifests repo.

<details><summary>List of metrics</summary>

 <table>
  <tr>
    <th>Metric Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>switchboard_aggregator_variance</td>
    <td>the ratio between the largest and smallest value from all aggregated responses for a given job</td>
  </tr>
  <tr>
    <td>switchboard_heartbeat_failure_total</td>
    <td>a counter for every time there is a heartbeat failure</td>
  </tr>
  <tr>
    <td>switchboard_job_failure_total</td>
    <td>a counter for every time there is a job failure</td>
  </tr>
  <tr>
    <td>switchboard_job_success_total</td>
    <td>a counter for every time there is a successful completion of a job</td>
  </tr>
  <tr>
    <td>switchboard_job_posting_total</td>
    <td>a counter for every time there is a job posting</td>
  </tr>
  <tr>
    <td>switchboard_log_age</td>
    <td>a value recorder for the age of the job logs when processed</td>
  </tr>
  <tr>
    <td>switchboard_node_aggregation_insufficient_responses_total</td>
    <td>a counter for every time there is an insufficient number of aggregated responses for a job</td>
  </tr>
  <tr>
    <td>switchboard_node_balance</td>
    <td>each oracle will report its balance with a label indicating the public key</td>
  </tr>
  <tr>
    <td>switchboard_save_result_failure_total</td>
    <td>a counter for the number of times an oracle is unable to commit a transaction to the blockchain</td>
  </tr>
  <tr>
   <td>scheduler_node_balance</td>
    <td>most recent balance of the scheduler wallet</td>
  </tr>

</table> 
</details>
