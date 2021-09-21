import {
  Stack,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";

export const Auth = () => {
  const { authenticate, isAuthenticating, authError } = useMoralis();

  const SignUp = () => {
    const { signup } = useMoralis();
    const [username, setUsername] = useState<string>(null!);
    const [email, setEmail] = useState<string>(null!);
    const [password, setPassword] = useState<string>(null!);

    return (
      <Stack spacing={3}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => signup(username, password, email)}>
          Sign up
        </Button>
      </Stack>
    );
  };

  const Login = () => {
    const { login } = useMoralis();
    const [username, setUsername] = useState<string>(null!);
    const [password, setPassword] = useState<string>(null!);

    return (
      <Stack spacing={3}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => login(username, password)}>Login</Button>
      </Stack>
    );
  };

  return (
    <Stack spacing={6}>
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <Stack spacing={6} flex="1">
            <AlertTitle>Ups! Authentication has failed.</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Stack>
          {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
        </Alert>
      )}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Connect with Metamask
      </Button>{" "}
      <Text>
        <em>or</em>
      </Text>
      <SignUp />
      <Text>
        <em>or</em>
      </Text>
      <Login />
    </Stack>
  );
};
