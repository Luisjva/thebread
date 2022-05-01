import { colors } from "../../../utils";

export default function Date({ children, number }) {
  return (
    <div className="date">
      <h3>{number} K</h3>
      <p>{children}</p>

      <style jsx>{`
        .date {
          align-items: center;
          border: 2px solid ${colors.blanco};
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.5rem 0.5rem;
        }

        h3,
        p {
          margin-block-start: 0;
          margin-block-end: 0;
        }

        h3 {
          background: linear-gradient(90deg, ${colors.vino}, ${colors.naranja});
          font-size: 2rem;

          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        p {
          text-align: center;
        }

        @media screen and (max-width: 400px) {
          h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
