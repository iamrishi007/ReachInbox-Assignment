
import { GoogleLogin } from '@react-oauth/google';

function Homepage() {
     <h1>React Login</h1>

     

     return (
          <>


               <div style={{ border: "1px solid red" }}>
                    <GoogleLogin
                         onSuccess={credentialResponse => {
                              console.log(credentialResponse);
                         }}
                         onError={() => {
                              console.log('Login Failed');
                         }}
                    />
               </div>
               <div>

               
               </div>

          </>
     )
}

export default Homepage