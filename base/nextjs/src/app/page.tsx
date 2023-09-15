'use client'
import * as React from 'react'
import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

export default function Home() {

  React.useEffect(() => {
    if(window){
       fetch('http://localhost:3000/', { method: 'POST' })
       .then(async (response) => {
         response.json().then((value) => {
          console.log('@@@@@', value)
         })
       })
    }
  }, [])


    return (
        <ChakraProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Input />
                <Input />
            </main>
        </ChakraProvider>
    )
}
