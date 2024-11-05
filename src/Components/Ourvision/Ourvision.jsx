"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Ourvision = () => {
  return (
    <main>
      <section className="py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto vdiv container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 futurevision">
            {/* First Column */}
            <div>
              {/* First Row */}
              <div className="mb-8">
                <h2 className="text-xl font-bold ourfutureheading">
                  Join a Legacy of Success - Shape Tomorrow's Industry{" "}
                </h2>
              </div>
              {/* Second Row */}
              <div className="mb-8">
                <p className="text-lg ourfutureparagraph">
                  Established in 2005 with an aim to empower students with best
                  academic excellence, Gyanarthi Media College is affiliated
                  with the Kumaun University and is one of the only colleges in
                  Kashipur that provides courses in Media, Animation, Design,
                  Fashion, Journalism, Banking, Taxation, and more.
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div>
              <div>
                <Tabs className="vtabs">
                  <TabList className="tablist ">
                    <Tab className="stab">Who Are We</Tab>
                    <Tab className="stab">Our Vision</Tab>
                    <Tab className="stab">Our Mission</Tab>
                  </TabList>
                  <div className="flex flex-col tablistpanel">
                    <TabPanel className="tabpanel futurevision">
                      <p>
                        Gyanarthi Media College in Kashipur has a close
                        affiliation with Kumaon University. This helps to create
                        a community of professionals with academic insight. Our
                        college is the only one in town to offer an intensive
                        curriculum that includes taxation, banking and finance,
                        financial accounting, and international business
                        <br></br>
                        <br></br>
                        At Media, Journalism, Design, Animation & Mass
                        Communication Institute of Florida our courses are
                        taught by experienced faculty that excels at each
                        discipline.
                        <br></br>
                        <br></br>
                        Gyanarthi Fashion Course provides comprehensive
                        knowledge about Indian Textile Industries to develop
                        academic proficiency
                      </p>
                      <div className=" pt-5">
                        <button className="text-white px-4 py-2 vp focus:outline-none">
                          <a href="/about-us">Read More</a>
                        </button>
                      </div>
                    </TabPanel>
                    <TabPanel className="tabpanel futurevision">
                      <p>
                        Our Vision is to contribute to the strong global
                        community of media, arts, and culture through powerful
                        collaborations and promote intellectual diversity
                        through artistic innovations.<br></br>
                        <br></br>
                        We envision promoting creativity and entrepreneurship
                        within the student community in a balanced,
                        comprehensive way to fuel careers inspired by true
                        dedication to their respective fields.
                        <br></br>
                        <br></br>
                        Our faculty is highly affirmative in delivering quality
                        education in the town of Kashipur to promote academia
                        most understandably and feasibly.
                      </p>
                      <div className=" pt-5">
                        <button className="text-white px-4 py-2 vp focus:outline-none">
                          <a href="/about-us">Read More</a>
                        </button>
                      </div>
                    </TabPanel>
                    <TabPanel className="tabpanel futurevision">
                      <p>
                        Gyanarthi Media College aims to inspire youngsters to
                        turn into the leaders of tomorrow. We seek to create a
                        strong sense of unity in the media and arts community by
                        bridging gaps and creating incredible artistic
                        experiences in film, fashion, television, print, radio,
                        and digital media.<br></br>
                        <br></br>
                        We aspire to create a pedagogical milestone by nurturing
                        scholastic abilities in the arena of teaching, learning
                        and research.<br></br>
                        <br></br>
                        We train young professionals by inculcating sensitivity,
                        encouraging intersectional approaches to media and
                        management and diversifying entrepreneurial visions with
                        the help of industry experts.
                      </p>
                      <div className=" pt-5">
                        <button className="text-white px-4 py-2 vp focus:outline-none">
                          <a href="/about-us">Read More</a>
                        </button>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto container">
          <div className="py-8 ">
            <h2 className="lifetime mb-4">
              Build Skills & Connections That Last a Lifetime{" "}
            </h2>
            <p className="lifetimepara">
              Our student community is not only adept with academic brilliance,
              but they are also equipped with skills that extend beyond
              education. We ensure an exposure that is valuable and create an
              environment where holistic growth of students are ensured.{" "}
            </p>
            <Tabs className="etabs">
              <TabList className="etablist">
                <Tab className=" etab ">Kalakari: Art Club</Tab>
                <Tab className="etab ">Kreeda: Sports Club</Tab>
                <Tab className="etab ">Lekha Jokha: Accountancy Club</Tab>
                <Tab className="etab ">Literati: Literature Club</Tab>
                <Tab className="etab ">Photokari: Photography Club</Tab>
                <Tab className="etab ">Shrijan: Social Club</Tab>
                <Tab className="etab ">Tamasha: Cultural Club</Tab>
              </TabList>
              <div>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    The art club, at Gyanarthi Media College, known as the
                    Kalakari Club offers students more than an art class – it
                    serves as a hub for nurturing creative minds. Students are
                    encouraged to explore their talents by indulging in various
                    forms of expression beyond their typical coursework. Whether
                    it is painting, sculpting or even performing on stage the
                    club provides a range of opportunities. Beyond creating
                    artwork the Kalakari Club fosters connections among students
                    who share a passion for art. It acts as a community where
                    individuals come together to collaborate and exchange ideas
                    in an environment brimming with creativity. Furthermore, the
                    club hosts art exhibitions that allow students to exhibit
                    their creations to an audience. Exhibitions are an
                    opportunity for the entire college community and beyond to
                    accolade the works constructed by the students and for
                    artists to feel recognised and valued. The Kalakari Club
                    serves as a place where artistic aspirations soar
                    inspiration permeates every corner.
                  </p>
                </TabPanel>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    College can be all about books and lectures, but at
                    Gyanarthi Media College, we know staying healthy is just as
                    important! That is why we have the amazing Kreeda Club. This
                    club is all about getting students moving and having fun.
                    They organize a whole bunch of different sports and games,
                    so whether the student is a basketball enthusiast or a
                    soccer superstar, there is something for everyone. But
                    Kreeda Club is not just about scoring goals or running laps.
                    It is also about building a healthy lifestyle that keeps the
                    students energized and focused throughout their studies.
                    Additionally, being part of a team teaches them valuable
                    skills like teamwork, leadership, and how to win and lose
                    gracefully. The Kreeda Club is not limited to basic games,
                    it also helps students compete in tournaments and
                    championships! Gyanarthi students have a history of bringing
                    home trophies, which is a testament to their hard work and
                    the excellent coaching provided by the club. By encouraging
                    physical activity and a competitive spirit, Kreeda Club is a
                    key player in Gyanarthi's mission to create well-rounded
                    individuals who excel not just in the classroom, but also on
                    the field.
                  </p>
                </TabPanel>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    At Gyanarthi, the Lekha Jokha Club is like a training ground
                    for future accounting stars! Here, students who love numbers
                    and commerce can really sharpen their skills. They work
                    together in a friendly and supportive environment, helping
                    each other get even better at keeping track of money and
                    understanding financial stuff. Students share ideas, have
                    discussions, and tackle challenges as a team, just like they
                    will in the real world of business! The Lekha Jokha Club
                    does not just talk about money, they get hands-on too. They
                    organize workshops, seminars, and interactive sessions where
                    students can learn from experts and practice their skills.
                    This way, they are not just learning from books, they are
                    getting ready for the real deal. By building a strong
                    foundation in finance and teamwork, the Lekha Jokha Club
                    help students become commerce experts who are ready to take
                    on any challenge.
                  </p>
                </TabPanel>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    At Gyanarthi Media College, we believe in the adage, “Words
                    are mightier than Swords”! That is why we have the Literati
                    Club, a place where students can celebrate language and
                    unleash their creativity. Here, students do not just read
                    books, they write their own stories, have lively discussions
                    about words and their meanings, and work together on cool
                    projects. The Literati Club feels like a big, friendly
                    family for anyone who loves language. It is a safe space for
                    budding writers and storytellers to explore their talents
                    and share their unique voices with the world. They even hold
                    workshops where students can learn from experts and get even
                    better at writing. Additionally, they have poetry readings
                    and other events where students can show off their work and
                    make new friends who share their passion for words. The
                    Literati Club believes that writing is a superpower, and
                    they teach students how to use their words with confidence
                    to tell their stories and make a difference!
                  </p>
                </TabPanel>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    Gyanarthi students love taking pictures, and the Photokari
                    Club is where they can truly unleash their creativity. This
                    club is not just about snapping photos for class projects.
                    Here, students see the world through a photographer's eye,
                    finding beauty in everyday things and inspiration in
                    unexpected places. Think of the Photokari Club as a training
                    ground for future photography stars! It is a fun and
                    supportive community where students can learn from each
                    other and share their unique ways of seeing the world. They
                    hold workshops to learn new skills, go on photo walks to
                    practice their techniques, and even have exhibitions to
                    showcase their amazing work. Through the power of pictures,
                    the Photokari Club helps students tell stories, make people
                    think, and capture moments that will stay with them forever!
                  </p>
                </TabPanel>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    At Gyanarthi Media College, there is more to student life
                    than just classes. The Shrijan Club is all about creating a
                    fun and engaging community on campus. They organize awesome
                    events and activities that go beyond textbooks. Think talks
                    with inspiring speakers who share their real-world
                    experiences, or workshops where the students can learn new
                    skills like photography, public speaking, or even how to
                    plan the ultimate movie night! The Shrijan Club is
                    passionate about bringing students together and giving them
                    a voice. The students at the club believe that everyone, no
                    matter their background or interests, should feel welcome to
                    share their ideas and make new friends. The club works hard
                    to make the college feel like a big family, where everyone
                    feels supported and inspired to explore their passions. With
                    the Shrijan Club, there is always something exciting
                    happening, like movie screenings, game nights, or even
                    volunteering events! The students get to explore plenty of
                    opportunities to express themselves, connect with others who
                    share their interests, and make their college experience
                    unforgettable!
                  </p>
                </TabPanel>
                <TabPanel className="tabpanel">
                  <p className="kalakari">
                    Gyanarthi's Tamasha Club is all about celebrating cultures
                    from around the world! It is a fun and inclusive space where
                    students can share their traditions and talents. Imagine
                    amazing dance performances that erupt with colourful
                    costumes and rhythmic beats. The students immerse themselves
                    in interesting art exhibits showcasing everything from
                    traditional paintings to modern photography, all bursting
                    with cultural pride. The Tamasha Club brings students
                    together, no matter where they come from. It is a chance to
                    learn about new customs, like celebrating a harvest festival
                    or the art of wearing a traditional headdress. They
                    appreciate different ways of life and make friends who share
                    their love for exploring the world. This club is like a
                    bridge between cultures, helping students understand and
                    respect each other's backgrounds. By joining the Tamasha
                    Club, the students get to express themselves through dance,
                    music, or art, experience new things that broaden their
                    horizons, and feel like a part of a big, welcoming community
                    at Gyanarthi!
                  </p>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ourvision;
