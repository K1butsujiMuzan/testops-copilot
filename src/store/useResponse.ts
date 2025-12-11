import { create } from "zustand";

interface IResponseStore {
  responses: string[];
  setResponses: (responses: string[]) => void;
  clearResponses: () => void;
  addResponse: (content: string) => void;
}

export const useResponseStore = create<IResponseStore>((set) => ({
  responses: [],

  setResponses: (responses: string[]) => {
    set({ responses });
  },

  clearResponses: () => {
    set({ responses: [] });
  },

  addResponse: (content: string) => {
    set((state) => ({
      responses: [...state.responses, content]
    }));
  }
}));

export const useResponses = () => useResponseStore(state => state.responses);
export const useSetResponses = () => useResponseStore(state => state.setResponses);
export const useClearResponses = () => useResponseStore(state => state.clearResponses);
export const useAddResponse = () => useResponseStore(state => state.addResponse);