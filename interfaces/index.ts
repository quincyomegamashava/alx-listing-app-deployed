// interfaces/index.ts

// interfaces.ts
// export interface CardProps {
//   title: string;
//   image: string;
//   location?: string;
//   price?: number;
// }


// export interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

export interface CardProps {
  title: string;
  image: string;
  location?: string;      // Optional — e.g., "Miami, FL"
  price?: number;         // Optional — e.g., 120 (will be formatted as $120/night)
  children?: React.ReactNode; // Optional — for extra content inside card
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;   // Optional — allows button to be used for links or disabled states
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // Optional — for form usage
  disabled?: boolean;     // Optional — for loading/disabled states
  ariaLabel?: string;     // Optional — for accessibility
}
