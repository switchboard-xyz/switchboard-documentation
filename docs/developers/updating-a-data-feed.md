---
sidebar_position: 20
slug: /updating-a-data-feed
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Updating a Data Feed

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

authorizationPubkey is an account that denotes the provided data feed is authorized to use the connected **Fulfillment Manager**.

<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
import { updateFeed } from "@switchboard-xyz/switchboard-api";

// ...

await updateFeed(
  connection,
  payerAccount,
  dataFeedPubkey,
  authorizationPubkey // optional
);
```

</TabItem>

</Tabs>
