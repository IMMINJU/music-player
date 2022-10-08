export const msToTime = (duration: number) => {
  const _seconds = parseInt(((duration / 1000) % 60).toFixed());
  const _minutes = parseInt(((duration / (1000 * 60)) % 60).toFixed());

  const minutes = _minutes < 10 ? "0" + _minutes : _minutes;
  const seconds = _seconds < 10 ? "0" + _seconds : _seconds;

  return minutes + ":" + seconds;
};
