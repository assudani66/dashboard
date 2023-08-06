import Sidebar from "@/components/sidebar";
import Overview from "@/components/overview";
import Transactions from "@/components/transactions";

export default function Home() {
  return (
    <main>
      <aside>
        <Sidebar />
      </aside>
      <section>
        <Overview />
      </section>
      <section>
        <Transactions />
      </section>
    </main>
  );
}
