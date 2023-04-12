import graphene
from apps.product.schema import Query as Product_Query

class Query(Product_Query, graphene.ObjectType):
    pass

schema= graphene.Schema(query=Query)