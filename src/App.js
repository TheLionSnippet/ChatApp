import { Box, Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import Message from "./Components/Message";

function App() {
  return (
    <Box bg={"red.100"}>
      <Container bg={"white"} h={"100vh"}>
        <VStack h={"full"} paddingY={"4"} >
          <Button colorScheme={"red"}>Logout</Button>


        <VStack h={"full"} w={"full"} > 
        <Message text={"O Kida Fer?"} />
        <Message user="me" text={"Bas Vadiya Tu suna"} />
        <Message text={"Aapa v kaintt e aa fer"} />
         </VStack>


        <form style={{  width: "100%" }}>

            <HStack>
            <Input placeholder="Enter your message..." />
            <Button type="submit">Send</Button>
            </HStack>
          </form>
       
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
