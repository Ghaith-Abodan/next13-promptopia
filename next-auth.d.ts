import NextAuth from 'next-auth';
import { Profile } from '@/components/Profile';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }

  interface Profile{
    picture:string;
  }
}