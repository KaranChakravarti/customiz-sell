# Customize Sell

A Next.js frontend application for an e-commerce platform called Customize Sell.

## Features

- Built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)
- Tailwind CSS for styling
- Clerk for authentication and user management
- Mongoose for MongoDB database interactions
- Inngest for serverless event orchestration
- Cloudinary for image uploading and storage

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A MongoDB database (Atlas or self-hosted)
- Clerk account for auth
- Cloudinary account for image storage
- Inngest account (if using their API)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/customiz-sell.git
   cd customiz-sell
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```env
   # Clerk
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>

   # MongoDB
   MONGODB_URI=<your-mongodb-connection-string>

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=<your-cloud-name>
   CLOUDINARY_API_KEY=<your-api-key>
   CLOUDINARY_API_SECRET=<your-api-secret>

   # Inngest
   INNGEST_API_KEY=<your-inngest-api-key>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

### Deployment

Build and export the application for production:
```bash
npm run build
npm run start
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.
