type ColorMode = '' | 'light' | 'dark';
type StatusType = 'error' | 'loading' | 'success';

export interface AppState {
  theme: {
    /** Contains the current global color pallette. Defaults to system when unset. */
    mode: ColorMode;
  };
  status: { message: string; type?: StatusType };
  // search: { text: string };
}

export class AppModel {
  static readonly DEFAULT_STATE: AppState = {
    theme: { mode: 'light' },
    status: { message: 'Ready' },
  };

  _state: AppState;

  // our cached state representation,  get's
  // re-generated on next state-read any time
  // a mutation calls dirtyState so that
  // we can call dirtyState MANY times
  // syncronously without needing to
  // regenerate our stringified state for
  // output...
  _stringifiedState: string;

  constructor() {
    this._state = JSON.parse(JSON.stringify(AppModel.DEFAULT_STATE));
    this._stringifiedState = '';
  }

  dirtyState() {
    this._stringifiedState = '';
  }

  get stringifiedState() {
    if (!this._stringifiedState) {
      this._stringifiedState = JSON.stringify(this._state);
    }
    return this._stringifiedState;
  }

  getTheme(): AppState['theme'] {
    return JSON.parse(JSON.stringify(this._state.theme));
  }

  setTheme(value: Partial<AppState['theme']>) {
    this._state.theme = { ...this._state.theme, ...value };
    this.dirtyState();
  }

  getStatus(): AppState['status'] {
    return JSON.parse(JSON.stringify(this._state.status));
  }

  setStatus(value: Partial<AppState['status']>) {
    this._state.status = { ...this._state.status, ...value };
    this.dirtyState();
  }

  reset() {
    this._state = JSON.parse(JSON.stringify(AppModel.DEFAULT_STATE));
    this.dirtyState();
  }

  get state() {
    return JSON.parse(this.stringifiedState);
  }

  set state(newState: AppState) {
    this._state = JSON.parse(JSON.stringify(newState));
    this.dirtyState();
  }
}

export default AppModel;
