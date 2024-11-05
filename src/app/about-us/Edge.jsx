"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import edge from "../../../public/edge.png";
import image1 from "../../../public/international.png";
import image2 from "../../../public/banking.png";
import image3 from "../../../public/financial.png";
import image4 from "../../../public/taxation.png";
import image5 from "../../../public/finearts.png";
import image6 from "../../../public/animationdesign.png";
import image7 from "../../../public/fashiondesign.png";
import image8 from "../../../public/journalism.png";
const Edge = () => {
  return (
    <div className="py-8 p-6 md:p-12 sm:px-24">
      <h2 className="lifetime mb-4">Education that Extends beyond Basics!</h2>
      <p className="lifetimepara">
        The specializations at Gyanarthi are particular. Each industrial stream
        has been introduced into the courses with the intent of integrating
        excellence with education. Essential degrees impart knowledge, but
        specific degrees impart skills. We aim to turn our students into
        professionals. The courses offered at the Gyanarthi Media College are
        not only traditionally educative but also modernly paced to ensure that
        the students get the best of both worlds{" "}
      </p>
      <Tabs className="vtabs">
        <TabList className="etablist">
          <Tab className=" etab ">International Business</Tab>
          <Tab className="etab ">Banking and Finance</Tab>
          <Tab className="etab ">Financial Accounting </Tab>
          <Tab className="etab ">Taxation</Tab>
          <Tab className="etab ">Fine Arts</Tab>
          <Tab className="etab ">Animation and Design</Tab>
          <Tab className="etab ">Fashion Design</Tab>
          <Tab className="etab ">Mass Communication</Tab>
        </TabList>
        <div>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Gyanarthi offers a Bachelor of Commerce with an International
              Business concentration that provides students with all of the
              skills and knowledge they need to thrive in global markets. The
              curriculum of this course covers essential areas like
              international finance, management and trade so students have a
              firm foundation on which they can navigate today's complex global
              economy. Students experience to analyze market trends, write
              strategic business plans and gain the practical skills needed for
              cross-border and international business environments. Gyanarthi
              emphasizes cross-cultural communication and cultural fluency
              training so that their students are better able to collaborate and
              interact effectively with stakeholders from various cultural
              backgrounds. Gyanarthi prepares graduates with global perspectives
              and intercultural understanding, to forge meaningful relationships
              across international boundaries. Through practical learning with
              real world applications, students develop confidence enabling them
              to become ethical business leaders well equipped for various
              international roles after graduating.
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Gyanarthi's B Com in Banking and Finance program equips students
              with all of the knowledge and skills required for success in
              financial industry. Topics covered in the curriculum such as risk
              management and investment strategies ensure students gain a
              thorough grasp of its fundamentals, courses are structured so
              students interact with real world scenarios while sharpening both
              problem-solving abilities as well as critical thinking abilities.
              Gyanarthi provides students with not only academic excellence, but
              also real life challenges to practice theory learned at school.
              Through its applied learning approach, students at Gyanarthi gain
              skills for success beyond traditional commerce roles - graduates
              emerge with skills necessary for careers such as banking,
              consulting and investment management. This program also promotes
              an ideal blend between academic knowledge and real world
              experience, helping students to evolve into versatile
              professionals with solid financial acumen and confidence in making
              good financial decisions, which contribute to banking and finance
              world.
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Gyanarthi's Financial Accounting program gives students a hold on
              to important business principles, with particular attention paid
              to skills essential for informed decision-making and financial
              transparency. Through engaging coursework, students acquire key
              accounting concepts as they prepare accurate financial statements,
              analyze data analysis reports and successfully navigate various
              financial environments. The program equips graduates with an
              excellent foundation for career advancement and growth across a
              variety of fields, such as accounting, finance and business
              analysis. Emphasis is placed on practical applications in real
              situations so graduates may excel across industries and sectors.
              Gyanarthi's Financial Accounting Program places an emphasis on
              academic excellence while offering hands-on learning. Students
              gain the necessary skills and knowledge for successfully handle
              today's rapidly shifting business environment and can achieve
              their career goals, whether that's public accounting or corporate
              finance roles.
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Gyanarthi's Taxation specialization within its B Com course gives
              students a deep dive into the complex world of tax laws and
              regulations. Students gain a comprehensive knowledge of tax
              systems encompassing income taxation, corporate taxes and indirect
              taxes through coursework and hands-on experiences. Students
              explore the complex intricacies of planning, preparation and
              compliance within today's ever-evolving landscape of taxation with
              this course. Gyanarthi's Taxation program prepares students for
              various careers within tax advisory firms or consulting practices,
              including advisory roles or compliance roles within tax advisory
              practices. Gyanarthi graduates leave equipped with the skills and
              knowledge required to assess tax ramifications, provide strategic
              tax advice to their clients and meet relevant regulatory
              requirements. Our program emphasizes real-life scenarios and
              practical applications so our graduates are well equipped for tax
              related careers in public accounting firms or corporate tax
              departments while simultaneously being well prepared both
              academically and experientially for success
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Gyanarthi Media College's Bachelor of Fine Art program will lead
              you on an amazing creative adventure. This course is designed to
              ignite artistic discovery while offering you an outlet to express
              yourself artistically across various mediums - be that traditional
              forms like painting and sculpture, graphic design techniques or
              more modern approaches like 3D modeling. Students have plenty of
              hands-on activities such as workshops or studio sessions available
              to them so they can hone their craft while trying out new methods
              that push their limits of creativity further than ever. Gyanarthi
              Media College's program goes far beyond technical expertise to
              offer real world insight and industry knowledge to its students.
              Students gain an in-depth knowledge of the creative process from
              experienced faculty as they reflect current industry trends and
              share this with you to assist your career journey as a designer,
              artist, or teacher in Gyanarthi's curriculum that integrates
              creativity with practical skills that help ensure a rewarding
              creative industry career path for them.
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Our comprehensive programs can help bring your animation and
              design dreams to fruition. Beginning with our Bachelor of Arts
              Program, students gain all of the skills required for success in
              today's fast-paced design, 3d animation lessons and animation
              industries by mastering basic principles while exploring various
              techniques. Our Master in Animation and Design programs provide
              advanced training with opportunities to specialize. Students can
              sharpen their abilities through primary projects and in-depth
              coursework while receiving guidance from experienced professionals
              to expand their visual storytelling abilities. Gyanarthi Media
              College graduates emerge as creative experts ready to make an
              impression mark in animation and design, be it advertising,
              digital media, filmmaking, TV gaming, or gaming itself. At our
              campus, we give creatives of any age the chance to realize their
              full potential, modern facilities with experienced teachers, as
              well as an encouraging community, help them do just that.
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              Our Bachelor of Science in Fashion Design program fosters creative
              minds while equipping students with the skills they need to excel
              in the fashion industry. Students learn key aspects of fashion
              design such as creating design concepts and sewing garments,
              additionally they receive training for various roles within
              fashion industry. Our Masters of Science program builds upon this
              foundation by offering advanced courses and specialization options
              designed to expand students' knowledge and abilities further.
              Graduating with industry professionals offering assistance and
              modern resources will equip graduates to make an impactful
              statement as fashion leaders.
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <p className="kalakari">
              The dynamic Journalism & Mass Communication Program at Gyanarthi
              Media College empowers aspiring communicators to craft compelling
              narratives and find their own voice. Our Bachelor's degree program
              provides a thorough exploration of storytelling in print,
              broadcast and digital media. Through real-world projects and
              internships as well as strategic industry partnerships, students
              gain valuable, hands-on experiences that will equip them with
              versatile skills in today's rapidly-evolving media environment.
              Our Master's Program builds on this foundation and explores
              advanced topics to help students develop the expertise and insight
              necessary for success as leaders in media. Students sharpen their
              skills with coursework in investigative journalism and multimedia
              storytelling. They also receive guidance from industry
              professionals and faculty. Graduates are prepared to excel in
              journalism, broadcasting and digital media. Gyanarthi Media
              College focuses on ethical reporting, innovative approaches and
              critical thinking to prepare students for the modern media.
            </p>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Edge;
