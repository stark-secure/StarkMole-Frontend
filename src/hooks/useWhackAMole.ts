import { useState, useCallback, useEffect } from "react";

interface GameState {
  score: number;
  timeLeft: number;
  moles: boolean[];
  gameActive: boolean;
  hitMoles: boolean[];
  moleHits: boolean[];
  showModal: boolean;
  finalScore: number;
}

export const useWhackAMole = () => {
  const [state, setState] = useState<GameState>({
    score: 0,
    timeLeft: 30,
    moles: Array(9).fill(false),
    gameActive: false,
    hitMoles: Array(9).fill(false),
    moleHits: Array(9).fill(false),
    showModal: false,
    finalScore: 0,
  });

  const startGame = useCallback(() => {
    setState((prev) => ({
      ...prev,
      gameActive: true,
      score: 0,
      timeLeft: 30,
      moles: Array(9).fill(false),
      hitMoles: Array(9).fill(false),
      moleHits: Array(9).fill(false),
      showModal: false,
    }));
  }, []);

  const popMole = useCallback(() => {
    if (!state.gameActive) return;

    const randomHole = Math.floor(Math.random() * 9);
    setState((prev) => {
      const newMoles = [...prev.moles];
      newMoles[randomHole] = true;
      const newMoleHits = [...prev.moleHits];
      newMoleHits[randomHole] = false;

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          moles: prev.moles.map((m, i) => (i === randomHole ? false : m)),
        }));
      }, 800);

      return {
        ...prev,
        moles: newMoles,
        moleHits: newMoleHits,
      };
    });
  }, [state.gameActive]);

  const whackMole = useCallback((index: number) => {
    if (!state.moles[index] || !state.gameActive || state.moleHits[index])
      return;

    setState((prev) => {
      const newMoleHits = [...prev.moleHits];
      newMoleHits[index] = true;

      const newMoles = [...prev.moles];
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          moles: prev.moles.map((m, i) => (i === index ? false : m)),
        }));
      }, 100);

      const newHitMoles = [...prev.hitMoles];
      newHitMoles[index] = true;
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          hitMoles: prev.hitMoles.map((h, i) => (i === index ? false : h)),
        }));
      }, 800);

      return {
        ...prev,
        score: prev.score + 1,
        moleHits: newMoleHits,
        hitMoles: newHitMoles,
      };
    });
  }, []);

  useEffect(() => {
    if (!state.gameActive) return;

    const moleInterval = setInterval(popMole, 1000);
    const timerInterval = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 1) {
          clearInterval(moleInterval);
          clearInterval(timerInterval);
          return {
            ...prev,
            gameActive: false,
            timeLeft: 0,
            finalScore: prev.score,
            showModal: true,
          };
        }
        return {
          ...prev,
          timeLeft: prev.timeLeft - 1,
        };
      });
    }, 1000);

    return () => {
      clearInterval(moleInterval);
      clearInterval(timerInterval);
    };
  }, [state.gameActive, popMole]);

  return {
    ...state,
    startGame,
    whackMole,
  };
};
