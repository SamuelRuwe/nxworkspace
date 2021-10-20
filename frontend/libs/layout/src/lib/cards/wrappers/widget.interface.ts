export interface Widget {
  title: string;
  load: () => void;
  refresh: () => void;
}
