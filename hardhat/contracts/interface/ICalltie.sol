pragma solidity >=0.6.0 <0.8.4;
//SPDX-License-Identifier: MIT

/// @title NFT contract for subscribing to a call
/// @author nicolasguasca1

interface ICalltie {
  function changeSubscriptionCost ( uint256 newSubscriptionCost ) external returns ( uint256 );
  function changeInfluencer ( address newInfluencer ) external;
  function subscriptionCALLTIE (  ) external returns ( uint256 );
}