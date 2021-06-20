/**
 * @module Console
 * @description Console wrapper
 */

import { ConsoleConfig } from "../types";

/**
 * @description Creates a dummy object for console object and assignes dummy functions to same
 */
const DummyConsole = ((): globalThis.Console => {
    const dummyConsole: { [key: string]: any } = { ...console };

    const keys = Object.keys(dummyConsole);
    for (const key of keys) {
        if (typeof dummyConsole[key] === "function") {
            dummyConsole[key] = (): null => {
                return null;
            };
        }
    }

    return dummyConsole as globalThis.Console;
})();

/**
 * @description Console class
 * @param { ConsoleConfig } config Console Configuration
 */

/** get console instance  */
const Console = (config: ConsoleConfig): null | globalThis.Console => {
    const env = process.env.NODE_ENV;
    // make sure disableIn is an array
    const disableIn = config.disableIn == null || !Array.isArray(config.disableIn) ? [] : config.disableIn;

    if (disableIn.includes(env)) {
        return DummyConsole;
    }

    return console;
};

export default Console;
