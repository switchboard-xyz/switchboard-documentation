---
sidebar_position: 70
slug: /randomness
title: On-Chain Randomness
---

# On-Chain Randomness

<span
style={{
        color:"#990000",
        fontWeight: 600,
        fontSize:"1.2em"
    }}>
IN PROGRESS: </span> For devnet usage of a Verifiable Random Function (VRF) on Solana using Switchboard V1's oracle network

## Basic Steps

- [createVrfAccount [typescript]](https://switchboard-xyz.github.io/switchboard-api/modules.html#createvrfaccount): Create a VRF Account to hold your personal randomness value.

- Email `randomness@switchboard.xyz` with your organization's name and the public key of the VRF account you generated. We will grant your VRF Account permissions to use our oracles fulfillment manager to process any update request.

- [requestRandomness [typescript]](https://switchboard-xyz.github.io/switchboard-api/modules.html#requestrandomness): You will need to periodically request a new randomness value. Randomness per VRF account can be requested once every 10 seconds.

- [get_verified_randomness [rust]](https://docs.rs/switchboard-program/0.1.52/switchboard_program/struct.VrfAccount.html#method.get_verified_randomness): Read your result on-chain

[Github - VRF Example](https://github.com/switchboard-xyz/vrf_req_example) - Please consult the github repo for any code examples:

## Security

Randomness generation is produced by a `randomness producer` who holds the secret key used for randomness generation. If the secret key used by the randomness producer to generate the vrf was leaked, then, given a message, it will be possible to predict the randomness value output.

In this vrf implementation, all randomness generation is formatted into strict messages unique to a VRF account owner. VRF messages are a combination of:

1. The VRF Account public key used in requesting randomness
2. A counter variable, incremented every randomness request
3. The last blockhash

### Consideration 1

If the current solana network leader were to acquire to VRF producer secret key, they could opt to control transaction ordering to produce a blockhash that would create more favorable randomness for themselves. The most recent blockhash could be left out of the message but this opens up more risk for consideration 2 below.

### Consideration 2

If the most recent blockhash were not included in randomness generation and the randomness producer secret key leaked publicly, any party could predict randomness generation well before requested.

### Consideration 3

If a randomness request is surfaced to an oracle before finalization on chain, a risk of randomness prediction is surfaced. To minimize the window of randomness prediction attacks, we can include the most recent blockhash in the randomness seed.

### Design Decision

Given the above considerations and given Solana's block generation speed, attack scope is more narrowed when including the most recent blockhash to minimize randomness foresight on producer secret key leaks.
