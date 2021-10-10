pragma solidity >=0.6.0 <0.8.4;
//SPDX-License-Identifier: MIT

/// @title Factory for Calltie
/// @author nicolasguasca1

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Calltie.sol";

import "./interface/ICalltie.sol";

contract CalltieFactory is Ownable{
    constructor() public{}

    mapping(address => bool) public CalltieContracts;
    address [] CalltieContractList;
    event NewCalltie(address CalltieContractAddress , address subscriber, string CalltieBrandName, string CalltieBrandSymbol );
    
    /**
     * @dev Manufacture Calltie
     * @param CalltieBrandName Name of branding for influencer
     * @param CalltieBrandSymbol Symbol of CALLTIE
     * @param CalltieURI URI of subscribed data
     **/
    function newCalltie(string memory CalltieBrandName, string memory CalltieBrandSymbol, string memory CalltieURI) public returns (address[] memory){
        Calltie _newCalltie = new Calltie( CalltieBrandName, CalltieBrandSymbol,CalltieURI);
        CalltieContracts[address(_newCalltie)] = true;
        CalltieContractList.push(address(_newCalltie));
        ICalltie(address(_newCalltie)).changeInfluencer(msg.sender);
        emit NewCalltie( address(_newCalltie),  msg.sender, CalltieBrandName, CalltieBrandSymbol);
        return CalltieContractList;
    }

    /// @dev Get child contracts
    function getChildren()external view returns(address[] memory){
        return CalltieContractList;
    }

    
}