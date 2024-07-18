Introduction
_________________________________________________________________________________________________________________________________________________________________

I developed a Next.js application that highlights the key features of Next.js and includes a comprehensive CRUD AI Prompt sharing system. This application uses a MongoDB database for efficient data management and implements secure authentication with NextAuth.


Tech Stack
_________________________________________________________________________________________________________________________________________________________________

 - Next.js
 - MonoDB
 - NextAuth
 - TailwindCSS


Features
_________________________________________________________________________________________________________________________________________________________________

➡️  Design with Glassmorphism Trend Style: Featuring a sleek and contemporary look, this design incorporates the visually appealing glassmorphism trend for a modern aesthetic.

➡️  Discover and Share AI Prompts: Users can explore AI prompts shared by the community and create their own prompts to share globally.

➡️  Edit and Delete Created Prompts: Users have the flexibility to edit their prompts at any time and delete them as needed.

➡️  Profile Page: Each user has a dedicated profile page displaying all their created prompts, showcasing their contributions.

➡️  iew Other People's Profiles: Users can explore other creators' profiles to see the prompts they've shared, fostering a sense of community.

➡️  Copy to Clipboard: Implement a handy "Copy to Clipboard" feature for users to easily copy AI prompts for their use.

➡️  Search Prompts by Specific Tag: Users can search for prompts based on specific tags, making it easy to find prompts related to particular topics.

➡️  Google Authentication using NextAuth: Secure and streamlined Google authentication is enabled through NextAuth, ensuring a trustworthy login experience.

➡️  Responsive Website: The website is fully responsive, providing an optimal user experience across various devices, from desktops to smartphones.


Quick Start
_________________________________________________________________________________________________________________________________________________________________

Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=
- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=
- MONGODB_URI=

Running the Project

npm run dev

Open http://localhost:3000 in your browser to view the project.

