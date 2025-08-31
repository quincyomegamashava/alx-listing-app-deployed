// interfaces/index.ts

// interfaces.ts
export interface CardProps {
  title: string;
  image: string;
  location?: string;
  price?: number;
}


export interface ButtonProps {
  label: string;
  onClick: () => void;
}
