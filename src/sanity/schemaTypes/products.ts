export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'productPrice',
            type: 'string',
            title: 'Product Price'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            option:{
                source:'productname'
            }
        },
        {
            name: 'productImage',
            type: 'image',
            title: 'Product Image'
        },
    ]
}