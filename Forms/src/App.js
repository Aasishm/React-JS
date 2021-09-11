import BasicForm from './components/BasicForm';

function App() {

  const saveHandler = (name) => {
    console.log(name);
  }

  return (
    <div className="app">
      <BasicForm onSave={saveHandler}/>
    </div>
  );
}

export default App;
