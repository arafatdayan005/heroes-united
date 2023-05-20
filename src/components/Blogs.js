import React from 'react'

function Blogs() {
    return (
        <>
            <div className='bg-blue-500 bg-opacity-20 pb-20 pt-16 text-center'>
                <h3 className='font-bold text-3xl'>Blogs</h3>
            </div>
            <div className='px-48 py-16'>
                <div className='my-6'>
                    <h3 className="text-2xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <p className='py-4 text-lg'>
                        Ans: An access token is a credential that is used to authorize and authenticate requests made by a client to access protected resources on a server. It typically has a short lifespan and is issued by an authentication server upon successful authentication. <br /> <br />
                        On the other hand, a refresh token is a long-lived credential that is used to obtain a new access token after the current one expires. When an access token expires, the client can send the refresh token to the authentication server to request a new access token without requiring the user to re-enter their credentials. <br /> <br />
                        The client application sends the user's credentials to the authentication server. If the credentials are valid, the authentication server generates an access token and a refresh token. The client includes the access token in the Authorization  request to protected resources on the server. The server verifies the access token's authenticity and checks if it has sufficient permissions to access the requested resource. <br /> <br />
                        The tokens can be stored as secure HTTP-only cookies. Cookies are automatically sent with each request to the server, making them convenient for managing tokens. Also, the tokens can be stored in the browser's local storage or session storage. This provides persistence even if the page is refreshed or closed. However, its not recommended to store access tokens in local storage because it can be easily accessable by hackers.
                    </p>
                </div>
                <div className='my-6'>
                    <h3 className="text-2xl font-semibold">2. Compare SQL and NoSQL databases?</h3>
                    <br />
                    <h4 className="text-xl font-semibold">SQL Database:</h4>
                    <p className='py-4 text-lg'>
                        1. SQL databases use a structured data model known as a relational model. Data is organized into tables with predefined schemas, and relationships are established between tables using keys.<br />
                        2. SQL databases have a fixed schema, meaning that the structure and data types of the tables are defined in advance. Changes to the schema require altering the table structure, which can be cumbersome for evolving applications.<br />
                        3. SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized syntax for performing complex queries, joins, aggregations, and data modifications.<br />
                        4. SQL databases are well-suited for applications that require complex queries, strong consistency, and structured data with predefined relationships, such as financial systems, e-commerce platforms, and content management systems.<br />
                        5. SQL databases typically scale vertically by adding more resources to a single server. Some SQL databases offer horizontal scaling through techniques like sharding, but it can be complex to manage.
                    </p>
                    <h4 className="text-xl font-semibold">NoSQL Database:</h4>
                    <p className='py-4 text-lg'>
                        1. NoSQL databases utilize various data models, such as key-value, document, columnar, or graph models. They provide more flexibility in terms of schema design and can handle unstructured or semi-structured data. <br />
                        2. NoSQL databases are designed for horizontal scalability. They distribute data across multiple servers, allowing for easy scaling by adding more servers to the database cluster. <br />
                        3. SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized syntax for performing complex queries, joins, aggregations, and data modifications. <br />
                        4. NoSQL databases may have their own query languages specific to their data model. For example, key-value stores use simple get and set operations, while document databases often use query languages similar to JSON. <br />
                        5. NoSQL databases excel in handling large-scale, rapidly changing, and unstructured data. They are commonly used in real-time analytics, content repositories, caching systems, IoT data management, and applications requiring high scalability and flexibility.
                    </p>
                </div>
                <div className='my-6'>
                    <h3 className="text-2xl font-semibold">3. What is Express JS? What is Nest JS?</h3>
                    <p className='py-4 text-lg'>
                        Ans: Express.js is a web application framework built on top of Node.js. It provides a set of tools and utilities that help developers create web applications for server side. Express.js simplifies the process of handling HTTP requests and responses, routing, middleware management, and serving static files. It allows developers to quickly create server-side applications using JavaScript, making it widely used in the Node.js system. <br /><br />

                        On the other hand, Nest.js is a TypeScript-based progressive framework for building scalable and efficient server-side applications. It follows the modular architecture pattern, allowing developers to organize their codebase into reusable modules, services, controllers, and providers.
                    </p>
                </div>
                <div className='my-6'>
                    <h3 className="text-2xl font-semibold">4. What is MongoDB aggregate and how does it work?</h3>
                    <p className='py-4 text-lg'>
                        Ans: In MongoDB, the aggregate framework provides a way to perform complex computations, transformations, and analysis on collections of documents.
                        <br /> <br />
                        In the aggregation pipeline, you list out a series of instructions in a "stage." For each stage that's defined, MongoDB executes them one after another in order to give a finalized output you're able to use.
                        <br /> <br />
                        $match: It is used for filtering the documents can reduce the amount of documents that are given as input to the next stage. <br />
                        $project: It is used to select some specific fields from a collection. <br />
                        $group: It is used to group documents based on some value. <br />
                        $sort: It is used to sort the document that is rearranging them. <br />
                        $skip: It is used to skip n number of documents and passes the remaining documents. <br />
                        $limit: It is used to pass first n number of documents thus limiting them. <br />
                        $unwind: It is used to unwind documents that are using arrays. <br />
                        $out: It is used to write resulting documents to a new collection. <br />
                    </p>
                </div>
            </div>
        </>
    )
}

export default Blogs