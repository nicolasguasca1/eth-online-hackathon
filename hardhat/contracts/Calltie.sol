pragma solidity >=0.6.0 <0.8.4;
//SPDX-License-Identifier: MIT

/// @title NFT contract for subscribing to CALLTIE
/// @author nicolasguasca1

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Calltie is ERC721, ERC721URIStorage, Ownable {
    address influencer = owner();
    uint256 subscriptionCost = 10000000000000000;
    string[] CALLTIE;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(
        string memory CalltieBrandName,
        string memory CalltieBrandSymbol,
        string memory CalltieURI
    ) public ERC721(CalltieBrandName, CalltieBrandSymbol) {
        _baseURI();
        CALLTIE.push(CalltieURI);
    }

    // @dev push a new IP to the contract
    function _pushCalltie(string memory CalltieURI) public {
        CALLTIE.push(CalltieURI);
    }


    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }
  
    /** @dev disable Transfer of NFT to ensure no secondary market can function */ 
    function transferFrom(address from, address to, uint256 tokenId) public override {
        revert("Transfer Disabled Buy new Subscription");
    }
    /** @dev disable Transfer of NFT to ensure no secondary market can function */ 
    function safeTransferFrom(address from, address to,uint256 tokenId) public override {
        revert("Transfer Disabled Buy new Subscription");
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    /**
     * @dev Mint Subscriptor a Subscription
     * @return token id of subscription
     **/
    function subscribetoCALLTIE() public payable returns (uint256) {
        require(msg.value == subscriptionCost);
        _tokenIds.increment();
        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);
        _setTokenURI(id, CALLTIE[0]);
        return id;
    }

    /**
     * @dev Change the subscriber and owner of the contract
     * @param newSubscriber address of the new subcriber
     **/
    function changeSubscriber(address newSubscriber) public onlyOwner {
        transferOwnership(newSubscriber);
    }

    /**
     * @dev Change cost of Subscrition
     * @param newSubscriptionCost New price for subscription
     **/
    function changeSubscriptionCost(uint256 newSubscriptionCost)
        public
        onlyOwner
        returns (uint256)
    {
        subscriptionCost = newSubscriptionCost;
        return subscriptionCost;
    }
}