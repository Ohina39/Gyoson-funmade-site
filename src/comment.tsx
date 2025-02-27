import { Box, Button, ChakraProvider, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


type Record = {
  id: number
  title: string
  isIncome: boolean
  amount: number
}

function Comment() {
  
  const [records, setRecords] = useState<Record[]>([])
  const [title, setTitle] = useState<string>('')
  const [isIncome, setIsIncome] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(0)

  useEffect(() => {
    getRecords()

    async function getRecords() {
      const response = await fetch('http://localhost:3000/records')
      const data = await response.json()
      setRecords(data)
    }
  }, [])


  return (
    <ChakraProvider>
      <div>
        <Text fontSize="2xl">COMMENTS</Text>
        <Box mb="8px">
          <Input placeholder='ユーザー名' mb="4px" onChange={(e) => setTitle(e.target.value)} />
          <Input placeholder='コメントを入力' mb="4px" onChange={(e) => setAmount(Number(e.target.value))} />
          <Flex align="center" justifyContent="space-between">
            <Checkbox w="100px" onChange={() => setIsIncome(!isIncome)}>👍</Checkbox>
            <Button colorScheme="teal" onClick={() => setRecords([...records, {id: records.length + 1, "title": title, "isIncome": isIncome, "amount": amount}])}>追加</Button>
          </Flex>
        </Box>
        <div>
          {records.map((data) => (
            <div key={data.id}>
              <Flex align="center" justifyContent="space-between">
                <Text>{data.title}</Text>
                <Text>{data.isIncome ? "+" : "-"}{data.amount}</Text>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </ChakraProvider>
  )
}

export default Comment