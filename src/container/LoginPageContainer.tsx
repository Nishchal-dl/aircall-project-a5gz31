import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../api/AuthApi';
import Login from '../component/Login';
import { LoginApiRequest } from '../types/Api';
import { saveAuthToken } from '../utils/ApiUtils';

export const LoginPage: React.FC<{}> = () => {
  const [credentials, setCredentials] = useState<LoginApiRequest>();

  const navigate = useNavigate();

  useEffect(() => {
    credentials &&
      AuthApi.login(credentials)
        .then((r) => r.data)
        .then((r) => saveAuthToken(r))
        .then((r) => navigate('/calls'));
  }, [credentials]);

  return <Login setCredentials={setCredentials} />;
};
