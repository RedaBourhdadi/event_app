import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { Connection } from "jsforce";
import { config } from "dotenv";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          // const result = await conn.query(
          //   "SELECT Name , Description__c , Event_Date__c FROM Custom__c"
          // );

          // console.log(result);

          const resultt = await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
          const conn = new Connection({
            loginUrl: process.env.SALESFORCE_LOGIN_URL,
          });

          await conn.login(
            process.env.SALESFORCE_USERNAME,
            process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN
          );
          const result = await conn.sobject("Users__c").create({
            email__c: profile.email,
            // Name: profile.name.replace(" ", "").toLowerCase(),
            Name: profile.name.toLowerCase(),
            image__c: profile.picture,
            mongodb_id__c: resultt._id,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
