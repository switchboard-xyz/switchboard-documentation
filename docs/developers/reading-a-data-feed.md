---
sidebar_position: 30
slug: /reading-a-data-feed
---

# Reading a Data Feed

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
import { AggregatorAccount } from "@switchboard-xyz/switchboard-v2";
import { Big } from "big.js";

const aggregatorAccount: AggregatorAccount;
const result: Big = await aggregatorAccount.getLatestValue();

console.log(result.toNumber());
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use anchor_lang::prelude::AccountInfo;
use switchboard_aggregator::{get_aggregator_result, SwitchboardDecimal};

let accounts_iter = &mut accounts.iter();
let aggregator = next_account_info(accounts_iter)?; // AccountInfo

let result: SwitchboardDecimal = get_aggregator_result(aggregator)?;
let decimal: f64 = (&result).try_into().unwrap();

println!("Current feed result is {}!", decimal);
```

</TabItem>

</Tabs>
