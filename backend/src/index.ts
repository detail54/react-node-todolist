import express, { Express } from 'express'
import routes from './api/route'
import connectDB from './loaders/db'

const app : Express = express()
const { PORT = 27017 } = process.env

connectDB()

app.use(express.urlencoded)
app.use(express.json())

app.use(routes)

app.use(function (err: { message: any; status: any }, req: { app: { get: (arg0: string) => string } }, res: { locals: { message: any; error: any }; status: (arg0: any) => void; render: (arg0: string) => void }, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
})

app
  .listen(PORT, () => {
    console.log('server listening on port: 27017')
  })
  .on("error", (e) => {
    console.error(e)
    process.exit(1)
  })



// class App {
//   public application: express.Application

//   constructor() {
//     this.application = express()
//     this.router()
//   }

//   private router(): void {
//     this.application.get('/', (req: express.Request, res: express.Response) => {
//       res.send('hello!')
//     })
//   }
// }
