// Simple script to check if MongoDB Atlas is accessible
// Run with: node scripts/check-mongodb.js

const mongoose = require('mongoose');

// Get MongoDB URI from environment or use placeholder
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster.mongodb.net/dbname';

if (!MONGODB_URI.includes('mongodb')) {
  console.log('❌ Please set MONGODB_URI in your .env.local file');
  process.exit(1);
}

console.log('🔍 Testing MongoDB connection...');
console.log(`📋 Connection URI: ${MONGODB_URI.replace(/:([^@]+)@/, ':***@')}`);

const opts = {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  bufferMaxEntries: 0,
  bufferCommands: false,
};

mongoose.connect(MONGODB_URI, opts)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB!');
    console.log('🎉 Your portfolio contact form should work correctly.');
  })
  .catch(err => {
    console.log('❌ Failed to connect to MongoDB');

    if (err.name === 'MongooseServerSelectionError') {
      console.log('⚠️ This appears to be an IP whitelist issue.');
      console.log('📝 To fix this:');
      console.log('   1. Go to MongoDB Atlas: https://cloud.mongodb.com/');
      console.log('   2. Navigate to Network Access');
      console.log('   3. Add your current IP or allow access from anywhere (0.0.0.0/0)');
      console.log('   4. Wait a few minutes for changes to take effect');
      console.log('');
      console.log('💡 Your current IP can be found at: https://whatismyipaddress.com/');
    } else {
      console.log(`Error details: ${err.message}`);
    }

    process.exit(1);
  });
