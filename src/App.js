import { Box, Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import Message from "./Components/Message";
import {getAuth, onAuthStateChanged ,GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
import {app} from './FireBase'
import { useEffect, useState } from "react";


const auth =getAuth(app)

const loginHandler = () =>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
}

const logoutHandler = () => signOut(auth)


function App() {

  const [user, setUser] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth,(data)=>{
      setUser(data)
    })
  },[])


  return (
    <Box bg={"red.100"}>
      {
        user?
        (<Container bg={"white"} h={"100vh"}>
        <VStack h={"full"} paddingY={"4"} >
          <Button onClick={logoutHandler} colorScheme={"red"}>Logout</Button>


        <VStack h={"full"} w={"full"} overflowY="auto" > 
       
        <Message text={"Sample Text"} />
        <Message text={"Sample Text"} />

         </VStack>


        <form style={{  width: "100%" }}>

            <HStack>
            <Input placeholder="Enter your message..." />
            <Button type="submit">Send</Button>
            </HStack>
          </form>
       
        </VStack>
      </Container>):
      <VStack bg={"palegreen"} justifyContent={"center"} h={"100vh"} >
        <Button onClick={loginHandler} >Sign In with Google</Button>
      </VStack>
      }
    </Box>
  );
}

export default App;
