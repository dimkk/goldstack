import dataUriToBuffer from 'data-uri-to-buffer';

/**
 * Safe handling of uris to buffer to ensure it works in tests.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dataUriToSrc = (uri: any): string => {
  if (typeof uri !== 'string') {
    return '';
  }

  if (!uri.startsWith('data:')) {
    return '';
  }

  return dataUriToBuffer(uri).toString();
};
