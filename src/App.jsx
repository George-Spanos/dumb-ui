import { lazy } from "solid-js";
const Greeting = lazy(async () => {
  const result = await fetch("api/greet").then(
    (r) => r.json()
  );
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
