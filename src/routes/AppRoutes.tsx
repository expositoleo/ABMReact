import { Route, Routes } from "react-router-dom"
import TablaProductos from "../pages/TablaProductos.tsx"
const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<TablaProductos/>}> </Route> {/*TablaProductos*/}
    </Routes>
  )
}

export default AppRoutes