
"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  cellSize = 56,
}: {
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  // Auto-size grid to fill screen
  useEffect(() => {
    const updateGridSize = () => {
      const height = window.innerHeight;
      const width = window.innerWidth;

      setRows(Math.ceil(height / cellSize));
      setCols(Math.ceil(width / cellSize));
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, [cellSize]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <DivGrid
        key={`grid-${rippleKey}`}
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        borderColor="rgba(255,255,255,0.08)"
        fillColor="rgba(255,255,255,0.02)"
        clickedCell={clickedCell}
        onCellClick={(row, col) => {
          setClickedCell({ row, col });
          setRippleKey((k) => k + 1);
        }}
        interactive={false}
        className="opacity-50"
      />
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

const DivGrid = ({
  className,
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick,
  interactive = true,
}: DivGridProps) => {
  const totalCells = rows * cols;

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
  };

  const cells = useMemo(() => Array.from({ length: totalCells }), [totalCells]);

  return (
    <div className={cn("absolute inset-0", className)} style={gridStyle}>
      {cells.map((_, idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;

        return (
          <div
            key={idx}
            className="border-[0.5px] border-white/10 bg-white/5 opacity-30 hover:opacity-60 transition"
            style={{
              borderColor,
              backgroundColor: fillColor,
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};
