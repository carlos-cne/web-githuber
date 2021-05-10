import { useState } from "react";
import {
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  Logo,
  Text,
} from "./styles";
import { useUser } from "../../hooks/useUser";

export default function Login() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const { signIn } = useUser();

  const handleOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors(null);
    try {
      await signIn(username);
    } catch (error) {
      console.log(error);
      if (error.message.includes("404")) {
        setErrors("Usuário inexistente.");
      } else if (error.message === "empty") {
        setErrors("Este é um campo obrigatório.");
      } else {
        setErrors("Ocorreu um erro inesperado. Tente novamente");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Logo src="/assets/githuber.png" />
        <Text>
          Para continuar, precisamos que você informe seu usuário no Github
        </Text>
        <Input
          placeholder="Digite seu usuário"
          onChange={handleOnChange}
          value={username}
        />
        {errors && <ErrorMessage>{errors}</ErrorMessage>}
        <Button $isLoading={isLoading} disabled={isLoading} type="submit">
          {isLoading ? "buscando..." : "prossegir"}
        </Button>
      </Form>
    </Container>
  );
}
