import { faker } from '@faker-js/faker';
import fs from 'fs';

const courseList = [];

function genarateData(n) {
    if (n <= 0) return [];

    // loop and push to courseList
    Array.from(new Array(n)).forEach((x, index) => {
        let data = {
            id: index + 1,
            title: faker.word.adjective(12),
            description: faker.lorem.lines(1),
            thumbnail: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
            imgUrl: "https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png",
            arthur: faker.name.firstName(),
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        courseList.push(data)
        // console.log(courseList);
        return "1";
    })

}

(() => {
    genarateData(100)
    const db = {
        courses: courseList
    }

    //randome data


    // write to db.json
    fs.writeFile('db.json', JSON.stringify(db), () => {
        console.log("Successfully");
    })
}
)()