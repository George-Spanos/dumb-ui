import { lazy } from "solid-js";
const Greeting = lazy(async () => {
  const url = "https://dumb-api.azurewebsites.net";
  const result = await fetch(url + "/greet").then((r) => r.json());
  console.log(result);
  return <h3>Hello</h3>;
});
function App() {
  return (
    <>
      <h1>Hello from dumbUI</h1>
      <Greeting />
    </>
  );
}

export default App;
