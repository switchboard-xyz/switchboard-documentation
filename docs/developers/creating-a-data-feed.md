---
sidebar_position: 10
slug: /creating-a-data-feed
---

# Creating a Data Feed

<!--
# Creating a Data Feed

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Creating Data Feed Account

<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
import {
  createDataFeed,
  SWITCHBOARD_DEVNET_PID,
} from "@switchboard-xyz/switchboard-api";

// your code here

let dateFeedAccount = await createDataFeed(
  connection,
  payerAccount,
  SWITCHBOARD_DEVNET_PID
);
```

</TabItem>

</Tabs>

## Creating Data Feed Job

Now you will create and add a job to the data feed.

<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
import { OracleJob } from "@switchboard-xyz/switchboard-api";

// ...

let jobTasks = [
  OracleJob.Task.create({
    httpTask: OracleJob.HttpTask.create({
      url: "https://api.coinbase.com/v2/prices/btc-usd/spot",
    }),
  }),
  OracleJob.Task.create({
    jsonParseTask: OracleJob.JsonParseTask.create({ path: "$.data.amount" }),
  }),
];
```

</TabItem>

</Tabs>

This is a fairly straightforward job. When published to an oracle node, this will direct them to complete 2 tasks:

- Fetch the url https://api.coinbase.com/v2/prices/btc-usd/spot
- Expect the response was json and parse out the response["data"]["amount"] path (notated in [JSONPath syntax](https://datatracker.ietf.org/doc/html/draft-goessner-dispatch-jsonpath-00). Here is a nice [JSONPath evaluator](https://www.jsonquerytool.com/sample/jsonpathfilterbyarraycontents) for testing convenience).
- See more OracleJob task descriptions [here](https://switchboard-protodoc.tiiny.site/#OracleJob)

## Assigning Job to Data Feed

Now lets add this job to a data feed

<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
import { addFeedJob } from "@switchboard-xyz/switchboard-api";

// ...

await addFeedJob(connection, payerAccount, dataFeedAccount, jobTasks);
```

</TabItem>

</Tabs>

## Set Data Feed Configuration

<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
import { setDataFeedConfigs } from "@switchboard-xyz/switchboard-api";

// ...

await setDataFeedConfigs(connection, payerAccount, dataFeedAccount, {
  minConfirmations: 5,
  minUpdateDelaySeconds: 60,
  fulfillmentManagerPubkey: fulfillmentManagerPubkey.toBuffer(),
  lock: false,
});
```

</TabItem>

</Tabs> -->
