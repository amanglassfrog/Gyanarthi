// app/courses/[program]/page.js
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';
import CoursePageServer from './CoursePageServer';

const CoursePage = ({ params }) => {
  return (<>
    
    
    <CoursePageServer params={params} />
    <FloatingIcons />
  </>);
};

export default CoursePage;
