import express from 'express'
export class ExpressServer{
    private express = express()

    constructor(private port: string) {}

    bootstrap() {
        this.express.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}/`)
        })
    }
}