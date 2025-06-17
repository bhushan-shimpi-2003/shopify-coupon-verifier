export default function handler(req, res) {
  // 🔐 Allow all origins for testing — change to a specific domain in production
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Respond to preflight requests
  }

  const { code } = req.query;

  const coupons = {
    SAVE10: { name: "John Doe", email: "john@example.com" },
    OFFER20: { name: "Jane Smith", email: "jane@example.com" },
    Bhush: { name: "Bhushan", email: "bhushan@example.com" },
  };

  if (coupons[code]) {
    return res.status(200).json({
      success: true,
      name: coupons[code].name,
      email: coupons[code].email,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "Invalid or expired coupon code",
    });
  }
}
