import { operatorMap, comparisonOperatorsHash } from "./operators.js"

export const filterQueryResponse = (queryResponse: QueryResponse, filters: FilterClauseType[]): QueryResponse => {
  const parsedFilters = filters.map(filter => {

    return {
      id: filter.id,
      condition: operatorMap[filter.condition],
      value: filter.value
    }
  })

  const returnValue: FillOutResponse[] = queryResponse.responses.filter(qr => {
    let passedFilters = 0

    let questions = qr.questions

    for (const filter of parsedFilters) {
      const hasValue = questions.find(q => q.id === filter.id)
      if (hasValue) {
        let currentValue = hasValue.value
        let incomingValue = filter.value

        if (hasValue.type === "DatePicker") {
          currentValue = new Date(currentValue).valueOf()
          incomingValue = new Date(incomingValue).valueOf()
        }
        const condition = comparisonOperatorsHash[filter.condition](hasValue.value, filter.value)
        if (condition === true) {
          passedFilters++
        }
      }
    }
    return passedFilters === filters.length
  }
  )



  return {
    ...queryResponse,
    responses: returnValue,
    totalResponses: returnValue.length
  }
}