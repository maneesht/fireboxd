import { headers } from "next/headers";
import { ListAllMovies } from "./components/ListAllMovies";
import { WelcomeBanner } from "./components/WelcomeBanner";

export default function Home({

}) {
  const idToken = headers().get('authorization')?.split('Bearer ')[1];
  return (
    <main className="flex min-h-screen flex-col items-center pl-24 pb-24  pr-24">
      <WelcomeBanner />
      <ListAllMovies token={idToken!} />
    </main>
  );
}
