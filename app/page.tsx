"use client";
import { setActiveStep, stepperSelecter } from "@/redux/slices/stepperSlice";
import { getDataByType } from "@/utils/data";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const type = 2;

export default function Home() {
  const [state, setState] = useState<any>([]);
  const { activeStep } = useSelector(stepperSelecter);
  const dispatch = useDispatch();

  const getSteps = useCallback(() => {
    const steps = getDataByType(2);
    setState(steps);
  }, [type]);

  useEffect(() => {
    getSteps();
  }, []);

  const changeState = () => {
    // setState((prev) => prev + 1);
    dispatch(setActiveStep(activeStep + 1));
  };

  const handleStepSelect = (step: string) => {
    dispatch(setActiveStep(step));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{activeStep}</h1>

      <div className="flex flex-direction-column">
        <div className="flex gap-20 cursor-pointer">
          {state.map((step: string) => (
            <div>{step}</div>
          ))}
        </div>

        <div>
          {state?.map((step: any) => (
            <div
              className="cursor-pointer"
              key={step}
              onClick={() => handleStepSelect(step)}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
