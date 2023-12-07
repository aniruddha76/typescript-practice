interface Post {
    name: string,
    photo: string,
    date: number,
    tags: string[]
}

function postOfTheDay(userName: string, userPhoto: string, userDate: any, userTags: string[]): void {
    let userPost: Post = {
        name: userName,
        photo: userPhoto,
        date: userDate,
        tags: userTags
    }

    console.log(userPost)
}

postOfTheDay("aniruddha76", "photo/ani.png", Date.now(), ["#typescript", "#learning", "#javascript", "#superset"]);

interface userPost2 extends Post {
    name2: string,
    number2: number
}

let postOfTheDay2 : userPost2 = {
    name:"Ravindra",
    name2: "Thakur",
    number2: 72345362768, 
    date: Date.now(), 
    tags:["#newpost"],
    photo: "photo/ani2.png"
}

console.log(postOfTheDay2);