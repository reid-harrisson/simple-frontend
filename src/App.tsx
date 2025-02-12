import { TextInput, RoundButton } from "./components";

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("firstname"));
    console.log(formData.get("lastname"));
  };

  const handleReset = () => {
    console.log("Reset button clicked");
  };

  return (
    <form className="frame" onSubmit={handleSubmit} onReset={handleReset}>
      <TextInput name="firstname" label="First Name" />
      <TextInput name="lastname" label="Last Name" />
      <TextInput name="email" label="Email" />
      <TextInput name="address" label="Address" />
      <TextInput name="city" label="City" />
      <TextInput name="state" label="State" />
      <TextInput name="country" label="Country" />
      <RoundButton type="submit" label="Submit" />
      <RoundButton type="reset" label="Reset" />
    </form>
  );
}

export default App;
