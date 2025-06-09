export default async function handler(req, res) {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true'
  );
  const data = await response.json();
  res.status(200).json(data);
}