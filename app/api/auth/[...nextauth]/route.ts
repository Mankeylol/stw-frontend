import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Resend } from "resend";
import type { User as PrismaUser } from "@/app/generated/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier, url }) {
        await resend.emails.send({
          from: process.env.EMAIL_FROM!,
          to: identifier,
          subject: "Your login link",
          html: `
            <h1>Sign in</h1>
            <p><a href="${url}">Click here to sign in</a></p>
          `,
        });
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/home`;
    },
  },
  events: {
    async createUser({ user }) {
        const prismaUser = user as unknown as PrismaUser;
      // Only generate if they don't have one
      if (!prismaUser.userKey) {
        const generatedKey = "btc-private-key-placeholder"; 
        await prisma.user.update({
          where: { id: prismaUser.id },
          data: { userKey: generatedKey },
        });
      }
    },
  },
});

export { handler as GET, handler as POST };
