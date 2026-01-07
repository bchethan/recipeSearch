import http from "node:http";
import "dotenv/config";

const port = 8000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/api") {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}`);
            const data = await response.json();
            
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        });
      res.end(JSON.stringify(data));
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal server error" }));
    }
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("welcome to home page");
  }
});

server.listen(port, () =>
  console.log(`server is live at http://localhost${port}`)
);
