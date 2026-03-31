import { useState } from 'react'

import ChatSection from '@/components/ChatSection'
import ProfileSection from '@/components/ProfileSection'

export default function App() {
  const [input, setInput] = useState('')

  return (
    <div className="flex min-h-dvh items-center justify-center bg-page-bg p-4 md:p-5">
      {/* ── Mobile ── */}
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl md:hidden">
        <ProfileSection />
        <ChatSection input={input} setInput={setInput} />
      </div>

      {/* ── Desktop ── */}
      <div className="hidden h-[calc(100dvh-40px)] w-full flex-row overflow-hidden rounded-2xl shadow-2xl md:flex">
        <ChatSection input={input} setInput={setInput} />
        <ProfileSection />
      </div>
    </div>
  )
}
