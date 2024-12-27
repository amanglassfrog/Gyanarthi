import { Plus_Jakarta_Sans } from "next/font/google";
import posts from '../data/posts';


import { slugify } from '@/utils';
import parse from 'html-react-parser';
const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });



export const metadata = {
  title: "posts.titles",
  description:"{posts.metadescription}",
 
};

    

const Layout = ({ children }) => {
 const { slug } = useParams();
    const post = posts.find(post => slugify(post.title) === slug);

    if (!post) return <p>Loading...</p>;
    console.log(post.title);
  return (
    <>
     
           
            {children}
            
          
    </>
  );
};

export default Layout;