import { PrismaClient } from "@prisma/client";
const prisma = require('./client');

async function main() {
    await prisma.post.createMany({
        data: [
            {
                title: 'REST API',
                content: 'A REST API is an application programming interface (API) that follows the design principles of the REST architectural style. REST is short for representational state transfer, and is a set of rules and guidelines about how you should build a web API.',
                published: true,
                authorId: '',
                imageUrl: 'https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg',
                tags: ['Backend', 'Web Development']
            },
            {
                title: 'Virtual DOM',
                content: 'The virtual DOM is a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM. This process significantly enhances the performance of web apps.',
                published: true,
                authorId: '',
                imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQHrTcE_Vu_qjQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1694674429966?e=2147483647&v=beta&t=WcS_3i23wxUd-Mk8FUD5NFISCp8hzNgZeTWT5IGEs6o',
                tags: ['Frontend', 'React', 'Web Development']
            },
        ],
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });