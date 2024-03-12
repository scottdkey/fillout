import { Request } from "express"
import { getUrl } from "./getUrl"

export const getDataFromFillOut = async (req: Request) => {
  const apiKey = process.env.API_KEY
  const response = await fetch(getUrl(req), {
    headers: {
      "Authorization": `Bearer ${apiKey}`
    }
  })

  if (response.status >= 400) {
    console.error({
      status: response.status,
      statusText: response.statusText,
      message: "unable to get data from fillout",
      body: await response.text()
    })
    throw {
      status: response.status,
      message: "upstream failure"
    }
  }


  if (response.status === 200) {
    const data: QueryResponse = await response.json()
    return data
  }
  throw {
    status: 500,
    message: "something went wrong"
  }
}