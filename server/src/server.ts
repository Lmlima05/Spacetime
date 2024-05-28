import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify();

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  }).then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })