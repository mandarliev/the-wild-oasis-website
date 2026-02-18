import Counter from "../components/Counter";

async function Page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json(),
  );

  return (
    <div>
      <h1>Cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}

export default Page;
