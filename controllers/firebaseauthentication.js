const admin = require("firebase-admin");
const serviceAccount = require("../key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    // Authenticate the user with email and password
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log(`User ${userRecord.email} exists.`);
    // Now generate a custom token for the user
    const customToken = await admin.auth().createCustomToken(userRecord.uid);
    res
      .status(200)
      .json({ message: "Authentication Successfull", token: customToken });
  } catch (error) {
    // Authentication failed
    console.error("Authentication failed:", error);
    res.status(401).json({ message: "Authentication failed", error });
  }
};

module.exports = { authenticate };
