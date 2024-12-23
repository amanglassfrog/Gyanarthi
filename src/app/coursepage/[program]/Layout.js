import { Plus_Jakarta_Sans } from "next/font/google";
import FloatingIcons from '@/Components/FloatingIcons/FloatingIcons';
import CoursePageServer from './CoursePageServer';
import PageClient from './PageClient';
import admisiions from '../../../../public/admissions.png';

import { slugify } from '@/utils';
const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });



export const metadata = {
  title: "{selectedCourse.metatitle}",
  description:
    "{selectedCourse.metadescription}",
 
};

    

const Layout = ({ children }) => {
  const { program } = params;
    const decodedProgram = decodeURIComponent(program);  // Decode URL-encoded string
    const selectedCourse = courses.find(course => slugify(course.name) === decodedProgram);

    if (!selectedCourse) {
        return <div>Course not found</div>;
    }
  return (
    <>
     
           
            {children}
            
          
    </>
  );
};

export default Layout;