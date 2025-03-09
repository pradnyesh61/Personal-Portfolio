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


import pdms_video  from "../assets/PDMS.mp4"
import paint_video  from "../assets/Paint.mp4"
import translator_video  from "../assets/Translator.mp4"
import fileProcessing_video  from "../assets/FileProcessing.mp4"
import calculator_video  from "../assets/Calculator.mp4"
import chat_video  from "../assets/Chat.mp4"

import chat_Image  from "../assets/chat_Image.png"
import pdms_Image  from "../assets/pdms_Image.png"
import pdms_logo  from "../assets/pdms_logo.png"
import fileProcessing_Image  from "../assets/fileProcessing_Image.png"
import translator_image  from "../assets/translator_image.png"
import calculator_Image  from "../assets/calculator_Image.png"
import paint_image  from "../assets/paint_image.png"



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
        name: "PDMS",
          image: [
            { type: 'image', src: pdms_Image},
            { type: 'video', src:pdms_video},
            { type: 'image', src: pdms_logo}
          ],
          
        skills: "Java, Android, Full-Stack Development"
    },

    {
        name: "Chat Application",
          image: [
            { type: 'image', src: chat_Image },
            { type: 'video', src:chat_video}
          ],
          
        skills: "Java, Android, Full-Stack Development"
    },


    {
        name: "File Processing",
          image: [
            { type: 'image', src: fileProcessing_Image },
            { type: 'video', src:fileProcessing_video}
          ],
          
        skills: "Java, Android, Full-Stack Development"
    },

    {
        name: "Kindergarten",
        image: [
          { type: 'image', src: kinderGartenAppImage },
          { type: 'video', src:KindergartenVideo},
        ],
        
      skills: "Java, Android, Full-Stack Development"
    },

    {
        name: "Translator",
        image: [
          { type: 'image', src: translator_image },
          { type: 'video', src:translator_video},
        ],
        
      skills: "Java, Android, Full-Stack Development"
    },

    {
        name: "Calculator",
        image: [
          { type: 'image', src: calculator_Image },
          { type: 'video', src:calculator_video},
        ],
        
      skills: "Java, Android, Full-Stack Development"
    },

    {
        name: "paint",
        image: [
          { type: 'image', src: paint_image },
          { type: 'video', src:paint_video},
        ],
        
      skills: "Java, Android, Full-Stack Development"
    },

    
]