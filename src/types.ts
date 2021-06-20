/**
 * Defines the Console configuration
 */
export interface ConsoleConfig {
    /**
     * List of process.env.NODE_ENV values for which this console
     * must be disabled. The values will be checked agains process.env.NODE_ENV
     * variable. For example, if you want to disable logging for production
     * environments, pass the value like disableIn: ["production"]
     */
    disableIn?: string[];
}
