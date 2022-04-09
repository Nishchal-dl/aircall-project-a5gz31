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
import { useState } from 'react';
import './app.css';

function Login() {
  const [country, setCountry] = useState();
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
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
              <TextFieldInput placeholder="john.doe@example.com" />
            </FormItem>
            <FormItem label="Password" name="email" helpText="Forgot password!">
              <TextFieldInput type="password" />
            </FormItem>
            <FormItem>
              <Button block>Login</Button>
            </FormItem>
          </Spacer>
        </Form>
      </Box>
    </main>
  );
}

export default Login;
