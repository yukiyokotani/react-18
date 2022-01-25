/* eslint-disable no-nested-ternary */
import React, { useCallback, useState, useTransition } from 'react';

function sleep(ms: number) {
  const startTime = performance.now();
  while (performance.now() - startTime < ms);
}

const SlowRenderComponent: React.VFC<{
  isShown: boolean;
}> = ({ isShown }) => {
  return (
    <div>
      <p>
        {isShown
          ? `SlowRenderComponent has been rendered at ${new Date().toLocaleTimeString()}`
          : `Not rendered yet.`}
      </p>
    </div>
  );
};

const TransitionSample: React.VFC = () => {
  const [isSRCShown, setIsSRCShown] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleClickWithTransition = useCallback(() => {
    setStartDate(new Date());
    startTransition(() => {
      setIsSRCShown(() => {
        sleep(3000);
        return true;
      });
    });
  }, [setStartDate, startTransition, setIsSRCShown]);

  const handleClickWithoutTransition = useCallback(() => {
    setStartDate(new Date());
    setIsSRCShown(() => {
      sleep(3000);
      return true;
    });
  }, [setStartDate, setIsSRCShown]);

  const reset = () => {
    setStartDate(null);
    setIsSRCShown(false);
  };

  return (
    <div>
      <h2>Transition</h2>
      <p>Comparison of slow rendering with and without transition</p>
      <p>After pressing Render, it takes 3 seconds to render.</p>
      {isPending ? (
        <div>
          <p>Rendering...</p>
        </div>
      ) : (
        <SlowRenderComponent isShown={isSRCShown} />
      )}
      <div className="button-container">
        <button
          type="button"
          disabled={startDate !== null}
          onClick={handleClickWithTransition}
        >
          Render w/ Transition
        </button>
        <button
          disabled={startDate !== null}
          type="button"
          onClick={handleClickWithoutTransition}
        >
          Render w/o Transition
        </button>
        <span>
          {startDate ? (
            <span>{`Clicked at ${startDate?.toLocaleTimeString()}`}</span>
          ) : null}
        </span>
      </div>
      <div>
        <button type="button" disabled={startDate === null} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TransitionSample;
