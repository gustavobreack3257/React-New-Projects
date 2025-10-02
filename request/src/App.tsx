import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserInfo from "../src/components/user-info";
import UseNewForm from "./components/user-new-form";
import UsersList from "./components/users-list";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />;
      <hr />
      <UseNewForm />
      <hr />
      <UsersList />
    </QueryClientProvider>
  );
}
