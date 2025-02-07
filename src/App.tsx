import { TextInput } from "./components/inputs";

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("firstname"));
    console.log(formData.get("lastname"));
  };

  return (
    <form className="frame" onSubmit={handleSubmit}>
      <TextInput name="firstname" label="First Name" />
      <TextInput name="lastname" label="Last Name" />
      <TextInput name="email" label="Email" />
      <TextInput name="address" label="Address" />
      <TextInput name="city" label="City" />
      <TextInput name="state" label="State" />
      <TextInput name="country" label="Country" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
