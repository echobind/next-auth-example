import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  theme: 'light',
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  // It's also REQUIRED for email sign-in.
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
