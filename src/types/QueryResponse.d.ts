interface QueryResponse {
  responses: FillOutResponse[],
  totalResponses: number,
  pageCount: number
}

interface Question {
  id: string,
  name: string,
  type: string,
  value: string | number
}

interface FillOutResponse {
  submissionId: string,
  submissionTime: string,
  lastUpdatedAt: string,
  questions: Question[],
  calculations: {
    id: string,
    name: string,
    type: "number" | "string"
  }[],
  urlParameters: { id: string, name: string }[],
  quiz: {},
  editLink?: string
}
interface ArrayItem {
  remove: boolean;
  index: number;
}