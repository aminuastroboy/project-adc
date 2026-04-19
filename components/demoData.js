export const transactions = [
  { id: 'MTS-10018', type: 'Data', network: 'MTN', detail: '2GB SME to 0803 456 9001', amount: '₦1,200', status: 'success', time: 'Today, 9:18 AM' },
  { id: 'MTS-10017', type: 'Airtime', network: 'Airtel', detail: '₦500 to 0706 241 3355', amount: '₦500', status: 'pending', time: 'Today, 8:42 AM' },
  { id: 'MTS-10016', type: 'Data', network: 'Glo', detail: '1.5GB to 0811 973 5234', amount: '₦950', status: 'success', time: 'Yesterday, 6:10 PM' },
  { id: 'MTS-10015', type: 'Airtime', network: '9mobile', detail: '₦1,000 to 0903 598 3983', amount: '₦1,000', status: 'failed', time: 'Yesterday, 1:04 PM' }
];

export const dataPlans = {
  MTN: ['500MB — ₦350', '1GB — ₦650', '2GB — ₦1,200', '5GB — ₦2,950'],
  Airtel: ['500MB — ₦330', '1GB — ₦620', '2GB — ₦1,180', '5GB — ₦2,900'],
  Glo: ['500MB — ₦320', '1.5GB — ₦950', '2.5GB — ₦1,450', '5GB — ₦2,850'],
  '9mobile': ['500MB — ₦350', '1GB — ₦680', '2GB — ₦1,250', '4.5GB — ₦2,850']
};
