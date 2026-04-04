import { blackChessPieces, chessPosition } from '../aboutContent';

export function ChessBoard() {
  return (
    <div className="about-chess-scene" aria-hidden="true">
      <div className="about-chess-bg" />
      <div className="about-chess-grain" />
      <div className="about-chess-light" />

      <div className="about-chess-board-wrap">
        <div className="about-chess-board">
          {chessPosition.flatMap((row, rowIndex) =>
            row.map((piece, columnIndex) => {
              const squareTone =
                (rowIndex + columnIndex) % 2 === 0
                  ? 'about-light-square'
                  : 'about-dark-square';
              const pieceTone = piece
                ? blackChessPieces.has(piece)
                  ? 'about-black-piece'
                  : 'about-white-piece'
                : '';

              return (
                <div
                  className={['about-sq', squareTone, pieceTone].filter(Boolean).join(' ')}
                  key={`${rowIndex}-${columnIndex}`}
                >
                  {piece}
                </div>
              );
            }),
          )}
        </div>
        <div className="about-chess-glow" />
      </div>
    </div>
  );
}
