import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import blogs from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, blogs],
}
