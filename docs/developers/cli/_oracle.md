
interact with a switchboard oracle account

* [`sbv2 oracle:balance ORACLEKEY`](#sbv2-oraclebalance-oraclekey)
* [`sbv2 oracle:create QUEUEKEY`](#sbv2-oraclecreate-queuekey)
* [`sbv2 oracle:deposit ORACLEKEY AMOUNT`](#sbv2-oracledeposit-oraclekey-amount)
* [`sbv2 oracle:withdraw ORACLEKEY AMOUNT`](#sbv2-oraclewithdraw-oraclekey-amount)

## `sbv2 oracle:balance ORACLEKEY`

check an oracles token balance

```
USAGE
  $ sbv2 oracle:balance ORACLEKEY

ARGUMENTS
  ORACLEKEY  public key of the oracle to check token balance

OPTIONS
  -h, --help             show CLI help

  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided

  -s, --silent           suppress cli prompts

  -u, --rpcUrl=rpcUrl    alternate RPC url

  -v, --verbose          log everything

  --mainnetBeta          WARNING: use mainnet-beta solana cluster

EXAMPLE
  $ sbv2 oracle:balance 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4
```

_See code: [src/commands/oracle/balance.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/oracle/balance.ts)_

## `sbv2 oracle:create QUEUEKEY`

create a new oracle account for a given queue

```
USAGE
  $ sbv2 oracle:create QUEUEKEY

ARGUMENTS
  QUEUEKEY  public key of the oracle queue to join

OPTIONS
  -a, --authority=authority  keypair to delegate authority to for managing the oracle account
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -n, --name=name            name of the oracle for easier identification

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster

EXAMPLES
  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-and-authority-keypair.json
  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --name=oracle-1  --keypair 
  ../payer-and-authority-keypair.json
  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-keypair.json --authority 
  ../oracle-keypair.json
```

_See code: [src/commands/oracle/create.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/oracle/create.ts)_

## `sbv2 oracle:deposit ORACLEKEY AMOUNT`

deposit tokens into an oracle's token wallet

```
USAGE
  $ sbv2 oracle:deposit ORACLEKEY AMOUNT

ARGUMENTS
  ORACLEKEY  public key of the oracle to deposit funds into
  AMOUNT     amount to deposit into oracle's token wallet

OPTIONS
  -h, --help             show CLI help

  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided

  -s, --silent           suppress cli prompts

  -u, --rpcUrl=rpcUrl    alternate RPC url

  -v, --verbose          log everything

  --mainnetBeta          WARNING: use mainnet-beta solana cluster

EXAMPLE
  $ sbv2 oracle:deposit 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../payer-keypair.json
```

_See code: [src/commands/oracle/deposit.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/oracle/deposit.ts)_

## `sbv2 oracle:withdraw ORACLEKEY AMOUNT`

withdraw tokens from an oracle's token wallet

```
USAGE
  $ sbv2 oracle:withdraw ORACLEKEY AMOUNT

ARGUMENTS
  ORACLEKEY  public key of the oracle to withdraw from
  AMOUNT     amount to withdraw from oracle's token wallet

OPTIONS
  -a, --authority=authority              keypair delegated as the authority for managing the oracle account
  -f, --force                            skip minStake balance check. your oracle may be removed from the queue
  -h, --help                             show CLI help

  -k, --keypair=keypair                  keypair that will pay for onchain transactions. defaults to new account
                                         authority if no alternate authority provided

  -s, --silent                           suppress cli prompts

  -u, --rpcUrl=rpcUrl                    alternate RPC url

  -v, --verbose                          log everything

  -w, --withdrawAccount=withdrawAccount  optional solana pubkey or keypair filesystem path to withdraw funds to. default
                                         destination is oracle authority's token wallet

  --mainnetBeta                          WARNING: use mainnet-beta solana cluster

EXAMPLES
  $ sbv2 oracle:withdraw 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../oracle-keypair.json
  $ sbv2 oracle:withdraw 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../payer-keypair.json --authority 
  ../oracle-keypair.json -w ByJs8E29jxvqf2KFLwfyiE2gUh5fivaS7aShcRMAsnzg
```

_See code: [src/commands/oracle/withdraw.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/oracle/withdraw.ts)_
