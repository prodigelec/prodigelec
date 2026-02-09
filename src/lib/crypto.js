import crypto from "crypto";

const algorithm = "aes-256-gcm";
const secretKey = process.env.ENCRYPTION_KEY;

if (!secretKey || secretKey.length < 32) {
  throw new Error("ENCRYPTION_KEY must be at least 32 characters long.");
}

// Convert string key to 32-byte Buffer
const key = crypto.scryptSync(secretKey, "salt", 32);

export function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag().toString("hex");

  return {
    encryptedData: encrypted,
    iv: iv.toString("hex"),
    authTag: authTag,
  };
}

export function hash(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}
