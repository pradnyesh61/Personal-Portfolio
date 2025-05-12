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
        name: "Attendance",
        image: [
            { type: 'image', src: attandanceArchitecture },
            { type: 'video', src:attandanceVideo},
            { type: 'image', src:  attandanceAppImage},
        ],
        description:"Developed an attendance system to reduce the time that is consumed when attendance is taken manually and also to reduce paper use. ", 
        skills: "Java, Android, Firebase - DB",
        githubLink: "https://github.com/pradnyesh61/Attendance-App"
    },

    
    {
        name: "PDMS",
          image: [
            { type: 'image', src: pdms_Image},
            { type: 'video', src:pdms_video},
            { type: 'image', src: pdms_logo}
          ],
          description:"PDMS stands for patient data management system, where I have developed the ui with Swing from advance Java and used sql for Database. I have created a exe file so that just providing that is sufficient for the Client to use the application.",
        skills: "Advance Java, SQL",
        githubLink:"https://github.com/pradnyesh61/PDMS"
    },

    {
        name: "Chat Application",
          image: [
            { type: 'image', src: chat_Image },
            { type: 'video', src:chat_video}
          ],
          description:"Developed a chatting application using java and ROT13 algorithm's mechanism for encryption and decryption process, The purpose of the chat application is to allow users be able to do the chat with each other.",
        skills: "Advance Java"
    },


    {
        name: "File Processing",
          image: [
            { type: 'image', src: fileProcessing_Image },
            { type: 'video', src:fileProcessing_video}
          ],
          description:"Flat file and index file is provided , index file contains the indexes of words from flat file, I read the flat file by the indexes and store it into h2 DB.",
        skills: "Java, spring boot, Apache Spark",
        githubLink:"https://github.com/pradnyesh61/FileProcessing"
    },

    {
        name: "Kindergarten",
        image: [
          { type: 'image', src: kinderGartenAppImage },
          { type: 'video', src:KindergartenVideo},
        ],
        description:"An app for children to learn basics under age - 7.",
      skills: "Java, Android"
    },

    {
        name: "Translator",
        image: [
          { type: 'image', src: translator_image },
          { type: 'video', src:translator_video},
        ],
        description:"Translator with in multiple languages in text and also provides speech option.",
      skills: "Python"
    },

    {
        name: "Calculator",
        image: [
          { type: 'image', src: calculator_Image },
          { type: 'video', src:calculator_video},
        ],
        description:"calculator for smoothly do the maths.",
      skills: "Java",
      githubLink: "https://github.com/pradnyesh61/Calculator"
    },

    {
        name: "paint",
        image: [
          { type: 'image', src: paint_image },
          { type: 'video', src:paint_video},
        ],
        description:"Paint page, for the childrens to paint whatever they want to in multiple colors",
      skills: "Advance Java"
    },

    
]