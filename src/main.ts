import * as dotenv from 'dotenv'
dotenv.config()
import db from './sqlite'
import { server } from './server'

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
db.connect((result) => {
  console.log(result)
  db.syncAll()
})

