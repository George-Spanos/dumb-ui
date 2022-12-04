import { lazy } from "solid-js";
const Greeting = lazy(async () => {
  const result = await fetch("https://someurl.com");
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
