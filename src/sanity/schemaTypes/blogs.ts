export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The Title of the blog post.'
        },
        {
            name: 'h1',
            title: 'Heading 1',
            type: 'string',
        },
        {
            name: 'p1',
            title: 'Paragraph 1',
            type: 'string',
        },
        {
            name: 'h2',
            title: 'Heading 2',
            type: 'string',
        },
        {
            name: 'p2',
            title: 'Paragraph 2',
            type: 'string',
        },
        {
            name: 'h3',
            title: 'Heading 3',
            type: 'string',
        },
        {
            name: 'p3',
            title: 'Paragraph 3',
            type: 'string',
        },
        {
            name: 'blogImage',
            type: 'image',
            title: 'Blog Image',
            description: 'The Image of the Blog post.'
        },
    ]
}