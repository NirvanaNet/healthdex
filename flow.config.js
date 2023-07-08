import { config } from "@onflow/fcl";
require('dotenv').config()

config({
  "accessNode.api": process.env.ACCESS_NODE_API, // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": process.env.DISCOVERY_WALLET// Mainnet: "https://fcl-discovery.onflow.org/authn"
})


