export default function Price() {
  return (
    <span className="price">
      <span className="price__coin">$</span>100
      <span className="price__penny">.55</span>
      <style jsx>{`
        .price {
          position: relative;
          padding-left: 0.6em;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .price__coin {
          position: absolute;
          font-size: 0.75em;
          left: 0;
        }

        .price__penny {
          font-size: 0.8em;
          margin-left: 0.2em;
        }
      `}</style>
    </span>
  );
}
