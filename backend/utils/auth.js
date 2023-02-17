const jwt = require("jsonwebtoken");
const moment = require("moment");
const { jwtConfig } = require("../config");

let jwtidCounter = 0;
let blacklist = [];

const jwtSign = (_payload) => {
  try {
    console.log("Generate JWT token");

    const payload = JSON.parse(JSON.stringify(_payload));

    jwtidCounter = jwtidCounter + 1;
    return jwt.sign({ payload }, jwtConfig.secretKey, {
      expiresIn: Number(jwtConfig.expiresIn),
      jwtid: jwtidCounter + "",
    });
  } catch (error) {
    console.log("Error generating JWT token");
    throw error;
  }
};

const jwtGetToken = (request) => {
  try {
    if (
      !request.headers.authorization ||
      request.headers.authorization.split(" ")[0] !== "Bearer"
    )
      throw new Error("JWT token not provided");

    return request.headers.authorization.split(" ")[1];
  } catch (error) {
    console.log("Error getting JWT token");
    throw error;
  }
};

const jwtVerify = (token) => {
  try {
    return jwt.verify(token, process.env.SERVER_JWT_SECRET, (err, decoded) => {
      blacklist.forEach((element) => {
        if (
          element.jti === decoded.jti &&
          element.iat === decoded.iat &&
          element.exp === decoded.exp
        )
          throw err;
      });

      console.log(decoded);
      if (err != null) throw err;
      return decoded.payload;
    });
  } catch (error) {
    console.log("Error getting JWT token");
    throw error;
  }
};

const jwtBlacklistToken = (token) => {
  try {
    while (
      blacklist.length &&
      moment().diff("1970-01-01 00:00:00Z", "seconds") > blacklist[0].exp
    ) {
      console.log(
        `Removing from blacklist timed out JWT with id ${blacklist[0].jti}`
      );
      blacklist.shift();
    }
    const { jti, exp, iat } = jwt.decode(token);
    console.log(`Adding JWT ${token} with id ${jti} to blacklist`);
    blacklist.push({ jti, exp, iat });
  } catch (error) {
    console.log("Error blacklisting JWT token");
    throw error;
  }
};

module.exports = { jwtSign, jwtGetToken, jwtVerify, jwtBlacklistToken };
