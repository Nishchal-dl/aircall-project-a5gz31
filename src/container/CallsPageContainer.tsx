import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { AuthApi } from '../api/AuthApi';
import { CallApi, CALL_PAGE_LIMIT } from '../api/CallApi';
import { CallsPage } from '../component/CallsPage';
import { CallsApiResponse } from '../types/Api';
import { Call } from '../types/Call';
import { saveAuthToken } from '../utils/ApiUtils';

export const CallsPageContainer: React.FC<{}> = () => {
  const [calls, setCalls] = useState<Array<Call>>([]);
  const [page, setPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [totalCallCount, settotalCallCount] = useState<number>(0);

  useEffect(() => {
    CallApi.getCalls(page * CALL_PAGE_LIMIT)
      .then((res) => res.data)
      .then(({ nodes, totalCount, hasNextPage }) => {
        setHasNextPage(hasNextPage);
        setCalls(nodes);
        settotalCallCount(totalCount);
      });
  }, [page]);

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh-token');
    setInterval(() => {
      refreshToken &&
        AuthApi.refreshToken(refreshToken)
          .then((r) => r.data)
          .then((r) => saveAuthToken(r));
    }, 540000);
  }, []);

  function previousPage() {
    page && setPage((pre) => pre - 1);
  }

  function nextPage() {
    hasNextPage && setPage((pre) => pre + 1);
  }

  return (
    <>
      <CallsPage
        calls={calls}
        setPage={setPage}
        page={page}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      <Outlet />
    </>
  );
};
