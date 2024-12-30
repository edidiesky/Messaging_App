import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loader/index";

import { ProtectRoute } from "./utils/ProtectRoute";
import WorkspaceLayout from "./screens/workspace/Layout";
import { Channel } from "./screens/workspace";
export default function App() {
  // const [height, setHeight] = useState(0);

  return (
    <div>
      <Routes>
        {/* workspace layout */}
        <Route path={"/workspace/channel"} element={<WorkspaceLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <ProtectRoute>
                  <Channel />
                </ProtectRoute>

              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}