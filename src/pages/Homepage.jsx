import { GoogleLogin } from '@react-oauth/google';
import { Button, Box, Text } from '@chakra-ui/react';

function Homepage() {
    return (
        <>
            <Box textAlign="center" p={5} mb={5}>
                <Text fontSize="2xl" fontWeight="bold">React Login</Text>
            </Box>

            <Box
                p={6}
                border="1px solid #ccc"
                borderRadius="md"
                boxShadow="md"
                mb={5}
                textAlign="center"
            >
                <Text fontSize="xl" mb={4}>Create new account</Text>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </Box>

            <Box textAlign="center">
                <Text fontSize="lg" mb={2}>Already have an account?</Text>
                <Button colorScheme="blue">Sign In</Button>
            </Box>
        </>
    );
}

export default Homepage;
