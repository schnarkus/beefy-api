const { METIS_CHAIN_ID: chainId, TETHYS_LPF } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
import { getEDecimals } from '../../../utils/getEDecimals';
const pools = require('../../../data/metis/tethysLpPools.json');
import { tethysClient } from '../../../apollo/client';
import { addressBook } from '../../../../packages/address-book/src/address-book';
const {
  metis: {
    platforms: {
      tethys: { masterchef },
    },
    tokens: { TETHYS },
  },
} = addressBook;

const getTethysApys = async () =>
  await getMasterChefApys({
    chainId: chainId,
    masterchef: masterchef,
    tokenPerBlock: 'tethysPerSecond',
    secondsPerBlock: 1,
    hasMultiplier: false,
    pools: pools,
    oracleId: 'TETHYS',
    oracle: 'tokens',
    decimals: getEDecimals(TETHYS.decimals),
    tradingFeeInfoClient: tethysClient,
    liquidityProviderFee: TETHYS_LPF,
    //log: true,
  });

module.exports = getTethysApys;
