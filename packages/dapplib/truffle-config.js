require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth soap assume hunt perfect flip tunnel'; 
let testAccounts = [
"0xce9c2f50807c34b16adb979a3d8d47452d76ad26e21a765a26f7c4ce69c44783",
"0x9f5fb1ee31c9ce295c4823cb41d1443c4b45d7e537173e4fb36d59a7011c80ce",
"0x60157d696868647fecba3718572bf105c4016767febfaf1aeac5b9666d91d761",
"0xdab862932ab558532c0d5fa67206a951dad1590a42157b76e9afdfdeafc5b84f",
"0x5ed92aded3667d6c49c6a2577da808504c41b340c3273297709534e6337fcb2d",
"0x4d2c2902754451406549096e687c0229f25a077e5ab9be388eab381468b64b83",
"0x7d3f0f11a1dd692a52a2da828121ef171c43cb019bdee83a7eb2a86439319eab",
"0x575382ffd9161a6e73ae2998345212725491afd3d82439922f818ba277bbfafe",
"0x168ff34c59feb1e6417cdc4092b8ee1b97dcaacd0ad31da89def7653abfebc71",
"0x29d757a988d73196038ad855378152222db68f9dbc32110a6b396d9a5ce63bb0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


