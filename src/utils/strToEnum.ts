import { InputOption } from "../types";

export const strToEnum = (val: Array<string>): Array<InputOption> => {
    return val.map((val) => ({ value: val, label: val }));
};
