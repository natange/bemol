import type { Key } from "react";
import type { Id } from "../../../core/types/Id";

export interface PieceDTO {
  id: Id
  title: string
  composer: string
  key: Key;
  time: boolean;
  tempo: Date;
  status: Date;
}