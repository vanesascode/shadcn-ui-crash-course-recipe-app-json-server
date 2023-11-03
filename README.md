# Crash course on Shadcn/ui creating a recipes site

### 🔹 Shadcn/ui

Docs [Here](https://ui.shadcn.com/docs/installation/next)

- npx shadcn-ui@latest init

Then, you can add the components you like. For example, if you want the [card](https://ui.shadcn.com/docs/components/card), : `npx shadcn-ui@latest add card`

👉 Install it and manage it a bit first, before you messing with Tailwind, because this library overides your Tailwind previous config.

---

#### - Placeholders:

- You can have nice placeholders while the content you are fetching is loading by using the `skeleton` component.

---

### - Darkmode:

Follow the [guide](https://ui.shadcn.com/docs/dark-mode/next)

- `npm install next-themes`

### 🔹 json-server

- `npm install -g json-server`

'json-server' is a command-line tool that allows you to quickly create a `REST API server from a JSON file`. It is useful for `testing` and prototyping purposes.

To start a JSON server that serves data from the db.json file located in the \_data directory:

- `json-server --watch ./_data/db.json --port 4000`

The --watch flag tells json-server to watch the db.json file for changes and automatically update the server if the file is modified.

The --port flag specifies that the server should listen on port 4000.

This command is commonly used during development to quickly create a mock API server for testing purposes.

It gives us a `Resources` link, from which we are going to be able to fetch the data from : http://localhost:4000/recipes

---
