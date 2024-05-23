// app/courses/[program]/page.js
import CoursePageServer from './CoursePageServer';

const CoursePage = ({ params }) => {
  return <CoursePageServer params={params} />;
};

export default CoursePage;
