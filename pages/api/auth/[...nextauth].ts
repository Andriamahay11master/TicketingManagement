import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase"


export const authOptions = {
  // Configure one or more authentication providers
  pages :{
    signIn : "/login"
  },
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password" },
      },
      async authorize(credentials) : Promise<any> {
        return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if(user) {
              return user
            }
            return null;
          })
          .catch((error) => {
            console.log(error)
          });
      }
    }
    )],
}

export default NextAuth(authOptions)