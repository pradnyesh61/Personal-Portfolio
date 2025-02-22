import p1 from "../assets/1.jpg"
import p2 from "../assets/2.jpg"
import p3 from "../assets/3.jpg"
import p4 from "../assets/4.jpg"
import p5 from "../assets/5.jpg"
import p6 from "../assets/6.jpg"
import attandanceVideo  from "../assets/Attendance.mp4"
import attandanceAppImage from "../assets/Attandance_App_Image.jpg"
import attandanceArchitecture from "../assets/Attandace_Architecture.jpg"
import kinderGartenAppImage from "../assets/Kindergaten_App_Image.jpg"
import KindergartenVideo  from "../assets/KindergartenVideo.mp4"

export const ProjectList = [
    {
        name: "Attandance",
          image: [
            { type: 'image', src: attandanceArchitecture },
            { type: 'video', src:attandanceVideo},
            { type: 'image', src:  attandanceAppImage},
          ],
          
        skills: "Java, Android, Full-Stack Development"
    },

    {
        name: "File Processing",
        image: p2
    },

    {
        name:"PDMS",
        image: p3
    },

    {
        name:"Translator",
        image: p4
    },

    {
        name:"Chat Application",
        image: p5
    },
    
    {
        name:"Calculator",
        image: p6
    },

    {
        name:"Memes App",
        image: p5
    },
    
    {
        name: "Kindergarten",
        image: [
          { type: 'image', src: kinderGartenAppImage },
          { type: 'video', src:KindergartenVideo},
        ],
        
      skills: "Java, Android, Full-Stack Development"
    },
    
    
]