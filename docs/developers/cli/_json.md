
create and manage an oracle queue from a json file

* [`sbv2 json:add:aggregator`](#sbv2-jsonaddaggregator)
* [`sbv2 json:add:crank SCHEMAFILE`](#sbv2-jsonaddcrank-schemafile)
* [`sbv2 json:add:oracle SCHEMAFILE`](#sbv2-jsonaddoracle-schemafile)
* [`sbv2 json:create:aggregator DEFINITIONFILE`](#sbv2-jsoncreateaggregator-definitionfile)
* [`sbv2 json:create:job DEFINITIONFILE`](#sbv2-jsoncreatejob-definitionfile)
* [`sbv2 json:create:queue INPUTFILE OUTPUTFILE`](#sbv2-jsoncreatequeue-inputfile-outputfile)

## `sbv2 json:add:aggregator`

add an aggregator to a schema file

```
USAGE
  $ sbv2 json:add:aggregator

OPTIONS
  -a, --authority=authority            alternate keypair that is the authority for the oracle queue
  -a, --schema=schema                  filesystem path for an oracle queue schema
  -h, --help                           show CLI help

  -k, --keypair=keypair                keypair that will pay for onchain transactions. defaults to new account authority
                                       if no alternate authority provided

  -s, --silent                         suppress cli prompts

  -u, --rpcUrl=rpcUrl                  alternate RPC url

  -v, --verbose                        log everything

  --aggregatorFile=aggregatorFile      filesystem path of job json definition file

  --mainnetBeta                        WARNING: use mainnet-beta solana cluster

  --sourceAggregator=sourceAggregator  public key of an existing aggregator account to copy
```

_See code: [src/commands/json/add/aggregator.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/json/add/aggregator.ts)_

## `sbv2 json:add:crank SCHEMAFILE`

add a crank to a schema file

```
USAGE
  $ sbv2 json:add:crank SCHEMAFILE

ARGUMENTS
  SCHEMAFILE  filesystem path for an oracle queue schema

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the oracle queue
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -n, --name=name            name of the crank for easier identification

  -r, --maxRows=maxRows      maximum number of rows a crank can support

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster
```

_See code: [src/commands/json/add/crank.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/json/add/crank.ts)_

## `sbv2 json:add:oracle SCHEMAFILE`

add an oracle to a schema file

```
USAGE
  $ sbv2 json:add:oracle SCHEMAFILE

ARGUMENTS
  SCHEMAFILE  filesystem path for an oracle queue schema

OPTIONS
  -a, --authority=authority  alternate keypair that is the authority for the oracle queue
  -h, --help                 show CLI help

  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no
                             alternate authority provided

  -n, --name=name            name of the crank for easier identification

  -s, --silent               suppress cli prompts

  -u, --rpcUrl=rpcUrl        alternate RPC url

  -v, --verbose              log everything

  --mainnetBeta              WARNING: use mainnet-beta solana cluster
```

_See code: [src/commands/json/add/oracle.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/json/add/oracle.ts)_

## `sbv2 json:create:aggregator DEFINITIONFILE`

create an aggregator from a json file

```
USAGE
  $ sbv2 json:create:aggregator DEFINITIONFILE

ARGUMENTS
  DEFINITIONFILE  filesystem path of queue definition json file

OPTIONS
  -h, --help                           show CLI help

  -k, --keypair=keypair                keypair that will pay for onchain transactions. defaults to new account authority
                                       if no alternate authority provided

  -s, --silent                         suppress cli prompts

  -u, --rpcUrl=rpcUrl                  alternate RPC url

  -v, --verbose                        log everything

  --authorityKeypair=authorityKeypair  alternate keypair that will be the authority for the aggregator

  --force                              overwrite output file

  --mainnetBeta                        WARNING: use mainnet-beta solana cluster

  --outputFile=outputFile              output aggregator definition to a json file

  --queueKey=queueKey                  public key of the oracle queue to create aggregator for

ALIASES
  $ sbv2 aggregator:create:json

EXAMPLE
  $ sbv2 json:create:aggregator examples/aggregator.json ../payer-keypair.json 
  --queueKey=GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --outputFile=aggregator.schema.json
```

_See code: [src/commands/json/create/aggregator.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/json/create/aggregator.ts)_

## `sbv2 json:create:job DEFINITIONFILE`

create a job from a json file

```
USAGE
  $ sbv2 json:create:job DEFINITIONFILE

ARGUMENTS
  DEFINITIONFILE  filesystem path of job definition json file

OPTIONS
  -h, --help                                 show CLI help

  -k, --keypair=keypair                      keypair that will pay for onchain transactions. defaults to new account
                                             authority if no alternate authority provided

  -s, --silent                               suppress cli prompts

  -u, --rpcUrl=rpcUrl                        alternate RPC url

  -v, --verbose                              log everything

  --aggregatorAuthority=aggregatorAuthority  filesystem path of aggregator authority keypair to add job account to

  --aggregatorKey=aggregatorKey              public key of aggregator to add job to

  --force                                    overwrite output file

  --mainnetBeta                              WARNING: use mainnet-beta solana cluster

  --outputFile=outputFile                    output job schema to a json file

ALIASES
  $ sbv2 job:create:json

EXAMPLE
  $ sbv2 json:create:job examples/job.json -k ../payer-keypair.json --aggregatorAuthority=../aggregator-keypair.json 
  --outputFile=job.schema.json
```

_See code: [src/commands/json/create/job.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/json/create/job.ts)_

## `sbv2 json:create:queue INPUTFILE OUTPUTFILE`

create an oracle queue from a json file

```
USAGE
  $ sbv2 json:create:queue INPUTFILE OUTPUTFILE

ARGUMENTS
  INPUTFILE   filesystem path of queue definition json file
  OUTPUTFILE  filesystem path of output file to quickly load the queue

OPTIONS
  -h, --help             show CLI help

  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no
                         alternate authority provided

  -s, --silent           suppress cli prompts

  -u, --rpcUrl=rpcUrl    alternate RPC url

  -v, --verbose          log everything

  --authority=authority  alternate keypair that will be the authority for any created accounts

  --force                overwrite output file

  --mainnetBeta          WARNING: use mainnet-beta solana cluster

ALIASES
  $ sbv2 queue:create:json

EXAMPLE
  $ sbv2 json:create:queue examples/queue.json queue-1.json -k ../authority-keypair.json
```

_See code: [src/commands/json/create/queue.ts](https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.3/src/commands/json/create/queue.ts)_
