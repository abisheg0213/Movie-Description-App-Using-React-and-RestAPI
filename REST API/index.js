const express=require('express')
const bodyparser=require('body-parser')

app=express()
app.use(bodyparser.json())
app.listen(3000)
var cors = require('cors');
app.use(cors());
let movies = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Singam_poster.jpg",
      title: "Singam",
      year: "2010"
    },
    {
      img:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-1-et00323897-1664271205.jpg",
      title: "ponniyin selvan 1",
      year: "2022"
    },
    {
      img:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
      title: "Vikram",
      year: "2022"
    },
    {
      img: "https://static.toiimg.com/photo/msid-79178860/79178860.jpg?144218",
      title: "Soorarai Pottru",
      year: "2020"
    },
    {
      img: "https://m.media-amazon.com/images/I/71-RGYJFmXL._RI_.jpg",
      title: "Thani Oruvan",
      year: "2014"
    },
    {
        img:
          "https://m.media-amazon.com/images/M/MV5BYzFmMWNmOGQtNmE2NS00ZjdkLTlhZGEtY2ZmZjI5N2UwZjkzXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
        title: "Love Today",
        year: "2022"
      },
      {
        img:
          "https://m.media-amazon.com/images/M/MV5BMTQyNDk3ODM1N15BMl5BanBnXkFtZTgwMTk1NjU5MzE@._V1_.jpg",
        title: "I",
        year: "2015"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/en/b/be/Thuppakki_poster.jpg",
        title: "Thupakki",
        year: "2012"
      }
  ];
  let moviedata=[
    {
        title:"Singam",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a7/Singam_poster.jpg",
        year:"2010",
        dir:"Hari",
        musicdir:"Devi Sri Prasad",
        para1:"'Singam' is a high-octane Tamil action film that burst onto the silver screen in 2010. Directed by Hari and starring Suriya in the lead role, the movie takes viewers on a thrilling ride through the life of Durai Singam, an honest and fearless police officer. Set in the backdrop of a small town in Tamil Nadu, Singam showcases the challenges faced by Singam as he tries to maintain law and order while dealing with powerful criminals. The film is filled with intense action sequences, gripping dialogues, and a powerful performance by Suriya, making it a complete entertainer that keeps the audience on the edge of their seats.",
        para2:" With its gripping storyline and powerful performances, 'Singam' quickly became a massive hit at the box office and earned critical acclaim. The movie skillfully weaves together elements of action, drama, and romance, making it a perfect choice for fans of commercial cinema. Suriya's portrayal of Durai Singam is a standout, as he effortlessly brings to life the character's dedication to justice and his unwavering commitment to his profession. 'Singam' is a must-watch for action enthusiasts, as it combines thrilling sequences with a compelling narrative, showcasing the triumph of good over evil in an exhilarating manner."
    },
    {
        title:"ponniyin selvan 1",
        img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-1-et00323897-1664271205.jpg",
        year:"2022",
        dir:"Mani Ratnam",
        musicdir:"A R Rahman",
        para1:"'Ponniyin Selvan 1' is an epic Tamil film released in 2022, based on the highly acclaimed historical novel of the same name written by Kalki Krishnamurthy. Directed by Mani Ratnam, the movie takes viewers on a grand journey set in the Chola dynasty of ancient South India. The film revolves around the power struggle, political intrigue, and complex relationships among various characters. It introduces us to Vandiyathevan, a skilled warrior and messenger, who becomes entangled in a web of conspiracies as he tries to protect the kingdom and its rightful heir, Aditya Karikalan. With stunning visuals, a gripping narrative, and stellar performances by an ensemble cast, 'Ponniyin Selvan 1' successfully brings the rich tapestry of the novel to life on the big screen, captivating audiences with its historical authenticity and grandeur.",
        para2:"The movie features a stellar cast that includes top-notch actors from the Tamil film industry. Vikram shines as the charismatic Vandiyathevan, portraying his bravery and wit with finesse. Karthi mesmerizes the audience with his portrayal of Aditya Karikalan, showcasing the prince's internal conflicts and determination. Aishwarya Rai Bachchan delivers a compelling performance as Nandhini, a manipulative and mysterious character, while Trisha Krishnan impresses as the strong-willed Kundhavai. The film also features performances by Jayam Ravi, Prabhu, and Sarathkumar, among others, adding depth and richness to the story. With Mani Ratnam's directorial brilliance and A.R. Rahman's enchanting music, 'Ponniyin Selvan 1' becomes a visual spectacle and a treat for history enthusiasts and film lovers alike."
    },
    {
        title:"Vikram",
        img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
        year:"2022",
        dir:"Lokesh Kanagaraj",
        musicdir:"Anirudh",
        para1:"'Ponniyin Selvan 1' is an epic Tamil film released in 2022, based on the highly acclaimed historical novel of the same name written by Kalki Krishnamurthy. Directed by Mani Ratnam, the movie takes viewers on a grand journey set in the Chola dynasty of ancient South India. The film revolves around the power struggle, political intrigue, and complex relationships among various characters. It introduces us to Vandiyathevan, a skilled warrior and messenger, who becomes entangled in a web of conspiracies as he tries to protect the kingdom and its rightful heir, Aditya Karikalan. With stunning visuals, a gripping narrative, and stellar performances by an ensemble cast, 'Ponniyin Selvan 1' successfully brings the rich tapestry of the novel to life on the big screen, captivating audiences with its historical authenticity and grandeur.",
        para2:"The movie features a stellar cast that includes top-notch actors from the Tamil film industry. Vikram shines as the charismatic Vandiyathevan, portraying his bravery and wit with finesse. Karthi mesmerizes the audience with his portrayal of Aditya Karikalan, showcasing the prince's internal conflicts and determination. Aishwarya Rai Bachchan delivers a compelling performance as Nandhini, a manipulative and mysterious character, while Trisha Krishnan impresses as the strong-willed Kundhavai. The film also features performances by Jayam Ravi, Prabhu, and Sarathkumar, among others, adding depth and richness to the story. With Mani Ratnam's directorial brilliance and A.R. Rahman's enchanting music, 'Ponniyin Selvan 1' becomes a visual spectacle and a treat for history enthusiasts and film lovers alike."
    }
  ]
app.get("/allmovies",function(req,res)
{
    res.send(movies)
})
function seachmov(name)
{
    let res
    for(i=0;i<moviedata.length;i++)
    {
        if(moviedata[i].title==name)
        {
            res=moviedata[i]
        }
    }
    return res;
}
app.get("/movie/:name",function(req,res)
{
    console.log(req.params.name)
    res.send(seachmov(req.params.name))
})