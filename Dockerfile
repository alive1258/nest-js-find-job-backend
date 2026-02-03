# ১. অফিসিয়াল Node.js ইমেজ থেকে শুরু করো
FROM node:20-alpine

# ২. কাজের ডিরেক্টরি সেট করো
WORKDIR /app

# ৩. package.json এবং package-lock.json কপি করো
COPY package*.json ./

# ৪. ডিপেন্ডেন্সি ইনস্টল করো
RUN npm install --production

# ৫. প্রজেক্ট ফাইল কপি করো
COPY . .

# ৬. NestJS build করো
RUN npm run build

# ৭. environment variables সেট (যদি প্রয়োজন হয়)
ENV PORT=3000

# ৮. কন্টেইনারে app চালানোর জন্য কমান্ড
CMD ["node", "dist/main.js"]

# ৯. যে পোর্টে সার্ভার চলবে তা expose করো
EXPOSE 3000
