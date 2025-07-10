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

export async function getSubscriberCount() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_COUNT_API_URL!, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to get count')
    }

    return response.json()
  } catch (error) {
    // Return fallback data if API not available
    return { count: 0 }
  }
}
