import { AxiosRequestConfig } from "axios";
import Produto from "../interfaces/produto";
import { URL_PRODUTOS } from "../util/constants";
import CustomError from "../util/customError";
import useAxios from "./useAxios";

const useApiProduto = () => {
  const axiosInstance = useAxios();

  const recuperarProdutosPorSlugDaCategoria = (slug?: string) =>
    axiosInstance
      .get<Produto[]>(URL_PRODUTOS + (slug ? "/categoria/" + slug : ""))
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        } else if (error.request) {
          throw error;
        } else {
          throw error;
        }
      });

  const recuperarProdutosPaginadosPorSlugDaCategoria = (
    config: AxiosRequestConfig
  ) =>
    axiosInstance
      .get<ResultadoPaginado<Produto>>(
        URL_PRODUTOS + "/categoria/paginacao",
        config
      )
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        } else if (error.request) {
          throw error;
        } else {
          throw error;
        }
      });

  const recuperarProdutosPorId = (id: number) =>
    axiosInstance
      .get<Produto>(`${URL_PRODUTOS}/${id}`)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw new CustomError(
            error.response.data.message,
            error.response.data.errorCode
          );
        } else if (error.request) {
          throw error;
        } else {
          throw error;
        }
      });

      const removerProduto = (id: number) =>
      axiosInstance
        .delete(URL_PRODUTOS + "/" + id)
        .then((res) => res.data)
        .catch((error) => {
          if (error.response) {
            throw new CustomError(
              error.response.data.message,
              error.response.data.errorCode
            );
          } else if (error.request) {
            throw error;
          } else {
            throw error;
          }
        });

  return {
    recuperarProdutosPorSlugDaCategoria,
    recuperarProdutosPaginadosPorSlugDaCategoria,
    recuperarProdutosPorId, 
    removerProduto,
  };
};

export default useApiProduto;
