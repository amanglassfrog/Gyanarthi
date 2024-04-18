'use client'
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import Image from 'next/image';
import admisiions from "../../../public/admissions.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Homegallery from '@/Components/Homegallery/Homegallery';
import edge from '../../../public/edge.png';
import Footer from '@/Components/Footer/Footer';





const Page = () => {

    const courses = [



        {
            name: "BCom",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "The Banking and Finance Domain for the Gyanarthi’s B Com Course is meticulously devised in order to provide complete knowledge in the arena. Blended with the Bachelor of Commerce’s structured curriculum, the course specialization prepares students for highly specific professions in the Banking domain.",
            tabpanel2: "Financial Accounting is a separate field altogether. The students are prepared to devise strategies on investment plans, develop reports, and gain an analytical understanding of investments. Gyanarthi Media College ensures that the students are able to apply the theoretical learnings very conveniently in practicality.",
            tabpanel3: "The students at the Gyanarthi Media College are also provided with an option to pursue the specialization in the Taxation stream for the Bachelor of Commerce course. We prepare our students for financial accounting, direct taxation, indirect taxation, and auditing while also them keeping intact with the traditional concepts of the Commerce degree.",
            tabpanel4: "International Business is a domain whose demand in the commercial market is hiking very rapidly. Students who desire to work in companies that work on a global level can elevate their skill set by gaining perspective regarding International Business domain with Gyanarthi’s B Com in International Business. We ensure that the students are able to employ the concepts in practicality as well.",
        },


        {
            name: "BCom Taxation",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "The Banking and Finance Domain for the Gyanarthi’s B Com Course is meticulously devised in order to provide complete knowledge in the arena. Blended with the Bachelor of Commerce’s structured curriculum, the course specialization prepares students for highly specific professions in the Banking domain.",
            tabpanel2: "Financial Accounting is a separate field altogether. The students are prepared to devise strategies on investment plans, develop reports, and gain an analytical understanding of investments. Gyanarthi Media College ensures that the students are able to apply the theoretical learnings very conveniently in practicality.",
            tabpanel3: "The students at the Gyanarthi Media College are also provided with an option to pursue the specialization in the Taxation stream for the Bachelor of Commerce course. We prepare our students for financial accounting, direct taxation, indirect taxation, and auditing while also them keeping intact with the traditional concepts of the Commerce degree.",
            tabpanel4: "International Business is a domain whose demand in the commercial market is hiking very rapidly. Students who desire to work in companies that work on a global level can elevate their skill set by gaining perspective regarding International Business domain with Gyanarthi’s B Com in International Business. We ensure that the students are able to employ the concepts in practicality as well.",
        },


        {
            name: "BCom Banking and Finance",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "The Banking and Finance Domain for the Gyanarthi’s B Com Course is meticulously devised in order to provide complete knowledge in the arena. Blended with the Bachelor of Commerce’s structured curriculum, the course specialization prepares students for highly specific professions in the Banking domain.",
            tabpanel2: "Financial Accounting is a separate field altogether. The students are prepared to devise strategies on investment plans, develop reports, and gain an analytical understanding of investments. Gyanarthi Media College ensures that the students are able to apply the theoretical learnings very conveniently in practicality.",
            tabpanel3: "The students at the Gyanarthi Media College are also provided with an option to pursue the specialization in the Taxation stream for the Bachelor of Commerce course. We prepare our students for financial accounting, direct taxation, indirect taxation, and auditing while also them keeping intact with the traditional concepts of the Commerce degree.",
            tabpanel4: "International Business is a domain whose demand in the commercial market is hiking very rapidly. Students who desire to work in companies that work on a global level can elevate their skill set by gaining perspective regarding International Business domain with Gyanarthi’s B Com in International Business. We ensure that the students are able to employ the concepts in practicality as well.",
        },


        {
            name: "BCom Financial Accounting",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "The Banking and Finance Domain for the Gyanarthi’s B Com Course is meticulously devised in order to provide complete knowledge in the arena. Blended with the Bachelor of Commerce’s structured curriculum, the course specialization prepares students for highly specific professions in the Banking domain.",
            tabpanel2: "Financial Accounting is a separate field altogether. The students are prepared to devise strategies on investment plans, develop reports, and gain an analytical understanding of investments. Gyanarthi Media College ensures that the students are able to apply the theoretical learnings very conveniently in practicality.",
            tabpanel3: "The students at the Gyanarthi Media College are also provided with an option to pursue the specialization in the Taxation stream for the Bachelor of Commerce course. We prepare our students for financial accounting, direct taxation, indirect taxation, and auditing while also them keeping intact with the traditional concepts of the Commerce degree.",
            tabpanel4: "International Business is a domain whose demand in the commercial market is hiking very rapidly. Students who desire to work in companies that work on a global level can elevate their skill set by gaining perspective regarding International Business domain with Gyanarthi’s B Com in International Business. We ensure that the students are able to employ the concepts in practicality as well.",
        },


        {
            name: "BCom International Business",
            description: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            specialization: "The Gyanarthi College offers eclectic education in the  domain with the Bachelor of Commerce course. Our courses are tailored to equip students for the professional world. Thus, we offer knowledge in domains that are highly relevant to the industrial demands. Gyanarthi Media College is the first and only college in the city of Kashipur to offer such specialization in a Bachelor of Commerce degree. Our Bachelor of Commerce Course can be wither pursued generally or the students can opt for either the Taxation, International Business, Banking and Finance, or Financial Accounting domains. The students simply need to specify if they seek to opt for a curated curriculum course or simply a Bachelor of Commerce degree at the Gyanarthi Media College.Irrespective of subject combination, they can seek admission in the course of their choice easily.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi is relaxed to ensure that the students of all backgrounds and potential can chase their passion and turn them into profession.We seek to help students in building the career they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives.Thus, as one of the top colleges in the city of Kashipur, we strive to reach out every student who has the compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Banking and Finance ",
            tab2: "Financial Accounting ",
            tab3: "Taxation ",
            tab4: "International Business",
            tabpanel1: "The Banking and Finance Domain for the Gyanarthi’s B Com Course is meticulously devised in order to provide complete knowledge in the arena. Blended with the Bachelor of Commerce’s structured curriculum, the course specialization prepares students for highly specific professions in the Banking domain.",
            tabpanel2: "Financial Accounting is a separate field altogether. The students are prepared to devise strategies on investment plans, develop reports, and gain an analytical understanding of investments. Gyanarthi Media College ensures that the students are able to apply the theoretical learnings very conveniently in practicality.",
            tabpanel3: "The students at the Gyanarthi Media College are also provided with an option to pursue the specialization in the Taxation stream for the Bachelor of Commerce course. We prepare our students for financial accounting, direct taxation, indirect taxation, and auditing while also them keeping intact with the traditional concepts of the Commerce degree.",
            tabpanel4: "International Business is a domain whose demand in the commercial market is hiking very rapidly. Students who desire to work in companies that work on a global level can elevate their skill set by gaining perspective regarding International Business domain with Gyanarthi’s B Com in International Business. We ensure that the students are able to employ the concepts in practicality as well.",
        },
        {
            name: "BA Journalism and Mass Communication",
            description: "The Journalism and Mass Communication course at the Gyanarthi Media College at Kashipur is a dynamic undergraduate degree designed to help students with the skills necessary to navigate the fast-paced world of media. The mass communication course offers a structured education in an array of media domains such as print, digital, television, and radio. We focus on building a strong foundation in journalistic practices, ethics, and research techniques for our students. At Gyanarthi, the students learn to craft compelling news stories, conduct effective interviews, and formulate multimedia content.We ensure that they are able to gain a deep understanding of the impact of media on society and culture which shall assist them in curating a very specific career in the future.The coursework for the bachelor degree in journalism and mass communication at the Gyanarthi Media College integrates theoretical learning with practical application.Our students are prepared to work on practical projects as we provide them with real - time experience and internships.We ensure that the students are able to build professional networks and inculcate practical skills before they are all set to move to the market to move ahead with professional commitments.This degree not only prepares students for careers in journalism and communications but also helps them build critical thinking and communication skills.",
            specialization: "The students at Gyanarthi Media College are well-equipped to move forward and prepare themselves for the fields of mass communication and media studies. The curriculum at the Gyanarthi Media College is extensive and well-crafted for building careers in the right direction. Our students are thoroughly taught to navigate through the challenges in the Media and Communication world. At Gyanarthi, the faculty focuses on helping the students with domains such as Television Broadcasting and Radio Broadcasting. We make sure that our students are equipped with the appropriate knowledge in the domains of Print Journalism and even the basics of Photography. This helps the students gain ample acumen to practically test their knowledge in the domains of Journalism and Mass Communication. Gyanarthi Media College is a competent institute for mass communication that equips students with the right amount of knowledge to work in the fields of Advertising and Public Relations. We ensure that our students are up to date in subjects such as Social Sciences, Indian Polity and Society, Media Research, Media Law and Ethics, Functional Hindi, and Functional English as this shall assist them in going forward with activities in Media Planning, Management, and execution very smoothly. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Television Journalism ",
            tab2: "Radio Broadcasting ",
            tab3: "Advertising  ",
            tab4: "PR and Corporate Communication",
            tabpanel1: "The students at Gyanarthi aim to be Journalists at established firms and companies in the Television Industry. Thus, in order to provide them with the right amount of knowledge in the arena of Data Journalism, Photography, Media Research, Media Laws and Ethics, Media Planning and Management, Advertising, and other sectors. This prepares students with the appropriate information to move forward in their careers.",
            tabpanel2: "For the students of Journalism and Mass Communication, Gyanarthi Media College ensures that the students are prepared for the Radio domains as it forms a very necessary core for Journalism studies. Furthermore, as students who are studying mass communication, it is necessary that they understand the levels of communication and the application of tools in this sector. Gyanarthi prepares students for everything and Radio Broadcasting is one of them.",
            tabpanel3: "It is necessary to understand for the students that the basics of advertising form a very important part of the journalism curriculum. Students at Gyanarthi are prepared for the journalism world while keeping them intact with the importance of Advertising. Starting from the basics to the core, the faculty at Gyanarthi ensures that the students know everything.",
            tabpanel4: "The curriculum of Journalism and Mass Communication Courses at the Gyanarthi Media College is very balanced. It is intricately designed to keep up with the latest market requirements, and Public Relations is one of them. The students are prepared well to navigate through Corporate Communication and Public Relations roles while they study BA Journalism and Mass Communication. ",
        },
        {
            name: "BSc Fashion Designing",
            description: "The Fashion and Designing Course at the Gyanarthi Media College is well- curated to help students build their dream careers in the fashion world.In the city of Kashipur, Gyanarthi happens to be one of the top choices for the fashion course.The reason for the same is the kind of curriculum that the college provides to the students.The Bachelor of Science in Fashion Designing is very effectively structured to assist students beginning from the basics to the complexes of the Fashion World.At the Gyanarthi Media College, the compounded concepts are explained to the students in the most simple world.The students are nurtured with knowledge in the domains of Indian Textiles, Fashion Trends, History of Clothing, and many much more.This enables the students gain a comprehensive knowledge of the important domains they must be aware of while they practice fashion professionally.Our students grow to be fashion designers, analysts, buyers, textile designers, and other major roles in many bcommendable workspaces across the nation.",
            specialization: "The BSc in Fashion Designing is a three- year undergraduate course.It is a course filled with creativity, innovation and endless opportunities.For aspiring fashion enthusiasts BSc in Fashion Designing is a perfect course.It is a foundation to explore the multifaceted world of designs, textiles and trends.The Gyanarthi Media College’s Fashion Designing Course promises to give students an experience of industry’s technical aspects with its state - of - the - art infrastructure.The college provides variety of hands - on labs and access to specialised equipment for their training.These labs include pattern - making, pattern drafting, interior drafting, and draping, providing practical experience in creating and transforming garment patterns and designs.The labs are equipped with industrial sewing machines, interlocking machines, and supporting equipment, ensuring students have the tools they need to bring their creativity into lively designs.Further, we make sure that our students are well - equipped with the knowledge of textiles such as Chikankari, Zardosi, Kalamkari, and many others.The faculty at Gyanarthi is highly conscientious of the information that they extend to the students as they believe that the students must be prepare for the corporate world while being constantly in touch with the traditional as well as the modern approaches.",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Pattern-Making Labs ",
            tab2: "Pattern Drafting Labs ",
            tab3: "Interior Drafting Labs ",
            tab4: "Draping Labs",
            tabpanel1: "At Gyanarthi, we have specific pattern-making labs which help students develop a specific understanding of the fashion industry and its pertinence with pattern-making. The students equip themselves with the understanding of the blueprinting of patterns. Further, they are able to nurture their comprehension of factors such as the type of fabric, intended silhouette, and many other things that they require to build a successful career in fashion.",
            tabpanel2: "Equipped with top equipment for Pattern drafting, the Pattern Drafting Lab at Gyanarthi is focused on giving the students the right environment to carefully frame the basis of their fashion design journey. Pattern drafting is a very meticulous process as it inculcates an understanding of personalities, forms, models, and other specifications in order to draft the right pattern.",
            tabpanel3: "To compose the 2D model of the designs that the students are willing to draft, it is necessary that they are able to get spaces such as Interior Drafting Labs. They help the students clearly understand the way they have to employ the types of equipment and how they must use the tools in order to complete the respective jobs. The students are further encouraged to take up the latest trends and get an understanding of the latest trends and market requirements. ",
            tabpanel4: "Draping forms the core of fashion design studies. Thus it is necessary that the students have the exact understanding of every technique. This is a very tedious job for which absolute concentration is much needed. The students must be able to work with the exact equipment in the needed direction to go through the steps of the intricate draping process. ",
        },
        {
            name: "Bachelor of Fine Arts BFA",
            description: "The students at the Gyanarthi Media College are inspired to choose their fields of interest and build a career in the same. The domain of Fine Arts is one of the most creative fields. However, the options of courses that solely focus on the same are very limited. At Gyanarthi, we allow the students to explore the Fine Arts with finesse and comprehensive techniques. The Bachelor of Fine Arts course is supported by an intensive curriculum which is affiliated with the University of Kumaun, Nainital and is recognized by the University Grants Commission. For building a career in creative fields, a very supportive environment and structure of the course are required. This structure must be backed by thorough techniques and expertise that our experienced faculty brings to the table. The Bachelor of Fine Arts Course at the Gyanarthi Media College aims to assist students in building the careers they have always dreamt of. ",
            specialization: "Bachelor of Fine Arts Courses are available with four specializations at the Gyanarthi Media College. These domains are very balanced and curated in order to build expertise in one of the four leading domains of the field. The students can either choose Painting, Sculpture, Applied Arts, or Photography in order to choose the course of their career. The curriculum in each of the specializations is highly specific while also providing a general idea of the basics of Fine Arts. The four specializations are more inclined towards equipping the students with the right amount of knowledge they need so as to build careers in different industries within the Fine Arts field. The students pursue Painting to take up fields that require intricate brush work while those who take up Sculpting are more adept in moulding. Applied Arts primarily focuses on the domain of Graphic Design and related artistical works while the Photography arena deals with a meticulous understanding of the frames and visual adjustments. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "BFA in Painting  ",
            tab2: "BFA in Sculpture ",
            tab3: "BFA in Applied Arts",
            tab4: "BFA in Photography ",
            tabpanel1: "Painting is one of the prime and most pursued specializations under the Bachelor of Fine Arts Course at the Gyanarthi Media College. The well-curated and structured curriculum enables students to refine their craft by employing better techniques. This is one of the best courses in the city of Kashipur and it not only hones the skills of the students but also helps them build careers in textiles, art studios, animation, production houses, and other such places of work. ",
            tabpanel2: "Integrating moulding, carving, welding, and modelling in Bachelor of Fine Arts, this specialization focuses on the holistic development of the students to grow their career in Sculpting. While the students are able to get an understanding of photography, fine arts, graphic designing, and other domains, this specialization helps them gain a closer understanding of the sculpting arena while repairing them more intricately for a career in the same field. ",
            tabpanel3: "The Applied Arts domain in the Bachelor of Fine Arts Courses is more inclined towards Calligraphy, Graphic Design, Advertising, Clay Modelling, and other such fields. This domain can be pursued by students who are interested in joining workspaces such as Animation Studios, Production Houses, Music Companies, Theatres and others. We prepare our students to work in exciting workspaces across the globe after they graduate from Gyanarthi. ",
            tabpanel4: "The Photography specialization in the Bachelor of Fine Arts Course brings forward opportunities for the students to explore visual aesthetics, photography frames, and relative specifications in the field.This course lays the foundation for students to pursue careers in cinematography, digital technologies, visual communication, and many more.We blend technology with talent to make our students compatible with modern trends in photography."

        },
        {
            name: "BA Animation and Design ",
            description: "One of the rapidly growing fields in the market is Animation. The demand for 3D Animators is growing day by day and this is fueling the demand for courses in animation and multimedia. The importance of graphic and design courses is extensively explored at the Gyanarthi Media College. We understand that students seeking to build a career in the animation field are more inclined towards absorbing techniques. At Gyanarthi, our prime focus remains to deliver an understanding of the latest trends and technical assistance associated with the same. We believe in helping our students find their creativity in the right manner with limitless possibilities. Gyanarthi Media College aims to prepare students for the professional world where they can explore their creative sides while being intact with the traditional techniques and methods. For animation and design, there are rising trends and technical updates. We ensure that our students are prepped to take on any challenges in the most holistic way. ",
            specialization: "As far as the BA Animation and Design Course is concerned at the Gynarthi Media College, the criteria are highly relaxed. Since we welcome students of nearly all backgrounds, we ensure that we move up in the most basic way and establish concepts. We lay the foundation for animation and design for the students beginning with colour theory to modeling and motion designing. We concentrate on illustrating to our students the best industry techniques in 2D Hand-Drawn and 3D Modelling. Further, the prime software such as Adobe and Blender are explained to the students in a very thorough way. Techniques for visual storytelling, including scriptwriting and sequential art are well included in the course curriculum making the entire structure meticulously insightful. Further, the BA Animation and Design Course is one of the most pursued courses at the Gyanartjhi Media College. Our students proceed on to join bigger enterprises in the markets in order to kickstart their careers. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Class 12th from a recognized board of schooling. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Fundamentals of Animation and Design  ",
            tab2: " Animation and Modelling ",
            tab3: "Cinematography and Photography Domains",
            tab4: "Media Planning and Management  ",
            tabpanel1: "For an BA in Animation and Design, since the eligibility conditions are highly relaxed, the students are taught everything from the basics. Gradually at Gyanarthi Media College, we build the foundation for the Animation and Design course by introducing the students to the fundamentals of art and design. Further, we take them through the specifications of a Story and Storyboard. This prepares the students for the course. ",
            tabpanel2: "At Gyanarthi, we focus on equipping students with Animation and Modelling in Dimensions that expand beyond limitations. Our students are proficient in 2D and 3D Animation and well adept in 3D Modelling and Texturing. These concepts are furthered into Character Rigging and Animation which help our students build the right skillset as required for jobs in Animation and Design ",
            tabpanel3: "Students at Gyanarthi are made to go through the basics of lighting and rendering in order to understand the specifications of Cinematography and Photography. The students of Animation and Design need visual proficiency to thoroughly comprehend Photography and Cinematography, and the students are ensured with concepts of Motion Graphics. Further, Editing and Composting also form a relevant core for the understanding of this domain. ",
            tabpanel4: "For the students of Animation and Design, it is necessary that they get an idea of the arena of Media Planning and Management. As Bachelor’s students, it is necessary to understand how they must operate within the management domains such that they can get into the management profiles in the media planning studies. This shall help them get equipped with the required acumen for Management profiles. "

        },
        {
            name: "MA Animation and Design ",
            description: "Animation is the art of bringing life to a lifeless item using special effects is called animation. The Master in Animation and Design provides artistic and technical training to prepare the students for future artistic 3D character animation, traditional animation, storyboarding, computer game art, motion graphics, or visual effects animation. In the era of the Internet, the trend of animation and VFX in the entertainment industry is expected to persist, demanding expertise in new-age software. Gyanarthi Media College’s M.A. Animation and Design, a two-year program equips students with essential skills for success in this field. Gyanarthi Media College aims to help students understand the fascinating world of animation, VFX and motion graphics for film, broadcast and other media. Basic understanding of story and design concepts related to Pre-production for animation and VFX are taught. Special skill sets in the creation of Artwork for Production and Post-Production are also taught.The world of 3D Digital Art and VFX visualization are also introduced in our program to expose students to industry-relevant software. At the end of the programme, students are exposed to industrial training for real-world experience. essential aspects of art and design fundamentals, script development, and storyboard creation are also covered. Students get hands-on experience in both 2D and 3D animation techniques, mastering skills in 3D modelling, texturing, character rigging, and animation. Additionally, they learn about lighting, rendering, photography, and cinematography to enhance visual storytelling. ",
            specialization: "MA Animation and Design program students can specialize in various areas for their careers. Skills like Character Animation are making characters look real by using special animation skills, visual effects (VFX) for making cool effects for movies and TV shows, and motion graphics for creating moving graphics for titles and ads. 3D modelling and Texturing is another skill for making digital 3D models and game design and development shows how animation works for games. The wide-ranging scope for Animation and Design exists in production houses, gaming developers and many others. In addition to introducing students to the world of 3D digital art and VFX visualization, this programme exposes students to industry-relevant software. At the end of the programme, Students are exposed to industrial training to know about real-world experience. Renowned Industry experts often make an appearance at GMC to share their experiences about the use of 3D and 2D animation in film making and design. Different workshops are also organized periodically to keep students abreast of the ongoing developments in the animation industry. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Fundamentals of Animation and Design  ",
            tab2: "Animation and Modelling ",
            tab3: "Cinematography and Photography Domains",
            tab4: "Media Planning and Management  ",
            tabpanel1: "For an MA in Animation and Design, since the eligibility conditions are highly relaxed, the students are taught everything from the basics. Gradually at Gyanarthi Media College, we build the foundation for the Animation and Design course by introducing the students to the fundamentals of art and design. Further, we take them through the specifications of a Story and Storyboard. This prepares the students for the course. ",
            tabpanel2: "At Gyanarthi, we focus on equipping students with Animation and Modelling in Dimensions that expand beyond limitations. Our students are proficient in 2D and 3D Animation and well adept in 3D Modelling and Texturing. These concepts are furthered into Character Rigging and Animation which help our students build the right skillset as required for jobs in Animation and Design.",
            tabpanel3: "Students at Gyanarthi are made to go through the basics of lighting and rendering in order to understand the specifications of Cinematography and Photography. The students of Animation and Design need visual proficiency to thoroughly comprehend Photography and Cinematography, and the students are ensured with concepts of Motion Graphics. Further, Editing and Composting also form a relevant core for the understanding of this domain.",
            tabpanel4: "For the students of Animation and Design, it is necessary that they get an idea of the arena of Media Planning and Management. As Master’s students, it is necessary to understand how they must operate within the management domains such that they can get into the management profiles in the media planning studies. This shall help them get equipped with the required acumen for Management profiles. "

        }
        ,
        {
            name: "MA Journalism and Mass Communication",
            description: "A Journalism and Mass Communication course is a graduate programme that focuses on developing skills and knowledge in the field of media and communication. Students pursuing this program get to learn about different aspects of journalism including news reporting, writing, editing etc. The Master's Degree in Journalism and Mass Communication program at Gyanarthi Media College aims to transform students into highly skilled professionals in media and communication. The program makes the students eligible and well-deserved to get a strong career in the media industry and media research. The duration of this MA Journalism and Mass Communication Course is two years.Gyanarthi Media College allows students to choose from specializations in their third semester. Specialization in the three main areas of Broadcast Media, Print & Online Media and Advertising & PR, a perfect blend of theoretical knowledge & practical exposure, classroom learning, and field visits for media communication skills are being provided. Assignments to prepare portfolios, short films, documentaries, radio programmes and research projects are being assigned. For hands-on experience, regular industrial interactions and news channel visits are planned for students.The program teaches advanced television journalism, production & broadcasting,	advanced radio broadcasting, print journalism, digital media, data journalism, photography, media research, media laws & ethics, media planning & management, advertising, PR & Corporate communication, development communication and contemporary & International Affairs. ",
            specialization: "A lot of career opportunities for aspirants are available after the MA Journalism and Mass Communication Course. Wide range of areas such as print journalism, digital journalism, public relations, advertising, media management, and international journalism including broadcast journalism, and feature writing. Broadcast journalism is for reporting and presenting news on television while Print journalism is for those passionate about crafting compelling stories for newspapers or magazines. The specialization provides students with expertise and experience, preparing students for diverse roles in the media and communication roles. The Master’s Degree programme in Journalism and Mass communication aims to transform students into highly skilled media and communication professionals. The programme is carefully structured to offer the students a foundation for a strong career in the media industry as well as media research. After successfully completing their MA-J&MC, the students will be ready to grab job opportunities as Radio Jockeys, Anchors, TV Broadcasters, Reporters, Copy Editors, Creative/Script Writers, Advertising Executives and PR/Corporate Communication Professionals. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into profession. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Television Journalism  ",
            tab2: "Radio Broadcasting ",
            tab3: "Advertising ",
            tab4: " PR and Corporate Communication ",
            tabpanel1: "The students at Gyanarthi aim to be Journalists at established firms and companies in the Television Industry. Thus, in order to provide them with the right amount of knowledge in the arena of Data Journalism, Photography, Media Research, Media Laws and Ethics, Media Planning and Management, Advertising, and other sectors. This prepares students with the appropriate information to move forward in their careers.",
            tabpanel2: "For the students of Journalism and Mass Communication, Gyanarthi Media College ensures that the students are prepared for the Radio domains as it forms a very necessary core for Journalism studies. Furthermore, as students who are studying mass communication, it is necessary that they understand the levels of communication and the application of tools in this sector. Gyanarthi prepares students for everything and Radio Broadcasting is one of them.",
            tabpanel3: "It is necessary to understand for the students that the basics of advertising form a very important part of the journalism curriculum. Students at Gyanarthi are prepared for the journalism world while keeping them intact with the importance of Advertising. Starting from the basics to the core, the faculty at Gyanarthi ensures that the students know everything.",
            tabpanel4: "The curriculum of Journalism and Mass Communication Courses at the Gyanarthi Media College is very balanced. It is intricately designed to keep up with the latest market requirements, and Public Relations is one of them. The students are prepared well to navigate through Corporate Communication and Public Relations roles while they study MA Journalism and Mass Communication. "

        },
        {
            name: "MSc Fashion Designing",
            description: "Master of Science MSc in Fashion Design is the postgraduate course after completing bachelors. Fashion Design is the art of creating clothes and accessories that reflect cultural influences, individual expression, and the latest trends. This course focuses on the design, development, and production of clothes, footwear and accessories. Gyanarthi Media College in Kashipur offers Fashion and design courses in bachelors as well as postgraduate courses. The MSc Fashion Designing course of two years at Gyanarthi Media College provides a basic understanding of the fashion industry, various fashion segments like women, kids and men etc.Additionally, the course provides the basics of the fashion industry like working on different machines like sewing machines and overlock machines. The MSc program also teaches you basic pattern-making, textile art and draping techniques. The college has state-of-the-art infrastructure and equipment, such as pattern-making labs, drafting labs, draping labs and industrial sewing machines for a better experience in the industry.The key benefits of pursuing an MSc in Fashion design are that it provides an opportunity to specialize in a particular area of field and work with some of the best professionals in the fashion industry. Gyanarthi College also provides student workshops like Chitkala Workshops, and Kashmir Embroidery Workshops to get first-hand experience of the latest trends in the fashion industry.  ",
            specialization: "In an MSC Fashion Designing Course, students have the opportunity to choose from a variety of specializations depending on their interests. The specializations include fashion technology, textile design, accessory design, fashion marketing and merchandizing, and fashion technology. These specializations help students to focus on specific domains of the fashion world. They learn how to make clothes, design fabrics, sell fashion products or use technology in fashion.By studying these specializations, students get the expertise of their field and work with professionals in the outside world. Doing an MSc in Fashion Designing provides students with adequate abilities and skills for the course and improves their abilities and methods to construct a portfolio. ",
            Eligibility: "Gyanarthi Media College, Kashipur, is very inclusive in terms of educational backgrounds. Students of nearly all backgrounds can opt for courses at Gyanarthi. All they need to do is Pass Graduation from a recognized University. The students should have scored more than 40% marks as an aggregate. The selection criteria at the Gyanarthi are relaxed to ensure that students of all backgrounds and potential can chase their passion and turn them into professionals. We seek to help students in building the careers they desire in the domains of Media, Communication, Commerce, Arts, and Fashion. The students at Gyanarthi Media College are groomed to face all the challenges of their professional as well as personal lives. Thus, as one of the top colleges in the city of Kashipur, we strive to reach out to every student who has compassion and enthusiasm for passionate professions.",
            image: admisiions,
            tab1: "Pattern-Making Labs ",
            tab2: "Pattern Drafting Labs ",
            tab3: "Interior Drafting Labs",
            tab4: "Draping Labs ",
            tabpanel1: "At Gyanarthi, we have specific pattern-making labs which help students develop a specific understanding of the fashion industry and its pertinence with pattern-making. The students equip themselves with the understanding of the blueprinting of patterns. Further, they are able to nurture their comprehension of factors such as the type of fabric, intended silhouette, and many other things that they require to build a successful career in fashion.  ",
            tabpanel2: "Equipped with top equipment for Pattern drafting, the Pattern Drafting Lab at Gyanarthi is focused on giving the students the right environment to carefully frame the basis of their fashion design journey. Pattern drafting is a very meticulous process as it inculcates an understanding of personalities, forms, models, and other specifications in order to draft the right pattern. ",
            tabpanel3: "To compose the 2D model of the designs that the students are willing to draft, it is necessary that they are able to get spaces such as Interior Drafting Labs. They help the students clearly understand the way they have to employ the types of equipment and how they must use the tools in order to complete the respective jobs. The students are further encouraged to take up the latest trends and get an understanding of the latest trends and market requirements. ",
            tabpanel4: "Draping forms the core of fashion design studies. Thus it is necessary that the students have the exact understanding of every technique. This is a very tedious job for which absolute concentration is much needed. The students must be able to work with the exact equipment in the needed direction to go through the steps of the intricate draping process."

        }



    ]
    // Add more properties as needed



    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const programName = urlParams.get('program');
        const se = courses.find(course => course.name === programName);
        setSelectedCourse(se);
    }, []);

    if (!selectedCourse) {
        return <div>Loading...</div>;
    }





    return (
        <>
            <main>
                <Header />
                <div className='flex justify-center'>
                    <div className="flex flex-wrap py-8  container">
                        <div className="w-full md:w-1/2  p-4">
                            <h2 className="text-xl font-bold chancelorheading">{selectedCourse.name}</h2>
                            <p className="mt-2 chancelorparagraph">
                                Pick the course that suits your desire to build a career in Mass Communication, Animation, Design, Fashion, Fine Arts, Journalism, and Commerce, easily to turn your Passion into Profession!
                            </p>
                            <div className='flex pt-8'>
                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4">

                            <Image src={admisiions} alt="Image Description"
                                className="max-w-full h-auto" />
                            <div className="w-full inset-0 flex items-center justify-center ">
                                <h1 className="  tpip">
                                    Ace Your Career, Gyanarthi Way!
                                </h1>
                            </div>

                        </div>

                    </div></div>
                <div className='flex justify-center'>
                    <div className="flex flex-wrap py-8 px-6 md:px-12 sm:px-24 container">
                        <div className="w-full md:w-full container  p-0 md:p-2 sm:p-4">
                            <h2 className="lifetime mb-4">Eligibility Criteria </h2>
                            <p className="lifetimepara">
                                At Gyanarthi, the prime eligibility criteria for a course is the intensity of interest in it! We accept students of different educational background and potentials. The basic eligibility condition for Graduate Courses is to have passed Class 12 from a recognized board of education with at least 40% marks. However, the students should have passed their 12th standard from a recognized board of education. There are no further conditions of eligibility that the students must satisfy in order to fnd their place at the Gyanarthi Media College.

                                For the Post Graduate Courses, the students must

                            </p>
                        </div>
                    </div></div>
                <div className='flex justify-center'>
                    <div className='container'>
                        <Tabs className="ctabs">
                            <div>
                                <TabList className="courselist">
                                    <Tab className="ctab">Overview</Tab>
                                    <Tab className="ctab">Specializations</Tab>
                                    <Tab className="ctab">Eligibilty</Tab>

                                </TabList>
                            </div>
                            <div className='flex flex-col '>
                                <TabPanel className="tabpanel futurevision ">
                                    <div className="flex flex-wrap">
                                        {/* First column for text */}
                                        <div className="w-full md:w-1/2 p-4">
                                            <p className='selectedcourse'>{selectedCourse.description}</p>
                                            <div className="pt-5">
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                                            </div>
                                        </div>
                                        {/* Second column for image */}
                                        <div className="w-full md:w-1/2 p-4">
                                            {/* Assuming selectedCourse.image contains the image path or URL */}
                                            <Image src={selectedCourse.image} alt="Image" className="max-w-full h-auto" />
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel className="tabpanel futurevision">
                                    <div className="flex flex-wrap">
                                        {/* First column for text */}
                                        <div className="w-full md:w-1/2 p-4">
                                            <p className='selectedcourse'>{selectedCourse.specialization}</p>
                                            <div className="pt-5">
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                                            </div>
                                        </div>
                                        {/* Second column for image */}
                                        <div className="w-full md:w-1/2 p-4">
                                            {/* Assuming selectedCourse.image contains the image path or URL */}
                                            <Image src={selectedCourse.image} alt="Image" className="max-w-full h-auto" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="tabpanel futurevision">
                                    <div className="flex flex-wrap">
                                        {/* First column for text */}
                                        <div className="w-full md:w-1/2 p-4">
                                            <p className='selectedcourse'>{selectedCourse.Eligibility}</p>
                                            <div className="pt-5">
                                                <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
                                            </div>
                                        </div>
                                        {/* Second column for image */}
                                        <div className="w-full md:w-1/2 p-4">
                                            {/* Assuming selectedCourse.image contains the image path or URL */}
                                            <Image src={selectedCourse.image} alt="Image" className="max-w-full h-auto" />
                                        </div>
                                    </div>
                                </TabPanel>


                            </div>
                        </Tabs >
                    </div ></div>
                <div className='flex justify-center'>
                    <div className="flex flex-wrap py-8  container">
                        <div className='py-8 px-6 md:px-12 sm:px-24 '>
                            <h2 className="text-2xl font-bold mb-4">Gyanarthi Gives You an Edge</h2>
                            <p className="text-gray-700">
                                The prime objective of the faculty at the Gyanarthi Media College, Kashipur is to enhance the professional profiles of the students. We seek to create professionals who are equipped with thorough knowledge in the domains of Taxation, International Business, Banking and Finance, and Financial Accounting. The courses at the Gyanarthi Media College are affiliated with the Kumaun University and the curriculum is curated with a vision to make it one of the prime options for best course after 12 Commerce. The students can check the BCom Course Details subsequently to get comprehension of the specifications of each specialization domain. </p>
                            <Tabs className="cctabs pt-16">
                                <TabList className="etablist">
                                    <Tab className=" etab ">{selectedCourse.tab1}</Tab>
                                    <Tab className="etab ">{selectedCourse.tab2}</Tab>
                                    <Tab className="etab ">{selectedCourse.tab3}</Tab>
                                    <Tab className="etab ">{selectedCourse.tab4}</Tab>



                                </TabList>
                                <div>

                                    <TabPanel className="tabpanel">
                                        <Image src={edge} alt="amazon" />

                                        <p>{selectedCourse.tabpanel1} </p>
                                    </TabPanel>
                                    <TabPanel className="tabpanel">
                                        <Image src={edge} alt="amazon" />

                                        <p>{selectedCourse.tabpanel2} </p>


                                    </TabPanel>
                                    <TabPanel className="tabpanel">
                                        <Image src={edge} alt="amazon" />

                                        <p>{selectedCourse.tabpanel3} </p>


                                    </TabPanel>
                                    <TabPanel className="tabpanel">
                                        <Image src={edge} alt="amazon" />

                                        <p>{selectedCourse.tabpanel4} </p>


                                    </TabPanel>


                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <Homegallery />
                <section className=" py-12">
                    <div className="container mx-auto px-2 md:px-2 sm:px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Apply</h3>
                                    <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi Media College for the year 2024!</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a href='/contact'>Apply Now</a></button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className=" text-center mb-4 text-white journeyheading">Connect</h3>
                                    <p className="text-center mb-6 text-white journeypara">Reach Out to Gyanarthi’s Admission Team to secure your place at the College for the upcoming session.</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a href="https://wa.me/8755552552" target="_blank" >Connect Now</a></button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
                                <div className="p-8">
                                    <h3 className="text-center mb-4 text-white journeyheading">Brochure</h3>
                                    <p className="text-center mb-6 text-white journeypara">Download the 2024 Brochure of the Gyanarthi Media College and explore the Courses and College Life.</p>
                                    <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">Download Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default Page;
