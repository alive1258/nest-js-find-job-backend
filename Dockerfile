# ১. অফিসিয়াল Node.js ইমেজ থেকে শুরু করো
FROM node:20-alpine

# ২. কাজের ডিরেক্টরি সেট করো
WORKDIR /app

# ৩. package.json এবং package-lock.json কপি করো
COPY package*.json ./

# ৪. devDependencies সহ install করো (build এর জন্য দরকার)
RUN npm install

# ৫. প্রজেক্ট ফাইল কপি করো
COPY . .

# ৬. NestJS build করো
RUN npm run build

# ৭. production-only deps পুনরায় install করো (optional)
RUN npm prune --production

# ৮. environment variables সেট (যদি প্রয়োজন হয়)
ENV PORT=3000

# ৯. কন্টেইনারে app চালানোর জন্য কমান্ড
CMD ["node", "dist/main.js"]

# ১০. যে পোর্টে সার্ভার চলবে তা expose করো
EXPOSE 3000
