import React from "react";
import { api, fetcher } from "../../src/helpers/api";
import type { User } from "../../src/models/user";

export default function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<
    "idle" | "loading" | "saving"
  >("idle");

  const getUser = React.useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${username}`);

      setUser(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  async function createUser(payload: User) {
    try {
      setRequestStatus("saving");

      await api("/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      alert("Usuário criado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }
  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
    createUser,
  };
}
