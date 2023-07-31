const jwt= require("jsonwebtoken");
function createAccessToken(payload) {
    new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            "secret123",
            {
                expiresIn : "1d"
            },
            (err,token)=>{
                if(err) reject(err);
                resolve(token);
            }
        );
    })
};

module.exports = createAccessToken;