// @flow

declare class ReactSyntheticEvent {
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isDefaultPrevented(): boolean;
    isPropagationStopped(): boolean;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    stopPropagation(): void;
    target: {
      value: string,
      name: string,
    };
    timeStamp: number;
    type: string;
    persist(): void;
}

declare class ReactChildren {}
