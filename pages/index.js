import { Layout } from "../components/layout";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center items-center h-[50vh]">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome to Skill Matcher
        </h1>
      </div>
    </Layout>
  );
}
