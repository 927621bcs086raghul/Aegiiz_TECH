const BASE_URL = 'https://api.sampleapis.com/coffee/hot'

export async function fetchCoffeeApi() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}
