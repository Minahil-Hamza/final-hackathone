import { type SchemaTypeDefinition } from 'sanity'
import { product } from './types/product'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , Category],
}