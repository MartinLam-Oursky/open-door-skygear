require("dotenv").config();
const skygear = require("skygear");

const ENDPOINT = "https://chimagun.skygeario.com/";
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const APIKEY = process.env.APIKEY;

(async () => {
  try {
    console.log("Connecting to skygear container...");
    await skygear.config({
      endPoint: ENDPOINT,
      apiKey: APIKEY
    });

    console.log("Logging in to the container...");
    await skygear.loginWithUsername(USERNAME, PASSWORD);

    console.log("Opening door...");
    const OpenDoor = skygear.Record.extend("OpenDoor");
    await skygear.publicDB.save(new OpenDoor());

    console.log("Door Opened.");
  } catch (e) {
    console.log("ERROR: ", e);
  }
})();
