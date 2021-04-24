require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note spider unlock install casino swear stuff'; 
let testAccounts = [
"0xb0447523c189723311eb9f17d65e908ca9ae42f8a9c269db5857a137da10b61a",
"0xef125cd535565d2ac21777a07fca05c64ca0df3760d4cee825e4861baafd1880",
"0xc53ef1bf2589e06ce2dd6ccada02d0e86848b7d43199ea6975630dde84311bcc",
"0x859209154a5c463a4cdc082a7d6d382baef3bd020dc5d53f0c7a09cae56c7a98",
"0x85b4ddefca77bb6bfcf6e029d6ea0d35262fe9985bc6f03039eb1e43aace6642",
"0x0b3fdd619677d45f189e532024352c7b1b11672483bfbdfd48084ccd6ce17bb1",
"0xf80eb1d267b266bb647a7200c0d48e37af99376f837bfb84b8aef354bbe1ab82",
"0xf7207dcf8d6aa697a83d069d048c4ace6a62a6ed90203eb1a37e39ba7c651e97",
"0x4d3450d72650dbb0f43b82408ef02222f24e203ae4965cb74f458d9ee6a9cd47",
"0xd3a84d50ef50075bdfe1f7b16d833bdb87d983243fac6e9c36e27ab136e455d8"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
