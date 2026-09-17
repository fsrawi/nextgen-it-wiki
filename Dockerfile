# ==========================================
# المرحلة الأولى: بناء التطبيق (Builder) - استخدام Node 20
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app

# نسخ ملفات الاعتماديات وتثبيتها
COPY package*.json ./
RUN npm ci

# نسخ باقي ملفات المشروع وبناء التطبيق
COPY . .
RUN npm run build

# ==========================================
# المرحلة الثانية: التشغيل والإنتاج (Runner) - استخدام Node 20
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# نسخ الملفات الناتجة للإنتاج
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]