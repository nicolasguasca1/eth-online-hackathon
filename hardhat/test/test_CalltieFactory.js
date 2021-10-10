const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");
const { it } = require("mocha");

require("chai").use(require("chai-as-promised")).should();

use(solidity);

describe("Calltie Nft", function () {
  let CalltieFactory;
  let childContractAddress1;
  let childContract1;
  let owner;
  let influencer;
  let subscriber;
  let nonSubscriber;

  beforeEach(async function () {
    [owner, licensor, licensee, nonLicensee] = await ethers.getSigners();
    const parentContract = await ethers.getContractFactory("CalltieFactory");
    CalltieFactory = await parentContract.deploy();
  });

  describe("Factory of Calltie contracts deployment", function () {
    it("Should have proper owner", async function () {
      expect(await CalltieFactory.owner()).to.equal(owner.address);
    });
  });
  describe("Deploy Child Contract", function () {
    it("Should generate new contract", async function () {
      const newCalltieArgs = [
        "Test",
        "Test",
        "QmTwx4sLHk432eDqe54CX3Jij2isStJDpe6ey8eBRTYFZq"
      ];
      await CalltieFactory.connect(influencer).newCalltie(...newCalltieArgs);
      childContractAddress1 = await CalltieFactory.getChildren();
      expect(
        await CalltieFactory.CalltieContracts(childContractAddress1[0])
      ).to.equal(true);
    });
    it("Should have proper owner", async function () {
      childContract1 = await ethers.getContractAt(
        "Calltie",
        childContractAddress1[0]
      );
      expect(await childContract1.owner()).to.equal(influencer.address);
    });
    it("Should have proper name", async function () {
      expect(await childContract1.name()).to.equal("Test");
    });
    it("Should have proper symbol", async function () {
      expect(await childContract1.symbol()).to.equal("Test");
    });
  });
  describe("Should mint NFT as a subscription", async function () {
    it("Should mint a subscription for correct price", async function () {
      await childContract1.connect(subscriber).subscriptionCALLTIE({
        value: BigInt(ethers.utils.parseEther("0.01"))
      }).should.be.fulfilled;
    });

    it("Should reject a subscription for too low of price", async function () {
      await childContract1.connect(subscriber).subscriptionCALLTIE({
        value: BigInt(ethers.utils.parseEther("0.009"))
      }).should.be.rejected;
    });
    it("Should reject a subscription for to high of price", async function () {
      await childContract1.connect(subscriber).subscriptionCALLTIE({
        value: BigInt(ethers.utils.parseEther("0.011"))
      }).should.be.rejected;
    });
    it("Should have proper token URI", async function () {
      expect(await childContract1.tokenURI(1)).to.equal(
        "ipfs://QmTwx4sLHk432eDqe54CX3Jij2isStJDpe6ey8eBRTYFZq"
      );
    });
    it("Should have subscription owned by subscriber address", async function () {
      expect(await childContract1.ownerOf("1")).to.equal(subscriber.address);
    });

    it("Should have Transfer function disabled", async function () {
      await childContract1.connect(subscriber).transferFrom({
        from: subscriber.address,
        to: nonSubscriber.address,
        tokenId: 1
      }).should.be.rejected;
    });

    it("Should have safeTransfer function disabled", async function () {
      await childContract1.connect(subscriber).transferOwnership({
        from: subscriber.address,
        to: nonSubscriber.address,
        tokenId: 1
      }).should.be.rejected;
    });
  });
});
