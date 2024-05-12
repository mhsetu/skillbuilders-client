import React from 'react';

const Blog = () => {
  return (
    <div className=' py-8 text-left lg:min-h-[800px] md:min-h-[800px] min-h-600px'>
      <h1 className='text-4xl font-semibold text-center mb-4'>
        Questions & Answer{' '}
      </h1>
      <div className='mx-10 mb-8  '>
        <div>
          <h2 className='card-title'>What is cors?</h2>
          <p>
            CORS, or Cross-Origin Resource Sharing, is a protocol utilized
            within HTTP headers, enabling a server to specify which origins,
            aside from its own, are permitted to load its resources. This system
            involves browsers sending a preliminary request, known as a
            "preflight," to the server to confirm permission for the intended
            request. During this preflight, the browser includes headers
            detailing the HTTP method and headers intended for the actual
            request.
          </p>
        </div>
      </div>
      <div className='mx-10 mb-8  '>
        <div>
          <h2 className='card-title'>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Firebase Authentication to allow users to sign in to your app using
            one or more sign-in methods, including email address and password
            sign-in, and federated identity providers such as Google Sign-in and
            Facebook Login
          </p>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
        </div>
      </div>
      <div className='mx-10 mb-8  '>
        <div>
          <h2 className='card-title'>How does the private route work?</h2>
          {/* <p>
          Private Routes in React are routes that require authentication before granting access to specific components or pages. They ensure that only authenticated users can navigate to designated parts of the application, adding a layer of security.
          </p> */}
          <p>
            In web development, a private route is a route or endpoint within an
            application that requires authentication or authorization before
            granting access to the content or resources it serves. Typically,
            when a user attempts to access a private route, the application
            first checks whether the user is authenticated and authorized to
            view the content. If the user is not authenticated, they may be
            redirected to a login page or prompted to authenticate through
            another method. If the user is authenticated but lacks the necessary
            authorization, they may receive an error message or be redirected to
            a different page. Private routes help secure sensitive information
            and functionalities within an application, ensuring that only
            authorized users can access them, thereby enhancing overall security
            and protecting user data.
          </p>
        </div>
      </div>
      <div className='mx-10 mb-8  '>
        <div>
          <h2 className='card-title'>What is Node? How does Node work?</h2>
          {/* <p>
          Private Routes in React are routes that require authentication before granting access to specific components or pages. They ensure that only authenticated users can navigate to designated parts of the application, adding a layer of security.
          </p> */}
          <p>
            Node.js is an open-source, cross-platform JavaScript runtime
            environment that allows developers to run JavaScript code outside of
            a web browser. It utilizes the V8 JavaScript engine, originally
            developed by Google for the Chrome browser, to execute JavaScript
            code on the server-side. Node.js follows an event-driven,
            non-blocking I/O model, which means it can handle multiple
            concurrent connections efficiently without getting blocked by I/O
            operations. This is achieved through the use of event loops and
            callbacks. Node.js applications are typically built using modules
            and packages from the npm (Node Package Manager) ecosystem, which
            offers a vast array of tools and libraries for various purposes.
            Overall, Node.js enables developers to create scalable and
            high-performance network applications, web servers, APIs, and more
            using JavaScript, both on the server-side and in command-line
            environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
