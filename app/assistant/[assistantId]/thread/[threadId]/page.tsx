'use client'

import { useCallback, useEffect, useState } from 'react'
import { createMessage, listMessages, runThread } from '@/app/actions'
import { Message } from '@/types/message'
import { Chat } from '@/components/chat'

interface PageProps {
  params: { assistantId: string; threadId: string }
}

export default function Page({ params }: PageProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMessages = useCallback(async () => setMessages(await listMessages(params.threadId)), [params.threadId])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  async function handleSubmit(input: string) {
    const message: Message = {
      content: input,
      role: 'user',
    }

    setMessages([...messages, message])
    setIsLoading(true)
    await createMessage(params.threadId, message)
    const run = await runThread(params.threadId, params.assistantId)
    fetchMessages()
    setIsLoading(false)
  }

  return <Chat messages={messages} handleSubmit={handleSubmit} isLoading={isLoading} />
}