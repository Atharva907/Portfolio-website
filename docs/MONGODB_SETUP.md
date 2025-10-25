# MongoDB Atlas Setup Guide

This guide will help you set up MongoDB Atlas for your portfolio website.

## 1. Create a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new organization and project

## 2. Create a Database Cluster

1. Click "Build a Database"
2. Choose the "M0 Sandbox" (free tier) plan
3. Select a cloud provider and region closest to you
4. Give your cluster a name (e.g., "portfolio-cluster")
5. Click "Create Cluster"

## 3. Create a Database User

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Enter a username and password
4. Give the user "Read and write to any database" permissions
5. Click "Add User"

## 4. Configure IP Whitelist

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. For development, you can select "Allow Access from Anywhere" (0.0.0.0/0)
4. For production, add your specific IP address
5. Click "Confirm"

## 5. Get Connection String

1. Go to "Clusters" in the left sidebar
2. Click "Connect" on your cluster
3. Select "Drivers" as the connection method
4. Copy the connection string

## 6. Update Environment Variables

1. Create a `.env.local` file in your project root
2. Add your MongoDB connection string:

```
MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority"
```

Replace:
- `username` with your database user
- `password` with your database user's password
- `cluster` with your cluster name
- `dbname` with your database name (e.g., "portfolio")

## 7. Test Your Connection

Run your application and check the console for:
- "✅ Connected to MongoDB" - Success
- "❌ Error connecting to MongoDB" - Check your connection string
- "⚠️ This could be due to IP whitelist issues" - Check Network Access settings

## Common Issues

### IP Whitelist Error
If you see "MongooseServerSelectionError", it's likely an IP whitelist issue:
1. Go to MongoDB Atlas > Network Access
2. Add your current IP address or allow access from anywhere
3. Wait a few minutes for changes to take effect

### Authentication Error
If you see authentication errors:
1. Verify your username and password in the connection string
2. Make sure special characters in passwords are properly URL-encoded
3. Check that the database user has the right permissions

## Security Notes

For production:
- Use environment variables, not hardcoded credentials
- Restrict IP access to specific addresses
- Use a strong password for your database user
- Enable database monitoring and alerts

## Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Connection String Options](https://docs.mongodb.com/manual/reference/connection-string/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
