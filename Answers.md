## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] Mention two parts of Express that you learned about this week.

      Middleware and Routing

- [ ] Describe Middleware?

    Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

    Middleware functions can perform the following tasks:

    Execute any code.
    Make changes to the request and the response objects.
    End the request-response cycle.
    Call the next middleware in the stack.

- [ ] Describe a Resource?

    everything is a resource.
    each resource is accessible via a unique URI.
    resources can have multiple representations.
    communication happens over a stateless protocol (HTTP).
    resource management happens via HTTP methods.

- [ ] What can the API return to help clients know if a request was successful?
  
  
    status code in the 200's  200 is success 201 is created 

- [ ] How can we partition our application into sub-applications?

    we build out the sub app and call for it in the main app at whatever location we want it with the use function.

    example is using using routers and bringing them into server.