import { useState } from 'react'
import './App.css'
import useTraverseTree from './Hooks/useTraverseTree'
import Folder from './Components/Folder'
import explorer from './Data/data'
function App() {
   const [explorerData,setExplorerData]=useState(explorer);
   const {insertNode} =useTraverseTree();
   const handleInsertNode=(folderID,item,isFolder)=>{
    const finalTree=insertNode(explorerData,folderID,item,isFolder);
    setExplorerData(finalTree)
   }
  return (
    <div className='App'>

      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}  />
    </div>
  )
}

export default App
