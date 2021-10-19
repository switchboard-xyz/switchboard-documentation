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
console.log("Hello, world!");
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use switchboard_program;
use switchboard_program::{AggregatorState, RoundResult};

// your code here

let aggregator: AggregatorState = switchboard_program::get_aggregator(
    switchboard_feed_account // &AccountInfo
)?;
let round_result: RoundResult = switchboard_program::get_aggregator_result(
    &aggregator
)?;

// pub struct RoundResult {
//     pub num_success: Option<i32>,
//     pub num_error: Option<i32>,
//     pub result: Option<f64>,
//     pub round_open_slot: Option<u64>,
//     pub round_open_timestamp: Option<i64>,
//     pub min_response: Option<f64>,
//     pub max_response: Option<f64>,
//     pub medians: Vec<f64>,
// }
```

</TabItem>

</Tabs>
