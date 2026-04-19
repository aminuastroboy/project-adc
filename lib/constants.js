export const NETWORKS = ["MTN", "Airtel", "Glo", "9mobile"];

export const DATA_PLANS = {
  MTN: [
    { code: "MTN-500MB", name: "500MB SME", price: 350, validity: "7 days" },
    { code: "MTN-1GB", name: "1GB SME", price: 650, validity: "30 days" },
    { code: "MTN-2GB", name: "2GB SME", price: 1200, validity: "30 days" },
    { code: "MTN-5GB", name: "5GB SME", price: 2950, validity: "30 days" }
  ],
  Airtel: [
    { code: "AIRTEL-500MB", name: "500MB Corporate", price: 330, validity: "7 days" },
    { code: "AIRTEL-1GB", name: "1GB Corporate", price: 620, validity: "30 days" },
    { code: "AIRTEL-2GB", name: "2GB Corporate", price: 1180, validity: "30 days" },
    { code: "AIRTEL-5GB", name: "5GB Corporate", price: 2900, validity: "30 days" }
  ],
  Glo: [
    { code: "GLO-500MB", name: "500MB Gifting", price: 320, validity: "7 days" },
    { code: "GLO-1_5GB", name: "1.5GB Gifting", price: 950, validity: "30 days" },
    { code: "GLO-2_5GB", name: "2.5GB Gifting", price: 1450, validity: "30 days" },
    { code: "GLO-5GB", name: "5GB Gifting", price: 2850, validity: "30 days" }
  ],
  "9mobile": [
    { code: "9MOBILE-500MB", name: "500MB", price: 350, validity: "7 days" },
    { code: "9MOBILE-1GB", name: "1GB", price: 680, validity: "30 days" },
    { code: "9MOBILE-2GB", name: "2GB", price: 1250, validity: "30 days" },
    { code: "9MOBILE-4_5GB", name: "4.5GB", price: 2850, validity: "30 days" }
  ]
};

export const TRANSACTION_STATUS = {
  SUCCESS: "success",
  PENDING: "pending",
  FAILED: "failed"
};
