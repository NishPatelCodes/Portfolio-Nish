const LAYER_COUNT = 12;

export function ScrollBlur() {
  return (
    <div aria-hidden className="apple-blur">
      {Array.from({ length: LAYER_COUNT }, (_, index) => {
        const t = index / (LAYER_COUNT - 1);
        const height = 100 - t * 58;
        const blur = 0.4 + t ** 1.7 * 16;

        return (
          <div
            key={index}
            className="apple-blur__layer"
            style={{
              height: `${height}%`,
              backdropFilter: `blur(${blur.toFixed(2)}px)`,
              WebkitBackdropFilter: `blur(${blur.toFixed(2)}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
