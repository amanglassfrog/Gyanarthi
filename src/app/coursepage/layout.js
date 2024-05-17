import Head from 'next/head';

const layout = ({ children, metatitle, metadescription }) => (

    <>
        <Head>
            <title>{metatitle}</title>
            <meta name="description" content={metadescription} />
            {/* Add other meta tags if needed */}
        </Head>
        {/* Your common layout structure */}
        {children}
    </>
);

export default layout;
