// app/courses/[program]/page.js
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';
import CoursePageServer from './CoursePageServer';

const CoursePage = ({ params }) => {
  return (<>
    <head>
                    <title>{selectedCourse.metatitle}</title>
                    <meta name="description" content={selectedCourse.metadescription} />
                    <div dangerouslySetInnerHTML={{ __html: selectedCourse.schemas }} />

                    

                </head>
    
    <CoursePageServer params={params} />
    <FloatingIcons />
  </>);
};

export default CoursePage;
