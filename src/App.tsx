import Header from "./layout/Header/Header.tsx";
import CasesAside from "./layout/CasesAside/CasesAside.tsx";
import Main from "./layout/Main/Main.tsx";
import MetadataAside from "./layout/MetadataAside/MetadataAside.tsx";

function App() {
  return (
    <>
      <Header />
      <div className={'flex-1 flex relative'}>
        <CasesAside/>
        <Main />
        <MetadataAside />
      </div>
    </>
  )
}

export default App
