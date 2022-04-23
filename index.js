
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/api/v1', router)
// http://localhost:3000/api/v1/courses/?_limit=20 giới hạn số dữ liệu get

server.listen(process.env.PORT || 3000, () => {
    console.log('JSON Server is running')
})