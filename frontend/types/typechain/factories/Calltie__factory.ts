/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Calltie, CalltieInterface } from "../Calltie";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "CalltieBrandName",
        type: "string",
      },
      {
        internalType: "string",
        name: "CalltieBrandSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "CalltieURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "CalltieURI",
        type: "string",
      },
    ],
    name: "_pushCalltie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newSubscriber",
        type: "address",
      },
    ],
    name: "changeSubscriber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSubscriptionCost",
        type: "uint256",
      },
    ],
    name: "changeSubscriptionCost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subscribetoCALLTIE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526200000e6200010f565b600880546001600160a01b0319166001600160a01b0392909216919091179055662386f26fc100006009553480156200004657600080fd5b5060405162002038380380620020388339810160408190526200006991620002e6565b8251839083906200008290600090602085019062000195565b5080516200009890600190602084019062000195565b505050620000b5620000af6200011e60201b60201c565b62000122565b620000bf62000174565b50600a8054600181018255600091909152815162000105917fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80190602084019062000195565b50505050620003c6565b6007546001600160a01b031690565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080518082019091526007815266697066733a2f2f60c81b602082015290565b828054620001a39062000373565b90600052602060002090601f016020900481019282620001c7576000855562000212565b82601f10620001e257805160ff191683800117855562000212565b8280016001018555821562000212579182015b8281111562000212578251825591602001919060010190620001f5565b506200022092915062000224565b5090565b5b8082111562000220576000815560010162000225565b600082601f8301126200024c578081fd5b81516001600160401b0380821115620002695762000269620003b0565b6040516020601f8401601f1916820181018381118382101715620002915762000291620003b0565b6040528382528584018101871015620002a8578485fd5b8492505b83831015620002cb5785830181015182840182015291820191620002ac565b83831115620002dc57848185840101525b5095945050505050565b600080600060608486031215620002fb578283fd5b83516001600160401b038082111562000312578485fd5b62000320878388016200023b565b9450602086015191508082111562000336578384fd5b62000344878388016200023b565b935060408601519150808211156200035a578283fd5b5062000369868287016200023b565b9150509250925092565b6002810460018216806200038857607f821691505b60208210811415620003aa57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611c6280620003d66000396000f3fe60806040526004361061011f5760003560e01c8063715018a6116100a0578063a22cb46511610064578063a22cb465146102df578063b88d4fde146102ff578063c87b56dd1461031f578063e985e9c51461033f578063f2fde38b1461035f5761011f565b8063715018a6146102785780637855c2e61461028d5780638da5cb5b1461029557806395d89b41146102aa578063a182562b146102bf5761011f565b806323b872dd116100e757806323b872dd146101eb57806337e883521461020b57806342842e0e146101eb5780636352211e1461023857806370a08231146102585761011f565b806301ffc9a71461012457806306fdde031461015a57806307ee9eee1461017c578063081812fc1461019e578063095ea7b3146101cb575b600080fd5b34801561013057600080fd5b5061014461013f366004611447565b61037f565b6040516101519190611589565b60405180910390f35b34801561016657600080fd5b5061016f6103c7565b6040516101519190611594565b34801561018857600080fd5b5061019c61019736600461147f565b610459565b005b3480156101aa57600080fd5b506101be6101b93660046114c5565b6104a0565b6040516101519190611538565b3480156101d757600080fd5b5061019c6101e636600461141e565b6104ec565b3480156101f757600080fd5b5061019c610206366004611330565b610584565b34801561021757600080fd5b5061022b6102263660046114c5565b61059c565b6040516101519190611af2565b34801561024457600080fd5b506101be6102533660046114c5565b6105e6565b34801561026457600080fd5b5061022b6102733660046112e4565b61061b565b34801561028457600080fd5b5061019c61065f565b61022b6106aa565b3480156102a157600080fd5b506101be61079f565b3480156102b657600080fd5b5061016f6107ae565b3480156102cb57600080fd5b5061019c6102da3660046112e4565b6107bd565b3480156102eb57600080fd5b5061019c6102fa3660046113e4565b610808565b34801561030b57600080fd5b5061019c61031a36600461136b565b6108d6565b34801561032b57600080fd5b5061016f61033a3660046114c5565b610915565b34801561034b57600080fd5b5061014461035a3660046112fe565b610920565b34801561036b57600080fd5b5061019c61037a3660046112e4565b61094e565b60006001600160e01b031982166380ac58cd60e01b14806103b057506001600160e01b03198216635b5e139f60e01b145b806103bf57506103bf826109bc565b90505b919050565b6060600080546103d690611b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461040290611b6a565b801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b5050505050905090565b600a8054600181018255600091909152815161049c917fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8019060208401906111c4565b5050565b60006104ab826109d5565b6104d05760405162461bcd60e51b81526004016104c790611947565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104f7826105e6565b9050806001600160a01b0316836001600160a01b0316141561052b5760405162461bcd60e51b81526004016104c790611a60565b806001600160a01b031661053d6109f2565b6001600160a01b0316148061055957506105598161035a6109f2565b6105755760405162461bcd60e51b81526004016104c79061173d565b61057f83836109f6565b505050565b60405162461bcd60e51b81526004016104c79061187b565b60006105a66109f2565b6001600160a01b03166105b761079f565b6001600160a01b0316146105dd5760405162461bcd60e51b81526004016104c790611993565b50600981905590565b6000818152600260205260408120546001600160a01b0316806103bf5760405162461bcd60e51b81526004016104c7906117e4565b60006001600160a01b0382166106435760405162461bcd60e51b81526004016104c79061179a565b506001600160a01b031660009081526003602052604090205490565b6106676109f2565b6001600160a01b031661067861079f565b6001600160a01b03161461069e5760405162461bcd60e51b81526004016104c790611993565b6106a86000610a64565b565b600060095434146106ba57600080fd5b6106c4600b610ab6565b60006106d0600b610abf565b90506106dc3382610ac3565b61079a81600a60008154811061070257634e487b7160e01b600052603260045260246000fd5b90600052602060002001805461071790611b6a565b80601f016020809104026020016040519081016040528092919081815260200182805461074390611b6a565b80156107905780601f1061076557610100808354040283529160200191610790565b820191906000526020600020905b81548152906001019060200180831161077357829003601f168201915b5050505050610ba2565b905090565b6007546001600160a01b031690565b6060600180546103d690611b6a565b6107c56109f2565b6001600160a01b03166107d661079f565b6001600160a01b0316146107fc5760405162461bcd60e51b81526004016104c790611993565b6108058161094e565b50565b6108106109f2565b6001600160a01b0316826001600160a01b031614156108415760405162461bcd60e51b81526004016104c7906116ba565b806005600061084e6109f2565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556108926109f2565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516108ca9190611589565b60405180910390a35050565b6108e76108e16109f2565b83610be6565b6109035760405162461bcd60e51b81526004016104c790611aa1565b61090f84848484610c6b565b50505050565b60606103bf82610c9e565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6109566109f2565b6001600160a01b031661096761079f565b6001600160a01b03161461098d5760405162461bcd60e51b81526004016104c790611993565b6001600160a01b0381166109b35760405162461bcd60e51b81526004016104c7906115f9565b61080581610a64565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a2b826105e6565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80546001019055565b5490565b6001600160a01b038216610ae95760405162461bcd60e51b81526004016104c7906118c1565b610af2816109d5565b15610b0f5760405162461bcd60e51b81526004016104c79061163f565b610b1b6000838361057f565b6001600160a01b0382166000908152600360205260408120805460019290610b44908490611afb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610bab826109d5565b610bc75760405162461bcd60e51b81526004016104c79061182d565b6000828152600660209081526040909120825161057f928401906111c4565b6000610bf1826109d5565b610c0d5760405162461bcd60e51b81526004016104c7906116f1565b6000610c18836105e6565b9050806001600160a01b0316846001600160a01b03161480610c535750836001600160a01b0316610c48846104a0565b6001600160a01b0316145b80610c635750610c638185610920565b949350505050565b610c76848484610db7565b610c8284848484610ee4565b61090f5760405162461bcd60e51b81526004016104c7906115a7565b6060610ca9826109d5565b610cc55760405162461bcd60e51b81526004016104c7906118f6565b60008281526006602052604081208054610cde90611b6a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0a90611b6a565b8015610d575780601f10610d2c57610100808354040283529160200191610d57565b820191906000526020600020905b815481529060010190602001808311610d3a57829003601f168201915b505050505090506000610d68610fff565b9050805160001415610d7c575090506103c2565b815115610dae578082604051602001610d96929190611509565b604051602081830303815290604052925050506103c2565b610c6384611020565b826001600160a01b0316610dca826105e6565b6001600160a01b031614610df05760405162461bcd60e51b81526004016104c7906119c8565b6001600160a01b038216610e165760405162461bcd60e51b81526004016104c790611676565b610e2183838361057f565b610e2c6000826109f6565b6001600160a01b0383166000908152600360205260408120805460019290610e55908490611b27565b90915550506001600160a01b0382166000908152600360205260408120805460019290610e83908490611afb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000610ef8846001600160a01b03166110a3565b15610ff457836001600160a01b031663150b7a02610f146109f2565b8786866040518563ffffffff1660e01b8152600401610f36949392919061154c565b602060405180830381600087803b158015610f5057600080fd5b505af1925050508015610f80575060408051601f3d908101601f19168201909252610f7d91810190611463565b60015b610fda573d808015610fae576040519150601f19603f3d011682016040523d82523d6000602084013e610fb3565b606091505b508051610fd25760405162461bcd60e51b81526004016104c7906115a7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c63565b506001949350505050565b604080518082019091526007815266697066733a2f2f60c81b602082015290565b606061102b826109d5565b6110475760405162461bcd60e51b81526004016104c790611a11565b6000611051610fff565b90506000815111611071576040518060200160405280600081525061109c565b8061107b846110a9565b60405160200161108c929190611509565b6040516020818303038152906040525b9392505050565b3b151590565b6060816110ce57506040805180820190915260018152600360fc1b60208201526103c2565b8160005b81156110f857806110e281611ba5565b91506110f19050600a83611b13565b91506110d2565b60008167ffffffffffffffff81111561112157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561114b576020820181803683370190505b5090505b8415610c6357611160600183611b27565b915061116d600a86611bc0565b611178906030611afb565b60f81b81838151811061119b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506111bd600a86611b13565b945061114f565b8280546111d090611b6a565b90600052602060002090601f0160209004810192826111f25760008555611238565b82601f1061120b57805160ff1916838001178555611238565b82800160010185558215611238579182015b8281111561123857825182559160200191906001019061121d565b50611244929150611248565b5090565b5b808211156112445760008155600101611249565b600067ffffffffffffffff8084111561127857611278611c00565b604051601f8501601f19168101602001828111828210171561129c5761129c611c00565b6040528481529150818385018610156112b457600080fd5b8484602083013760006020868301015250509392505050565b80356001600160a01b03811681146103c257600080fd5b6000602082840312156112f5578081fd5b61109c826112cd565b60008060408385031215611310578081fd5b611319836112cd565b9150611327602084016112cd565b90509250929050565b600080600060608486031215611344578081fd5b61134d846112cd565b925061135b602085016112cd565b9150604084013590509250925092565b60008060008060808587031215611380578081fd5b611389856112cd565b9350611397602086016112cd565b925060408501359150606085013567ffffffffffffffff8111156113b9578182fd5b8501601f810187136113c9578182fd5b6113d88782356020840161125d565b91505092959194509250565b600080604083850312156113f6578182fd5b6113ff836112cd565b915060208301358015158114611413578182fd5b809150509250929050565b60008060408385031215611430578182fd5b611439836112cd565b946020939093013593505050565b600060208284031215611458578081fd5b813561109c81611c16565b600060208284031215611474578081fd5b815161109c81611c16565b600060208284031215611490578081fd5b813567ffffffffffffffff8111156114a6578182fd5b8201601f810184136114b6578182fd5b610c638482356020840161125d565b6000602082840312156114d6578081fd5b5035919050565b600081518084526114f5816020860160208601611b3e565b601f01601f19169290920160200192915050565b6000835161151b818460208801611b3e565b83519083019061152f818360208801611b3e565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061157f908301846114dd565b9695505050505050565b901515815260200190565b60006020825261109c60208301846114dd565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252602e908201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60408201526d32bc34b9ba32b73a103a37b5b2b760911b606082015260800190565b60208082526026908201527f5472616e736665722044697361626c656420427579206e65772053756273637260408201526534b83a34b7b760d11b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b60208082526031908201527f45524337323155524953746f726167653a2055524920717565727920666f72206040820152703737b732bc34b9ba32b73a103a37b5b2b760791b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b60008219821115611b0e57611b0e611bd4565b500190565b600082611b2257611b22611bea565b500490565b600082821015611b3957611b39611bd4565b500390565b60005b83811015611b59578181015183820152602001611b41565b8381111561090f5750506000910152565b600281046001821680611b7e57607f821691505b60208210811415611b9f57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611bb957611bb9611bd4565b5060010190565b600082611bcf57611bcf611bea565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461080557600080fdfea264697066735822122089c1a7743bb00e7fe35391f4c6f487604927d640842d77431bd1b079b2be863c64736f6c63430008000033";

export class Calltie__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    CalltieBrandName: string,
    CalltieBrandSymbol: string,
    CalltieURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Calltie> {
    return super.deploy(
      CalltieBrandName,
      CalltieBrandSymbol,
      CalltieURI,
      overrides || {}
    ) as Promise<Calltie>;
  }
  getDeployTransaction(
    CalltieBrandName: string,
    CalltieBrandSymbol: string,
    CalltieURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      CalltieBrandName,
      CalltieBrandSymbol,
      CalltieURI,
      overrides || {}
    );
  }
  attach(address: string): Calltie {
    return super.attach(address) as Calltie;
  }
  connect(signer: Signer): Calltie__factory {
    return super.connect(signer) as Calltie__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CalltieInterface {
    return new utils.Interface(_abi) as CalltieInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Calltie {
    return new Contract(address, _abi, signerOrProvider) as Calltie;
  }
}
