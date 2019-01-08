import { satisfies } from 'semver';

const MIN_RUNTIME = '6';

export const supportedRange = `>= ${MIN_RUNTIME}`;

export function isSupported(runtimeVersion) {
  return satisfies(runtimeVersion, supportedRange);
}
