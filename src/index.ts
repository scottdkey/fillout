import dotenv from "dotenv"
import express from "express"
import { filterQueryResponse } from "./util/filterQueryResponse.js"
import { getDataFromFillOut } from "./util/getDataFromFillOut.js"
dotenv.config()


const port = 3000

const app = express()


app.get("/:formId/filteredResponses", async (req, res) => {
  try {

    const data = await getDataFromFillOut(req)
    if (req.query.filters) {
      const filters: FilterClauseType[] = JSON.parse(req.query.filters as string)
      const filtered = filterQueryResponse(data, filters)
      res.send(filtered)
    } else {
      res.send(data)
    }



  } catch (e) {
    console.error(e, 'app error')
    res.send({ message: e.message || "error occurred" }).status(e.status || 500)
  }


})

app.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})