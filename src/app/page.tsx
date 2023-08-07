import Sidebar from "@/components/sidebar";
import Overview from "@/components/overview";
import Transactions from "@/components/transactions";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full">
        <Navbar />
        <div className="grid justify-center">
          <Overview />
          <Transactions />
        </div>
      </section>
    </main>
  );
}
