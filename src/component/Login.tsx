import {
  Box,
  Button,
  CallbackOutlined,
  Checkbox,
  Flex,
  Form,
  FormItem,
  Grid,
  Icon,
  Select,
  Spacer,
  TextFieldInput,
  Typography,
} from '@aircall/tractor';
import React, { SyntheticEvent, useState } from 'react';
import '../app.css';
import { LoginApiRequest } from '../types/Api';

type LoginProp = {
  setCredentials: (credentials: LoginApiRequest) => void;
};

const Login: React.FC<LoginProp> = ({ setCredentials }) => {
  const [country, setCountry] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;
    setCredentials({ username, password });
  };
  return (
    <main className="app">
      <Box
        width="25rem"
        mx="auto"
        p="1rem"
        border="1px solid #eee"
        boxShadow={4}
        borderRadius={16}
      >
        <Form onSubmit={handleLogin}>
          <Spacer space="m" direction="vertical" width="100%">
            <Flex
              justifyContent="space-between"
              flexDirection="column"
              alignItems="center"
            >
              <Spacer
                space="xxs"
                direction="vertical"
                width="100%"
                alignItems="center"
              >
                <Icon
                  component={CallbackOutlined}
                  size={64}
                  mx="auto"
                  color="primary.base"
                />
                <Typography variant="heading">Hello Again!</Typography>
                <Typography variant="body2" color="grey.dark">
                  View call history and more
                </Typography>
              </Spacer>
            </Flex>
            <FormItem label="Email" name="email">
              <TextFieldInput placeholder="john@email.com" />
            </FormItem>
            <FormItem
              label="Password"
              name="password"
              helpText="Forgot password!"
            >
              <TextFieldInput type="password" />
            </FormItem>
            <FormItem>
              <Button block type="submit">
                Login
              </Button>
            </FormItem>
          </Spacer>
        </Form>
      </Box>
    </main>
  );
};

export default Login;
