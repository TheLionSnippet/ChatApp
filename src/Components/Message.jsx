import React from 'react'
import { HStack, Avatar, Text } from '@chakra-ui/react'


const Message = ({text, uri, user="other"}) => {
    return (
       <HStack alignSelf={user==="me"?'flex-end' : 'flex-start'} borderRadius={"base"} bg={"gray.200"} paddingX={"4"} paddingY={"2"} >

        <Text> {text} </Text>
       {
        user ==="me" &&  <Avatar src={uri} />
       }

       </HStack>
    )
}

export default Message
