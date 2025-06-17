export default function handler(req, res) {
  const { code } = req.query;

  // Simulated coupon database (replace with DB or Shopify API)
  const coupons = {
    SAVE10: { name: "John Doe", email: "john@example.com" },
    OFFER20: { name: "Jane Smith", email: "jane@example.com" },
    DISCOUNT50: { name: "Elon Musk", email: "elon@tesla.com" },
  };

  if (coupons[code]) {
    res.status(200).json({
      success: true,
      name: coupons[code].name,
      email: coupons[code].email,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Invalid or expired coupon code",
    });
  }
}
