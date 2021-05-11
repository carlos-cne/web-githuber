import { useState } from "react";
import { useUser } from "../../hook/useUser";
import { Button, Container, Form, Input } from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const { signIn } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Digite seu usuário"
          onChange={handleChange}
          value={username}
        />
        <Button type="submit">Prossegir</Button>
      </Form>
    </Container>
  );
};

export default Login;
