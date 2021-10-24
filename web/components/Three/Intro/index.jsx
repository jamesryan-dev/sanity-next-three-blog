import React, { lazy, useState, useEffect, Suspense } from "react";
import ErrorBoundry from "../../ErrorBoundry";
const CanvasIntro = lazy(() => import("./Canvas"));

function ThreeIntro(props) {
  const { type } = props;
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        {hasMounted && (
          <ErrorBoundry fallback={null}>
            <CanvasIntro type={type} />
          </ErrorBoundry>
        )}
      </Suspense>
    </>
  );
}

export default ThreeIntro;
