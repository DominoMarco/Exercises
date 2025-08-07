type EqualFn<T> = (lhs: T, rhs: T) => boolean;
type GetterFn<T> = () => T;
type SetterFn<T> = (value: T) => T;
type UnsubscribeFn = () => void;
type UpdateFn<T> = (value?: T) => T;

type InputPair<T> = [GetterFn<T>, SetterFn<T>];

type Options = {
  name: string; // for debugging
};

type ObserverR = {
  name?: string;
};

type ObserverV<T> = {
  value?: T;
  updateFn: UpdateFn<T>;
};

type Observer<T> = ObserverR & ObserverV<T>;

type SubjectR = {
  name?: string;
  observer: ObserverR | undefined;
};

type SubjectV<T> = {
  value: T;
  equalFn?: EqualFn<T>;
};

type Subject<T> = SubjectR & SubjectV<T>;

// module Context value
let activeObserver: ObserverR | undefined = undefined;

function updateObserver<T>(observer: Observer<T>): void {
  const prevObserver = activeObserver;
  activeObserver = observer;
  observer.value = observer.updateFn(observer.value);
  activeObserver = prevObserver;
}

function createInput<T>(
  value: T,
  _equal?: boolean | EqualFn<T>,
  options?: Options
): InputPair<T> {
  const s: Subject<T> = {
    name: options?.name,
    observer: undefined,
    value,
    equalFn: undefined,
  };

  const read: GetterFn<T> = () => {
    if (activeObserver) s.observer = activeObserver;
    return s.value;
  };

  const write: SetterFn<T> = (nextValue) => {
    s.value = nextValue;
    if (s.observer) updateObserver(s.observer as Observer<unknown>);

    return s.value;
  };

  return [read, write];
}
function createComputed<T>(
  updateFn: UpdateFn<T>,
  value?: T,
  _equal?: boolean | EqualFn<T>,
  options?: { name?: string }
): GetterFn<T> {
  const o: Observer<T> = {
    name: options?.name,
    value,
    updateFn,
  };
  updateObserver(o);

  return (): T => {
    if (o.value === undefined) {
      throw new Error("Computed value is undefined");
    }
    return o.value;
  };
}

function createCallback<T>(_updateFn: UpdateFn<T>, _value?: T): UnsubscribeFn {
  const observer = {};
  return ((observer: unknown | undefined) => (): void => {
    if (!observer) return;
    observer = undefined;
    // i.e. dispose of any active subscriptions
  })(observer);
}

export { createInput, createComputed, createCallback };
