import React from 'react'
import io from 'socket.io-client'
import { backendUrl } from './utils'
const socket = io.connect(`${backendUrl}`)

export default function App() {
  return (
    <div>App</div>
  )
}
