export async function subscribeToNotifications(name: string, email: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })

  if (!response.ok) {
    throw new Error('Failed to subscribe')
  }

  return response.json()
}
