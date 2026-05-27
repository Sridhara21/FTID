export class FirestorePermissionError extends Error {
  public operation?: string;
  public path?: string;
  public requestResourceData?: any;

  constructor(context: { operation?: string; path?: string; requestResourceData?: any }) {
    super(`Permission denied for ${context.operation} at ${context.path}`);
    this.name = 'FirestorePermissionError';
    this.operation = context.operation;
    this.path = context.path;
    this.requestResourceData = context.requestResourceData;
  }
}
