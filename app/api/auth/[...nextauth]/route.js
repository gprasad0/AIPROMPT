import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {connectToDb} from "@utils/database"
import User from '@models/user'
console.log("process.env.GOOGLE_ID",process.env.GOOGLE_ID)
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){

    },
    async signIn({profile}){

        try{
            await connectToDb()
            const userExists = await User.findOne({
                email : profile.email
            })

            if(!userExists){
                await User.create({
                    email : profile.email,
                    username : profile.name.replace(" ","").toLowerCase(),
                    image : profile.picture
                })
                
            }
            return true
        }catch(e){
            console.log(e)
            return false
        }

    }
})