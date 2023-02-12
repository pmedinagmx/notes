import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-zinc-900 ">
      <div className="container mx-auto p-10 pb-24">
        <TaskForm />
        <TaskList />
      </div>
      <Footer />
    </main>
  );
}

export default App;
