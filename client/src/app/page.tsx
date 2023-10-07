type Message = {
  message: string;
};

const getMessage = async (): Promise<Message> => {
  const res = await fetch("http://localhost:8080/");

  if (!res) {
    throw new Error("Error fetching message");
  }

  const data = await res.json();
  return data;
};

const HomePage = async () => {
  const message = await getMessage();
  return (
    <div>
      <h1>HomePage</h1>

      {message ? <p>{message.message}</p> : null}
    </div>
  );
};

export default HomePage;
