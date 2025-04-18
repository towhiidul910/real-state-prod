Operation:
Takes a NewProduct object as input.
Sends a POST request to /products with the product data in the request body.
Invalidates Tags:
Uses invalidatesTags: ["Products"] to trigger cache invalidation so that any list or view that depends on products is refreshed.
