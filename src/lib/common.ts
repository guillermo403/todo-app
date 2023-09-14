export const log = (...args: any[]) =>
  window.console.log({ time: new Date().toLocaleTimeString(), ...args })
