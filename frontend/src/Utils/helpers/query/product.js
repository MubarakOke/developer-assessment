class Query {
    static  allProduct(...fields){
        let field= fields.join(",")
        let query= `query allProducts{
            allProducts{
                ${field}
            }
        }`
        let graphqlQuery= {query: query}
        return graphqlQuery
    }
}

export default Query