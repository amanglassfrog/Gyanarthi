import React from "react";
import Head from "next/head";

const Layout = ({ children, post }) => {
  // If no post, just render the children
  if (!post) return <>{children}</>;

  return (
    <>
  <head>
        <title>{post.titles}</title>
        <meta name="description" content={post.metadescription } />
      </head>     
      {children} {/* Render the children (blog content) */}
    </>
  );
};

export default Layout;