// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import KravchenkoegorCheckersCheckers from './kravchenkoegor.checkers.checkers'

import CosmosAuth from './cosmos/cosmos-sdk/cosmos.auth.v1beta1'
import CosmosBank from './cosmos/cosmos-sdk/cosmos.bank.v1beta1'
import CosmosBase from './cosmos/cosmos-sdk/cosmos.base.tendermint.v1beta1'
import CosmosCrisis from './cosmos/cosmos-sdk/cosmos.crisis.v1beta1'
import CosmosDistribution from './cosmos/cosmos-sdk/cosmos.distribution.v1beta1'
import CosmosEvidence from './cosmos/cosmos-sdk/cosmos.evidence.v1beta1'
import CosmosFeeGrant from './cosmos/cosmos-sdk/cosmos.feegrant.v1beta1'
import CosmosGov from './cosmos/cosmos-sdk/cosmos.gov.v1beta1'
import CosmosMint from './cosmos/cosmos-sdk/cosmos.mint.v1beta1'
import CosmosParams from './cosmos/cosmos-sdk/cosmos.params.v1beta1'
import CosmosSlashing from './cosmos/cosmos-sdk/cosmos.slashing.v1beta1'
import CosmosStaking from './cosmos/cosmos-sdk/cosmos.staking.v1beta1'
import CosmosTx from './cosmos/cosmos-sdk/cosmos.tx.v1beta1'
import CosmosUpgrade from './cosmos/cosmos-sdk/cosmos.upgrade.v1beta1'
import CosmosVesting from './cosmos/cosmos-sdk/cosmos.vesting.v1beta1'

export default { 
  KravchenkoegorCheckersCheckers: load(KravchenkoegorCheckersCheckers, 'kravchenkoegor.checkers.checkers'),
  CosmosAuth: load(CosmosAuth, 'cosmos.auth.v1beta1'),
  CosmosBank: load(CosmosBank, 'cosmos.bank.v1beta1'),
  CosmosBase: load(CosmosBase, 'cosmos.base.tendermint.v1beta1'),
  CosmosCrisis: load(CosmosCrisis, 'cosmos.crisis.v1beta1'),
  CosmosDistribution: load(CosmosDistribution, 'cosmos.distribution.v1beta1'),
  CosmosEvidence: load(CosmosEvidence, 'cosmos.evidence.v1beta1'),
  CosmosFeeGrant: load(CosmosFeeGrant, 'cosmos.feegrant.v1beta1'),
  CosmosGov: load(CosmosGov, 'cosmos.gov.v1beta1'),
  CosmosMint: load(CosmosMint, 'cosmos.mint.v1beta1'),
  CosmosParams: load(CosmosParams, 'cosmos.params.v1beta1'),
  CosmosSlashing: load(CosmosSlashing, 'cosmos.slashing.v1beta1'),
  CosmosStaking: load(CosmosStaking, 'cosmos.staking.v1beta1'),
  CosmosTx: load(CosmosTx, 'cosmos.tx.v1beta1'),
  CosmosUpgrade: load(CosmosUpgrade, 'cosmos.upgrade.v1beta1'),
  CosmosVesting: load(CosmosVesting, 'cosmos.vesting.v1beta1'),
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}