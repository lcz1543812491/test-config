'use client'
import * as React from 'react'
import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import { Input, Button } from '@chakra-ui/react'

export default function Home() {
    function submit() {
        fetch('http://localhost:3000/format', {
            method: 'POST',
            body: `{"number":${state.number},"decimal":${state.decimal}}`,
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then(async (response) => {
            response.json().then((data) => {
                console.log('@@@@@', data)
                setResult({unit: data.unit, number: data.number})
            })
        })
    }

    const [state, setState] = React.useState({ number: 0, decimal: 0 })
    const [result, setResult] = React.useState({ unit: '', number: 0 })

    return (
        <ChakraProvider>
            <main className="flex flex-col min-h-screen p-2">
                <div>
                    <span>number</span>
                    <Input
                        onChange={(e) =>
                            setState({
                                number: Number(e.target.value),
                                decimal: state.decimal,
                            })
                        }
                    />
                </div>
                <div>
                    <span>decimal</span>
                    <Input
                        onChange={(e) =>
                            setState({
                                number: state.number,
                                decimal: Number(e.target.value),
                            })
                        }
                    />
                </div>
                <Button onClick={submit}>submit</Button>
                <div>
                    Result
                    <div>单位： {result.unit}</div>
                    <div>数值： {result.number}</div>
                </div>
            </main>
        </ChakraProvider>
    )
}
