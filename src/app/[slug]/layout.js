

"use client";
import React from "react";
import posts from '../data/posts';
import { useParams } from 'next/navigation';
import { slugify } from '@/utils';

import Head from "next/head";

const Layout = ({ children }) => {
const { slug } = useParams();
    const post = posts.find(post => slugify(post.title) === slug);

    if (!post) return <p>Loading...</p>;
  return (
    <>
    
                <Head>
                    <title>{post.title}</title>
                    <meta name="description" content={post.metadescription} />
        </Head>
        {children}
           

      
    </>
  );
};

export default Layout;









