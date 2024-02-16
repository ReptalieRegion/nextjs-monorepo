import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

type GitHubEmailResponse = {
  email: string;
  primary: boolean;
  verified: true;
  visibility: string | null;
};

export const authoptions: AuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET ?? "",
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
      async profile(profileData, tokens) {
        const name = (profileData.name ?? profileData.login) as string;
        const { accessToken } = tokens;
        const emails: GitHubEmailResponse[] = await fetch(
          "https://api.github.com/user/emails",
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          },
        ).then((res) => res.json());
        const primaryEmail = (emails.find((e: GitHubEmailResponse) => e.primary)
          ?.email ?? profileData.email) as string;
        return {
          id: profileData.id as string,
          name,
          email: primaryEmail,
          image: profileData.avatar_url as string,
          username: profileData.login as string,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 Day
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
