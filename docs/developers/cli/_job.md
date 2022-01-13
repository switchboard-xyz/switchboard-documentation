
interact with a switchboard job account

* [`sbv2 job:create:copy JOBSOURCE`](#sbv2-jobcreatecopy-jobsource)
* [`sbv2 job:create:json JOBDEFINITION`](#sbv2-jobcreatejson-jobdefinition)
* [`sbv2 job:create:template TEMPLATE ID`](#sbv2-jobcreatetemplate-template-id)

## `sbv2 job:create:copy JOBSOURCE`

copy a job account

```
USAGE
  $ sbv2 job:create:copy JOBSOURCE

ARGUMENTS
  JOBSOURCE  public key of the aggregator account to copy

OPTIONS
  -f, --outputFile=outputFile  output file to save job definition to
  -h, --help                   show CLI help

  -k, --keypair=keypair        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided

  -s, --silent                 suppress cli prompts

  -u, --rpcUrl=rpcUrl          alternate RPC url

  -v, --verbose                log everything

  --force                      skip job confirmation

  --mainnetBeta                WARNING: use mainnet-beta solana cluster

EXAMPLE
  $ sbv2 job:create:copy 7pdb5RVM6cVBU8XDfpGqakb1S4wX2i5QsZxT117tK4HS --keypair ../payer-keypair.json
```

_See code: [src/commands/job/create/copy.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/job/create/copy.ts)_

## `sbv2 job:create:json JOBDEFINITION`

create a new on-chain job account from a json file

```
USAGE
  $ sbv2 job:create:json JOBDEFINITION

ARGUMENTS
  JOBDEFINITION  filesystem path to the json file containing the job definition

OPTIONS
  -f, --outputFile=outputFile  output file to save job definition to
  -h, --help                   show CLI help

  -k, --keypair=keypair        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided

  -n, --name=name              name of the job account for easier identification

  -s, --silent                 suppress cli prompts

  -u, --rpcUrl=rpcUrl          alternate RPC url

  -v, --verbose                log everything

  --force                      skip job confirmation

  --mainnetBeta                WARNING: use mainnet-beta solana cluster

  --outKeypair=outKeypair      existing keypair file to store new account. useful for using the same public key on
                               different clusters

EXAMPLES
  $ sbv2 job:create:json examples/job.json --keypair ../payer-keypair.json
  $ sbv2 job:create:json examples/job.json --keypair ../payer-keypair.json --name ftxUs_Btc
  $ sbv2 job:create:json examples/job.json --keypair ../payer-keypair.json --outKeypair= ftxUs_Btc.json
```

_See code: [src/commands/job/create/json.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/job/create/json.ts)_

## `sbv2 job:create:template TEMPLATE ID`

create a new on-chain job account from an existing template

```
USAGE
  $ sbv2 job:create:template TEMPLATE ID

ARGUMENTS
  TEMPLATE  the template type (ftxUs/coinbase/etc) or the filesystem path to the json file containing the task
            definitions

  ID        api endpoint id for a given source

OPTIONS
  -f, --outputFile=outputFile  output file to save job definition to
  -h, --help                   show CLI help

  -k, --keypair=keypair        keypair that will pay for onchain transactions. defaults to new account authority if no
                               alternate authority provided

  -k, --outKeypair=outKeypair  existing keypair file to store new account. useful for using the same public key on
                               different clusters

  -n, --name=name              name of the job account for easier identification

  -s, --silent                 suppress cli prompts

  -u, --rpcUrl=rpcUrl          alternate RPC url

  -v, --verbose                log everything

  --force                      skip job confirmation

  --mainnetBeta                WARNING: use mainnet-beta solana cluster

EXAMPLES
  $ sbv2 job:create:template ftxUs BTC_USD --keypair ../payer-keypair.json
  $ sbv2 job:create:template ftxUs BTC_USD --keypair ../payer-keypair.json --name=ftxUs_Btc
  $ sbv2 job:create:template ftxUs BTC_USD -k ../payer-keypair.json -n ftxUs_Btc -f ftx_us_btc_job.json
```

_See code: [src/commands/job/create/template.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/job/create/template.ts)_
