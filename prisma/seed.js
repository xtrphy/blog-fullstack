const prisma = require('./client');
require('dotenv').config();

async function main() {
    const admin = await prisma.user.upsert({
        where: { username: process.env.USERNAME },
        update: {},
        create: {
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            email: process.env.EMAIL,
            role: 'ADMIN',
        },
    });

    await prisma.post.createMany({
        data: [
            {
                title: 'REST API',
                content: 'A REST API is an application programming interface (API) that follows the design principles of the REST architectural style. REST is short for representational state transfer, and is a set of rules and guidelines about how you should build a web API.',
                published: true,
                authorId: admin.id,
                imageUrl: 'https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg',
                tags: ['Backend', 'Web Development']
            },
            {
                title: 'Virtual DOM',
                content: 'The virtual DOM is a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM. This process significantly enhances the performance of web apps.',
                published: true,
                authorId: admin.id,
                imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQHrTcE_Vu_qjQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1694674429966?e=2147483647&v=beta&t=WcS_3i23wxUd-Mk8FUD5NFISCp8hzNgZeTWT5IGEs6o',
                tags: ['Frontend', 'React', 'Web Development']
            },
        ],
        skipDuplicates: true,
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