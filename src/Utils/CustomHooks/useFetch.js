import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useQuery, gql } from '@apollo/client';
import Queries from 'Utils/Graphql/index';
import { useDispatcher } from 'Utils/CustomHooks/useDispatcher';

export const useFetch = () => {
  const { products, currency, currencies, handleProductList } = useDispatcher();

  const { loading, data, error } = useQuery(
    gql`
      ${Queries.GET_PRODUCTS(currencies)}
    `
  );

  useEffect(() => {
    if (error) {
      handleProductList({ error: error });
      toast.error(
        error?.message ?? 'Some thing wrong, please refresh your page'
      );
    } else if (data) {
      const { products, currency, error } = data;
      handleProductList({
        products,
        currency,
        error: error,
      });
    }
  }, [data, currencies, error]);

  return { loading, error, products, currency };
};
