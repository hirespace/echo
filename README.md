# Echo Server

Put whatever content you want the server to respond with

* Headers as described by `./response/headers.json`
* Content as described by `./response/body.bin`

All requests to the server will respond with this data as headers and response body, respectively

# Setup and Start

Using the node version described in `.nvmrc`

1. Install required dependencies with `npm install`
2. Run the server with `npm run start`
3. If you wish to define a port to run on, then pass it into the start command, e.g.

    ```
    npm run start -- 8080
    ```
