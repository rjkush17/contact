import AddContact from "./Components/AddContact"
import ContactList from "./Components/ContactList"


function App() {

  return (
    <>
      <div className="font-pops bg-body  min-h-[100vh] text-normal" >
      <AddContact/>
      <hr className="h-full"/>
      <ContactList/>
      </div>
    </>
  )
}

export default App
